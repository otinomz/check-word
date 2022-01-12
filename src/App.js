import React, {useState, useEffect} from "react"
import './App.css';
import axios from 'axios'
import { Container } from "@material-ui/core";
import Header from "./components/Header"

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/plane"

function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('en')

  // fetching data from google api
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


  // Inline styles section
  const inlineStyles = {
    height: '100vh',
    backgroundColor: "rgb(66, 66, 214)",
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
        <Header category={category} setCategory={setCategory}/>
      </Container>
    </div>
  );
}

export default App;
