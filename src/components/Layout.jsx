import React from "react";
import logo from '/logo.png'
import { Link } from "react-router-dom";
export default function Layout({children}){

    return (
        <div className="flex flex-col gap-y-8 h-screen max-w-10/12 md:max-w-8/12 lg:max-w-xl m-auto">
            <nav className="py-4 flex items-center"> 
                <div>
                    <img src={logo} alt="logo" className="size-12 " />
                </div>
                <Link className="font-bold m-auto" to={"/"}>
                    THE BLACK SPOT NOTICE
                </Link>
                <div>
                    {
                        // for search later
                    }
                </div>
            </nav>
            <div className="flex-auto py-4">
                {children}
            </div>
            <footer className="py-4 text-center">
                all rights reserved to Omran Kabo
            </footer>
        </div>
    )
}