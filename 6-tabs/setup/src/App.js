import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [loading, setLoading] = useState(true);
    const [job, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJob = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(() => {
        fetchJob();
    }, []);

    if(loading) {
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    return (
        <main>
            <section>
                <h2>Jobs</h2>
            </section>
        </main>
    )
}

export default App
