import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([])


    fetch(url)
        .then(response => response.json())
        .then(tours => console.log(tours))
        .catch(error => console.log(error))
        
    if(loading) {
        return (
            <main>
                <Loading/>
            </main>
        )
    }

    return (
        <>
            <h1>Tours Project Setup</h1>
        </>)
}

export default App
