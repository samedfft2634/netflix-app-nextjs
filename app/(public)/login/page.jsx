"use client";
import { useAuthContext } from "@/context/AuthContext";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
	const {signIn,forgotPassword,signUpProvider} = useAuthContext()
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const {email} = info //? For forgotPassword
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = info;
		signIn(email, password);
	};
	return (
		<div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<div className="flex justify-center">
					<div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<form onSubmit={handleSubmit}>
							<h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
								Sign In
							</h2>
						
						
							<div className="relative z-0 w-full mb-6 group">
								<input
									name="email"
									className="peer"
									type="email"
									onChange={handleChange}
									placeholder=" "
									required
								/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input
									name="password"
									className="peer"
									type="password"
									onChange={handleChange}
									placeholder=" "
									required
								/>
								<label htmlFor="floating_password">
									Password
								</label>
							</div>
              <div className="flex justify-between">
                <span
                  className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
                  onClick={() => forgotPassword(email)}
                >
                  Forgot Password
                </span>
                <Link
                  className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
							<button className="btn-danger" type="submit">
								Login
							</button>
							<button
								className="flex justify-between text-center items-center btn-danger"
								type="button"
                onClick={signUpProvider}
							>
								Continue with Google
								<GoogleIcon color="currentColor" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
