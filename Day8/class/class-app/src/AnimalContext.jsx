import React, { createContext, useContext, useState } from 'react'

const AnimalContext = createContext(); // Create a context

//----------------------------------------------------------------------------

//Create a component that will provide the context
function AnimalProvider({children}) {
    const [book, setBookName] = useState('HarryPorter');
    const [count, setCount] = useState(0);

    return (
        <AnimalContext.Provider value={{book, setBookName, count, setCount}}>
            {children}
        </AnimalContext.Provider>
    );
}

//Export the context and provider
export { AnimalContext, AnimalProvider }