import React from "react";
import CardList from "../components/CardList";
export default function Home(){
    return (
        <div>
            {
                // header
            }
            <header>
                <h1>application header</h1>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div>
                    <div>whatsapp</div>
                    <div>telegram</div>
                    <div>twitter</div>
                </div>
            </header>
            {
                //main content -- cards
            }
            <main>
                {
                    //foreach loop to display each card
                }
                <CardList/>
            </main>

        </div>
    )
}

