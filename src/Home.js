import React from 'react'

export default function Home({name}) {
    
    if(name === "Sai"){
        throw new Error("Sai eror")
    }
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
