"use client";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/auth/firebase";
import {
	toastErrorNotify,
	toastSuccessNotify,
	toastWarnNotify,
} from "@/helpers/ToastNotify";


export const AuthContext = createContext();
export const useAuthContext = () => {
	return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);
	let router = useRouter();
	useEffect(() => {
		userObserver();
	}, []);

	const createUser = async (email, password, displayName) => {
		try {
			//? New user Method
			let userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			//? Update User's Profile
			await updateProfile(auth.currentUser, {
				displayName: displayName,
			});
			router.push("/profile");
			toastSuccessNotify("Registered successfully!");
			console.log(userCredential);
		} catch (err) {
			toastErrorNotify(err.message);
			// alert(err.message);
		}
	};

	//* https://console.firebase.google.com/
	//* => Authentication => sign-in-method => enable Email/password
	const signIn = async (email, password) => {
		try {
			//? For existed user's entering.
			let userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			router.push("/profile");
			toastSuccessNotify("Logged in successfully!");
			console.log(userCredential);
	
		} catch (err) {
			toastErrorNotify(err.message);
			// alert(err.message);
		}
	};
	const logOut = ()=>{
		signOut(auth)
		toastSuccessNotify("Logged out successfully!")
	}
	const userObserver = ()=>{
		onAuthStateChanged(auth,(currentUser)=>{
			if(currentUser){
				const {email,displayName, photoURL} = currentUser;
				setCurrentUser({email,displayName,photoURL})
				sessionStorage.setItem("user",JSON.stringify({email,displayName,photoURL}))
			} else {
				setCurrentUser(false)
				sessionStorage.clear()
			}
		})
	}
		//* https://console.firebase.google.com/
	//* => Authentication => sign-in-method => enable Google

	const signUpProvider = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				router.push("/profile");
				toastSuccessNotify("Logged in successfully!");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const forgotPassword = (email) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toastWarnNotify("Please check your mail box!");
			})
			.catch((err) => {
				toastErrorNotify(err.message);
			});
	};
	const values = { currentUser, createUser,signIn,logOut,userObserver,signUpProvider,forgotPassword };
	return (
		<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
