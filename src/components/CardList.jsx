import React from "react";
import NotesCard from './NotesCard'


//should accept props
export default function CardList(){
    return(
    <div className="flex flex-col w-full max-w-xl gap-y-4 ">
        <h2 className="font-bold capitalize">
            #Mechanics of materials
        </h2>
        {
            //subcontainer  for cards to be displayed
        }
        <div className="flex flex-col gap-y-4">
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
        </div>
    </div>
    )
}