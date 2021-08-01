import './App.css';
import React, { useEffect , useState} from "react";
import Header from './MyComponents/Header';
import NameList from "./MyComponents/NameList";



//poster API Request *this is working*
// http://img.omdbapi.com/?apikey=[yourkey]&

// send all data request to
// http://www.omdbapi.com/?apikey=[yourkey]&


const Provided_API = " http://img.omdbapi.com/?apikey=[yourkey]&";

function App() {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(Provided_API)
          .then((res) => res.json())
          .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);
          

  return <div>
    {movies.length > 0 && movies.map((nameList) => 
      <NameList data ={nameList}/>
    )}
    </div>;
}
export default App;
