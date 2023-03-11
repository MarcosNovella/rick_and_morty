import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const username = 'marcosnovella99@gmail.com'
  const password = 'hola123'

  const login = (userData) => {
    if(userData.username === username && userData.password === password){ 
    setAccess(true)
    navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const location = useLocation()

  function onSearch(id) {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const API_KEY = '54fb4573231b.6fe494787d50c6e30444'
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) =>{
  setCharacters(characters.filter(character => character.id !== id))
 }
 
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
