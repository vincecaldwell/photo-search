//jshint esversion:6
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "../components/Header.js";
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import PhotoCard from '../components/PhotoCard';


function App() {
  
  const [pictures, setPictures] =useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError]=useState("");
  const [inputText, setInputText] = useState("");
  const [wordsToSearch, setWordsToSearch] = useState("apples");

  useEffect(() => {
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+process.env.REACT_APP_FLICKR_KEY+"&tags="+wordsToSearch+"&safe_search=1&content_type=1&per_page=25&page=1&format=json&nojsoncallback=1",{method:"GET"})
    .then(response => response.json())
    .then((data) => {
        setIsLoaded(true);
        setPictures(data.photos.photo);
      }, (error) => {
            setIsLoaded(true);
            setError(error);
        }
      );
    }, [wordsToSearch]);


  function handleChange(event){
    const text= event.target.value;
    setInputText(text);
  }

  function submitSearch () {
    setWordsToSearch(inputText);
  }

  function handleEnter(event) {
      if(event.keyCode===13){
        setWordsToSearch(inputText);
      }
  }

  
  if (error) {
      return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
            <div className="tc">
              <div className="f2">
                    <Header />
                    <div className="search-container">
                      <input
                        className="input-reset ba b--black-20 pa3 mb2 db w-100 search-bar tc" 
                        onChange={handleChange}
                        type="text" 
                        placeholder="Type here"
                        value={inputText}
                        onKeyDown={handleEnter}
                      >
                      </input>
                      <button
                        className="f4 link dim br-pill ph3 pv2 mb2 dib white bg-near-black grab" 
                        onClick={submitSearch}>Search
                      </button>
                    </div>
                    <Scroll>
                    {pictures.map((pic, index) => {
                        return(
                          <PhotoCard 
                            key={index}
                            number={index}
                            id={pic.id}
                            farm={pic.farm}
                            server={pic.server}
                            secret={pic.secret}
                          />
                        )})}
                    </Scroll>
                    <Footer />
              </div>
            </div>
          );
      }
}


export default App;
