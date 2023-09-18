import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Box() {
  const [data, setData] = useState([]);
  const [dataIsLoaded, SetdataIsLoaded] = useState(false);
  const { search } = useLocation();
// The value of search would be '?term=codecademy'
const queryParams = new URLSearchParams(search);
// queryParams is an object with a .get() method...
const termValue = queryParams.get('q');


 
  useEffect(() => {


    const fetchData = async () => {
		
		var url =  `https://google-search3.p.rapidapi.com/api/v1/search/q=${termValue}`;

        const options = {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '0b1b7b3fa8msh7a1e329732f0a1bp1386c7jsnc1fe693f0a52'
            }
        };
	
      const res = await fetch(
		 url
        ,options
      );
      const json = await res.json();
	
	 ;
      setData(json.results);
      SetdataIsLoaded(true)
    };
	
    fetchData();

  }, [termValue,setData]);
  if(!dataIsLoaded){
    return <div className='state'>
      <div className='stated'>Cori is loading </div>
      <div className='spinner-border'></div>
      
    </div>
  }
  return (
    <div className = "">
 {
            data.map((item) => (
                <div className="box">

                <div className="box-title">
                  <span className="span-title">{item.title}</span> 
            </div>
        
            <div className="box-desc">
                    <span class="span-desc">
                {item.description}
                    </span>
            </div>
        
            <div className="box-link">
            <a href={item.link}><span className="span-link">{item.link}</span></a>
            </div>
       
            
        </div>
            ))
        }

        
    </div>
);
}

export default Box;