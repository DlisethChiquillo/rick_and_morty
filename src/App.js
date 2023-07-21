import "./App.css";
import Cards from './components/Cards.jsx';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom" 
import About from "./views/about";
import Detail from "./views/detail"
import { useState, useEffect } from 'react';
import axios from "axios";
import Nav from './components/Nav.jsx'
import ErrorPage from "./views/errorPage";
import LandingPage from "./views/landingPage";
import Favorites from "./components/favorites";
import logoR from "./assets/image-removebg-preview.png"

function App() {
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false);

const username = 'lalalita@gmail.com'
  const password = '1234lalita'

const location = useLocation()
const navigate = useNavigate();


function login(userData) {
   if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(()=> {
   !access && navigate('/')
 }, [access, navigate])


function searchHandler (id){
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
   
   function closeHandler(id){
   let deleted = characters.filter((character)=> character.id !== Number(id) )

   setCharacters(deleted);
   }

   function randomHandler(){
      let haveIt = [];
      //generar numero aleatorio
      let random = (Math.random() * 826).toFixed();
      random = Number(random);

      if(!haveIt.includes(random)){
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response)=> response.json())
         .then((data)=> {
            if(data.name){
               setCharacters((oldChars)=>[...oldChars, data]);
            } else{
               window.alert("No hay personajes con ese ID");
            }
         });
      } else{
         console.log("Ya agregaste todos los personajes");
         return false;
      }
   }

  

   return (
      <div className='App'>
       <img className="title" src={logoR} alt="logo" /> 
       
    {location.pathname !== "/" && ( <Nav onSearch={ searchHandler} random={randomHandler} /> )}   
      

   <Routes >
<Route path="/favorites" element={<Favorites/>}/>
<Route path="/" element={<LandingPage login={login}/>} />

   <Route path="/home" 
          element={ <Cards characters={characters} onClose={closeHandler} /> }/>
   <Route path="/about" element={<About/>}/>
   <Route path="/detail/:id" element={<Detail/>}/>    
   <Route path="*" element={<ErrorPage/>} />
       
   </Routes>     
        
      </div>
   );
   }

export default App;
