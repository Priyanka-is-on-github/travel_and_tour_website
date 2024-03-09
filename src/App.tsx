import React, { useEffect } from 'react'
import Layout from "../src/layout/index"; 
import {RouterProvider} from 'react-router-dom'
import './App.css' 
import router from './router'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() { 

  useEffect(() => {
    AOS.init(); // Initialize AOS
    // You can add options here if required 
  }, []);



  return (
      <RouterProvider router={router}/> 
  )
}

export default App