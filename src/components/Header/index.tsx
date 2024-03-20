"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header className="w-full flex items-center justify-center bg-light dark:bg-dark">
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <Link
                        href="/"
                        className="w-full">
                        <Image
                            src="/images/logo/logo.svg"
                            alt="logo"
                            width={512}
                            height={512}
                            className="w-24"
                        />
                    </Link>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
};

export default Header;