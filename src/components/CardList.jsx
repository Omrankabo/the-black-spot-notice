import React from "react";
import NotesCard from './NotesCard'
//fetch data here

//should give props
export default function CardList(){
    return(
    <div className="flex flex-col w-full max-w-md gap-y-4 items-baseline">
        <h2>
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