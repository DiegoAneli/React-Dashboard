import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { fetchLinks } from "./linksSlice";

const Links = () => {
    const dispatch = useDispatch();

    useEffect( () => {

       //dispatch(fetchLinks("http://localhost:3000/links"));
        
    },[]);

    return null;
};

export default Links;