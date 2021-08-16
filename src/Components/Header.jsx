import React from 'react';
import '../Styles/Header.css'

const Header = ({changeTheme}) => {        
    
    return (
       
        <div className="header" attr="dark">
            <div className="header-title">
                <h1>Where in the world ?</h1>
            </div>
            
            <div className="header-theme">
                <i className="fas fa-moon" onClick={e => changeTheme(e.target.className)}></i>                
                <span id="mode">Dark Mode</span>
            </div>
        </div> 
              

    )
}

export default Header