"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [showBackground, setShowBackground] = useState(false);
    const logOut = ()=>{
        return {}
    }
	const menuItems = [
		{ text: "Register", href: "/register" },
		{ text: "Login", href: "/login" },
		{ text: "Profile", href: "/profile" },
		{ text: "Log out", onClick: logOut, isButton: true },
	];
	useEffect(() => {
		const handleScroll = () => {
			// console.log(window.scrollY);
			const TOP_OFFSET = 60;
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const currentUser = { displayName: "Samuel Merrado" };

	return (
		<>
			<Disclosure as="nav" className="text-white fixed top-0 z-20 w-full">
				<div
					className={`px-4 md:px-16 py-6 transition duration-500 ${
						showBackground ? "bg-zinc-900 bg-opacity-90" : ""
					}`}
				>
					<div className="relative flex items-center justify-between">
						<Link href="/">
							<img
								src="/images/logo.png"
								className="h-4 lg:h-7"
								alt="Logo"
							/>
						</Link>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{currentUser && (
								<h5 className="mr-2 capitalize">
									{currentUser?.displayName}
								</h5>
							)}

							{/* Profile dropdown */}
							<Menu as="div" className="relative">
								<div>
									<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="sr-only">
											Open user menu
										</span>
										<img
											className="h-8 w-8 rounded-full"
											src={
												currentUser?.photoURL ||
												"/images/default-slate.png"
											}
											alt="user"
											loading="lazy"
											referrerPolicy="no-referrer"
										/>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										{menuItems.map((item, index) => (
											<Menu.Item key={index}>
												{({ active }) => (
													<>
														{item.isButton ? (
															<span
																className={classNames(
																	active
																		? "bg-gray-100"
																		: "",
																	"block px-4 py-2 text-sm text-gray-700 cursor-pointer"
																)}
																role="button"
																onClick={
																	item.onClick
																}
															>
																{item.text}
															</span>
														) : (
															<Link
																href={item.href}
																className={classNames(
																	active
																		? "bg-gray-100"
																		: "",
																	"block px-4 py-2 text-sm text-gray-700"
																)}
															>
																{item.text}
															</Link>
														)}
													</>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</Disclosure>
		</>
	);
};

export default Navbar;
