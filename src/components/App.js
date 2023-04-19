// create your App component here
import React, { useEffect } from "react";
import Dog from "./Dog";

const fetchUrl = "https://dog.ceo/api/breeds/image/random"

function App(){

    useEffect( fetchDog, [])

    function fetchDog() {
        fetch( fetchUrl )
        .then(resp => resp.json())
        .then( dogData => renderDog(dogData) )
    }

    const renderDog = dog => <img src={ dog.message } alt="A Random Dog" />
 
    return (
        <p> 
            { renderDog }
        </p>
    )
}

export default App; 

// renderDog