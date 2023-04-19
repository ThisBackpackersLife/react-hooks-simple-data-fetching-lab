// create your App component here
import React, { useEffect } from "react";

const fetchUrl = "https://dog.ceo/api/breeds/image/random"

function App(){

    useEffect( fetchDog, [])

    function fetchDog() {
        fetch( fetchUrl )
        .then(resp => resp.json())
        .then( dogData => console.log(dogData) )
    }

    // function renderDog(dog) {
    //     return (
            
    //     )
    // }

    return (
        <p>"Loading..."</p>
    )
}

export default App; 