import React from 'react'

export default function Home({name}) {
    
    if(name === "Sai"){
        throw new Error("Sai erfjor")
    }
    return (
        <div>
            <h1>Home didjdfj dj</h1>
        </div>
    )
}
