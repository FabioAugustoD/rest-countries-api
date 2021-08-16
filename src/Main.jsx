import React, { useState } from 'react';
import Header from './Components/Header'
import Search from './Components/Search';
import ContentData from './Components/ContentData'

const Main = () => { 

  const [country , setCountry] = useState({
    url: "https://restcountries.eu/rest/v2/all",
    name: []
        
  })

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

    window.onload = function() {      
        handleApiData();         
      // console.log(country.countries)
    };
    
    
    const handleApiData = () => {
      let url = country.url
      let name = country.name       
      fetch(url)
        .then(resp => resp.json())             
        .then(resp => name.push(resp))


        .then(setCountry({...country, name}))        
        // .then(resp => console.log(resp))
        // .then(resp => list.push(resp))
    }


    return (
        <>
        <Header changeTheme={handleAttributeTheme}/>
        <Search/>        
        <ContentData data={country.name[0]}/>
        </>        
    )
}

export default Main        