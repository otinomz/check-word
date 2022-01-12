import './App.css';
import axios from 'axios'

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/plane"

function App() {

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        BASE_URL
      )
    } catch (error){
      console.log(error)
    }
  }



  return (
    <div className="App">
      Dictionary App using the dictionary API
    </div>
  );
}

export default App;
