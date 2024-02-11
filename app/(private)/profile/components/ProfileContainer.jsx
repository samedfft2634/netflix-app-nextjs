'use client'
import { useAuthContext } from "@/context/AuthContext";
import ProfileCard from "./ProfileCard";

const profileImages = [
    "/images/default-blue.png",
    "/images/default-red.png",
    "/images/default-slate.png",
    "/images/default-green.png",
];

const ProfileContainer = () => {
    const { currentUser } = useAuthContext();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            {profileImages.map((img, i) => (
                <ProfileCard
                    key={i}
                    img={img}
                    name={i === 0 && currentUser ? currentUser.displayName : `Guest-${i + 1}`}
                    image={i === 0 && currentUser ? currentUser.photoURL : null} 
                    i={i} 
                />
            ))}
        </div>
    );
};

export default ProfileContainer;
