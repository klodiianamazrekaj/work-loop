"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/logo.svg" height={50} width={50} alt="Logo" />
                        <span className="ml-2 text-lg font-bold text-gray-800">WorkLoop</span>
                    </div>
                    <Button asChild variant="secondary">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default AuthLayout;