import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setData(response.data); 
      } catch (err) {
        setError(err.message);  
        console.error("API Fetch Error:", err);  
      }
    };

    
   

  return (
    <Context.Provider value={{ data, setData, error,fetchData }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };


