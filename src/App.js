import React, {useState, useEffect} from "react"
import './App.css';
import axios from 'axios'
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header"
import Definitions from "./components/Definitions/Definitions";


function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')

  const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`

  // fetching data from google api
  const dictionaryAPI = async () => {
    try {
      const dictionary_data = await axios.get(
        BASE_URL
      )
      setMeanings(dictionary_data.data)
    } catch (error){
      console.log(error)
    }
  }

  // console.log(meanings)

  useEffect(() => {
    dictionaryAPI()

  },[word, category])


  // Inline styles section
  const inlineStyles = {
    height: '100vh',
    backgroundColor: "#3C4043",
    color: 'white'
  }

  const flexStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }

  return (
    <div className="App" style={inlineStyles}>
      <Container
        maxWidth="md"
        style={flexStyle}
      >
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
          />
        )}
        
      </Container>

    </div>
  );
}

export default App;
