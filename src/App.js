import React, {useState, useEffect} from "react"
import './App.css';
import axios from 'axios'
import { Container } from "@material-ui/core";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/plane"

function App() {
  const [word, setWord] = useState("")
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

  const inlineStyles = {
    height: '100vh',
    backgroundColor: "crimson",
    color: 'white'
  }

  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div className="App" style={inlineStyles}>
      <Container
        maxWidth="md"
        style={flexStyle}
      >
        Dictionary Word game
      </Container>
    </div>
  );
}

export default App;
