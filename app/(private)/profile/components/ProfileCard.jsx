import { useRouter } from "next/navigation";

const ProfileCard = ({ img, name, image, i }) => {
    const router = useRouter();
    console.log("i:", i);
    console.log("image:", image);

    return (
        <div className="w-44 mx-auto cursor-pointer" onClick={() => router.push("/movies")}>
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img className="w-max h-max object-contain" src={i === 0 && image ? image : img} alt={name} />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {name}
            </div>
        </div>
    );
};

export default ProfileCard;
