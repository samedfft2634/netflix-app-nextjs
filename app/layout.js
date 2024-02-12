import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContextProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Netflix App",
	description: "A movie platform.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">

			<body className={inter.className}>
				<AuthContextProvider>
					<Navbar />
					{children}
					<ToastContainer />
				</AuthContextProvider>
			</body>
		</html>
	);
}
