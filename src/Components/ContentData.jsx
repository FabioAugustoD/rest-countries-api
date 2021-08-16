import React, {Fragment} from 'react';
import { stockData } from '../data';

const ContentData = () => {    

    return (
        <div className="card-container">       
           {stockData.map((el, idx) => (                   
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
                ))}
        </div>         
        
    )
}

export default ContentData

{/* <img src="https://restcountries.eu/data/afg.svg" alt="" />
<h2>{}</h2>
<ul>
    <li>Population: </li>
    <li>Region: </li>
    <li>Capital: </li>
</ul> */}