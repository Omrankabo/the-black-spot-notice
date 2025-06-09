import React from "react";
import { Link } from "react-router-dom";

// I should accept ..props
export default function NotesCard(){
    return (
        <Link to='note' className="mx-auto flex max-w-sm items-center justify-between gap-x-4 outline outline-black/5">
            {
                //content
            }
            <div className="shrink-0 px-4">
                <h3>Moment of inertia and what is indecate</h3>
            </div>
            {
                //icon
            }
            <div className="size-15 shrink-0 flex items-center justify-center outline outline-black/5 ">
                🧑‍💻
            </div>
        </Link>
    )
}