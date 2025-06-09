import React from "react";

export default function Layout({children}){

    return (
        <div>
            <nav> Nav bar</nav>
            <div>
                {children}
            </div>
            <footer>footer</footer>
        </div>
    )
}