import React from "react";
import CardList from "../components/CardList";
export default function Home(){
    return (
        <div className="flex flex-col gap-16">
            {
                // header
            }
            <header className="flex flex-col items-center gap-y-2">
                <h1 className="font-bold text-4xl text-center">Want to thrive & break free from what they calling limits?</h1>
                <h3 className="text-md text-center">Here you will find How and reach a new stage where nothing could ever stop you.</h3>
                <div className="flex gap-x-2 justify-center">
                    <h5>🏋️‍♂️TRAIN</h5>
                    <h5>🧑‍💻BUILD</h5>
                    <h5>🚀THRIVE</h5>
                </div>
            </header>
            {
                //main content -- cards
            }
            <main className="flex flex-col gap-12 justify-center">
                {
                    //foreach loop to display each card
                }
                <CardList/>
                <CardList/>
                <CardList/>
                <CardList/>
            </main>

        </div>
    )
}

