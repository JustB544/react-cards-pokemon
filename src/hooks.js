import React, {useState} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useFlip() {
  // call useState, "reserve piece of state"
  const [flip, setFlip] = useState(true);
  const toggle = () => {
    setFlip(oldValue => !oldValue);
  };
  
  // return piece of state AND a function to toggle it
  return [flip, toggle];
}

function useAxios(baseUrl) {
    // call useState, "reserve piece of state"
    const [data, setData] = useState([]);

    const fetchData = async (urlExtension = "") => {
        try {
            const response = await axios.get(baseUrl + urlExtension);
            setData(d => [...d, {...response.data, id: uuid()}]);
        }
        catch(e){
            console.error(e);
            alert(e.message);
        }
    }
    
    
    // return piece of state AND a function to toggle it
    return [data, fetchData];
  }

export {useFlip, useAxios};