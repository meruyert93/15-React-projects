import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
    const[people, setPeople] = useState(data);
    const removeItem = (id) => {
        const remainPeople = people.filter((person) => person.id !== id);
        setPeople(remainPeople);
    }

    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays Today</h3>
                <List people={people} removeItem={(id) => removeItem(id)}>
                </List>
                <button onClick={() => setPeople([])}>
                    clear all
                </button>
                <button onClick={() => setPeople(data)}>
                    return List
                </button>
            </section>
        </main>
     )
}

export default App;
