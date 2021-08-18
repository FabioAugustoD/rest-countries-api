import React from 'react';


const ContentData = ({data}) => {     

    return (
       
        <div className="card-container">       
           {
                data.map((el, idx) => (                   
                    <div>
                        <div className="img-container">
                            <img src={el.flag} alt=""  />     
                        </div>    
                                                                    
                        <div className="info-container" attr="dark">
                            <ul>                            
                                <li><h2>{el.name}</h2></li>
                                <li>Population: {el.population} </li>
                                <li>Region: {el.region} </li>
                                <li>Capital: {el.capital} </li>
                            </ul>
                        </div>
                    </div>                    
                ))
            }
        </div>         
        
    )
}

export default ContentData
