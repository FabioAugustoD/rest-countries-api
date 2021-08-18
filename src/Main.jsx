import React, { useState, useEffect } from 'react';

import Header from './Components/Header'
import Search from './Components/Search';
import ContentData from './Components/ContentData'

require("es6-promise").polyfill()
require("isomorphic-fetch")

const Main = () => { 
  
  const [country , setCountry] = useState([])
  const [search , setFilter] = useState({
    input: "",
    region: ""
  })

  function filterByID(obj) {
    if ("region" in obj === "Asia" ) {
      return true
    } else {      
      return false
    }
  }

  
  useEffect(() => {      
    fetch("https://restcountries.eu/rest/v2/region/europe")
      .then((resp) => resp.json())             
      // .then((resp) => resp.filter(filterByID))             
      .then((json) => setCountry(json))      
  }, [])

  console.log(country)

  // const getValue = (e) => {
  //   setFilter(e)
  // }

  // https://restcountries.eu/rest/v2/name/canada?fields=name;population;region;capital;
  // https://restcountries.eu/rest/v2/region/europe


  // Faz uma varredura no html e substitui os valores dos atributos conforme o tema
  const handleAttributeTheme = (el) => {
    
      let theme = el === "fas fa-moon"  
      const elements = '*'
      for (let i = 0; i < elements.length; i++) {
        let size = document.getElementsByTagName(elements).length

        for (let j = 0; j < size; j++) {          
          try {                    
            document.getElementsByTagName(elements)[j].attributes.attr.nodeValue = theme? 'light' : 'dark'                    
          } catch (error) {
            console.log('Element without attributes!')           
          }              
        }        
      }   
      document.getElementsByClassName(el)[0].className = theme? 'fas fa-sun' : 'fas fa-moon'            
      document.getElementById('mode').innerHTML = theme? 'Light Mode' : 'Dark Mode'    
    }

    // window.onload = function() {      
    //   HandleApiData();       
    // };    
    //

    return (
        <>
        <Header changeTheme={handleAttributeTheme}/>
        <Search/>        
        <ContentData data={country}/>
        </>        
    )
}

export default Main        