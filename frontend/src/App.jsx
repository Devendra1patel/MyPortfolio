
import './App.css'
import Navbar from './component/Navbar.jsx'
import Home from './component/home.jsx'
import {  Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import Project from './component/projects/Project.jsx'
import About from './component/About.jsx'
// import store from './redux/store.js'
import {  useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllUsers } from './redux/slice/user.js'
function App() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(fetchAllUsers());
  })

  return (
    <>
     
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' Component={Home} ></Route>
          <Route path='/projects' Component={Project} ></Route>
          <Route path='/about' Component={About} ></Route>
        </Routes>
      </Router>
      
     
    </>
  )
}

export default App
