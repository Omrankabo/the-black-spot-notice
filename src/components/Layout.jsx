import React from "react";

export default function Layout({children}){

    return (
        <div className="flex flex-col gap-y-8 h-screen max-w-10/12 md:max-w-8/12 lg:max-w-xl m-auto">
            <nav> Nav bar</nav>
            <div className="flex-auto">
                {children}
            </div>
            <footer>footer</footer>
        </div>
    )
}