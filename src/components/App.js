// create your App component here
import React, { useState, useEffect } from "react";
// import Dog from "./Dog";

const fetchUrl = "https://dog.ceo/api/breeds/image/random"

function App(){

    const [ dogImage, setDogImage ] = useState('')

    useEffect( fetchDog, [])

    function fetchDog() {
        fetch( fetchUrl )
        .then(resp => resp.json())
        .then( dogData => renderDog(dogData) )    
    }
    
    const renderDog = dog => setDogImage(<img src={ dog.message } alt="A Random Dog" />)
    
    const isLoading = dogImage ? dogImage : "Loading..."
 
    return (
        <div> 
            <p>{ isLoading }</p>
        </div>
    )
}

export default App; 

// <Dog renderDog={ renderDog } />