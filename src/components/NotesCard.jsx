import React from "react";
import { Link } from "react-router-dom";
import { ImFire } from "react-icons/im";

// I should accept ..props
export default function NotesCard(){
    return (
        <Link to='note' className="mx-auto flex max-w-xl w-full items-center justify-between gap-x-2 outline outline-black/5">
            {
                //content
            }
            <div className="shrink-0 pl-4 max-w-4/5">
                <h3 className="truncate ">Constructing a T-shape beam from scratch Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore atque esse ipsum libero. Earum, accusamus ab! Consequatur suscipit qui laudantium quibusdam accusantium minima eos non amet, assumenda minus, dicta animi.</h3>
            </div>
            {
                //icon
            }
            <div className="size-15 shrink-0 flex items-center justify-center bg-black/5">
                <ImFire/>
            </div>
        </Link>
    )
}