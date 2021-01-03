import React from 'react';

const List = ({people, removeItem}) => {
  return (
    <>
        {people.map((person) => {
            const {id, name, age, image} = person;
            return <article  key={id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                    <button onClick={() => removeItem(id)} className="individualBtn">remove</button>
                </div>
            </article>      
        })}
    </>
  );
};

export default List;
