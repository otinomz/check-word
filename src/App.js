import React, {useState, useEffect} from "react"
import './App.css';
import axios from 'axios'

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/plane"

function App() {

  const [meanings, setMeanings] = useState([])

  
  const dictionaryAPI = async () => {
    try {
      const dictionary_data = await axios.get(
        BASE_URL
      )
      setMeanings(dictionary_data.data)
      // console.log(dictionary_data.data)
    } catch (error){
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryAPI()
  },[])

  return (
    <div className="App">
      Dictionary App using the dictionary API
    </div>
  );
}

export default App;
