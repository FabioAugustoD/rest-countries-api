import React from 'react';


const ContentData = ({data}) => {   
    
    function formatNumber(value) {
        return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }

    return (       
        <div className="card">
            
            {
                data.map((el, idx) => (                   
                    <div className="card-container" key={idx}>
                        <div className="card-container-img" >
                            <img src={el.flag} alt=""/>    
                        </div>    
                                                                    
                        <div className="card-container-info" attr="dark">
                            <ul>                            
                                <a href="#" attr="dark"><li><h2>{el.name}</h2></li></a>
                                <li><strong>Population:</strong> {formatNumber(el.population)} </li>
                                <li><strong>Region:</strong> {el.region} </li>
                                <li><strong>Capital:</strong> {el.capital} </li>
                            </ul>
                        </div>
                    </div>                    
                ))
            }
            
        </div>          
    )
}

export default ContentData
