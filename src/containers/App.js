//jshint esversion:6
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "../components/Header.js";
//import SearchBox from '../components/SearchBox.js';
//import PhotoCard from '../components/PhotoCard.js';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import PhotoCard from '../components/PhotoCard';


function App() {
  
  const [pictures, setPictures] =useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError]=useState("");
  const [inputText, setInputText] = useState("");
  const [wordsToSearch, setWordsToSearch] = useState("apple");


  useEffect(() => {
    fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+process.env.REACT_APP_FLICKR_KEY+"&tags="+wordsToSearch+"&text=yummy&safe_search=1&content_type=1&per_page=25&page=1&format=json&nojsoncallback=1",{method:"GET"})
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
                    <div className="search-bar">
                      <input 
                        onChange={handleChange}
                        type="text" 
                        placeholder="Type here"
                        value={inputText}
                        onKeyDown={handleEnter}
                      >
                      </input>
                      <button 
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

// onKeyUp={() => Delay(function() {
//   useEffect();
// },1000)}

// const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([
//     {
//     setup : "",
//     delivery : "",
//     id: 0
//   }]);
    
//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=twopart")
//       .then(response => response.json())
//       .then((data) => {
//           setIsLoaded(true);
//           setItems(data);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

// if (error) {
//   return (<div>Error: {error.message}</div>);
// } else if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//   <div className="tc">
//     <div className="f2">
//       <Header />
//       <SearchBox />
//       <Scroll>
//         <PhotoCard joke={items.setup} haha={items.delivery} id={items.id="25"}/>
//         <PhotoCard joke={items.setup} haha={items.delivery} id={items.id="15"}/>
//         <PhotoCard joke={items.setup} haha={items.delivery} id={items.id="80"}/>
//       </Scroll>
//       <Footer />
//     </div>
//   </div>
//   );
// }



  // const Delay = (function() {
  //   var timer =0;
  //   return function(callback, ms){
  //     clearTimeout(timer);
  //     timer =setTimeout(callback,ms);
  //   };
  // })()