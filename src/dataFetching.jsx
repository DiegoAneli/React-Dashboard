import { useState,useEffect } from "react";

function dataFetch() {
    const [links, setLinks] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/links')
        .then(response => response.json())
        .then(res => console.log(res))

    },[])
}
export default dataFetch;

//IN QUESTO PROGETTO RISIEDE JSON SERVER, 
//APRENDO UN ALTRO TERMINALE SI MANDA IN RUN UN JSON SUL LINK SOPRA