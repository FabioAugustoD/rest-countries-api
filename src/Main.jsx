import React from 'react';
import Header from './Components/Header'
import Search from './Components/Search';

const Main = () => { 

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

    return (
        <>
        <Header changeTheme={handleAttributeTheme}/>
        <Search/>
        </>        
    )
}

export default Main        