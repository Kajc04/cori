import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { Details } from './search-details';

export default function AsideVideoBox() {


  const [data, setData] = useState([]);
  const [dataIsLoaded, SetdataIsLoaded] = useState(false);
  const { search } = useLocation();
// The value of search would be '?term=codecademy'
const queryParams = new URLSearchParams(search);
// queryParams is an object with a .get() method...
const termValue = queryParams.get('q');

useEffect(() => {


    const fetchData = async () => {
		
		var url =  `https://bing-video-search1.p.rapidapi.com/videos/search?q=${termValue}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '0b1b7b3fa8msh7a1e329732f0a1bp1386c7jsnc1fe693f0a52'
            }
        };
	
      const res = await fetch(
		 url
        ,options
      );
      const json = await res.json();
	
	 SetdataIsLoaded(true);
      setData(json.value);
	
    };
	
    fetchData();

  }, [termValue,setData]);
  if(!dataIsLoaded){
    return <div className='state'>
    
      
    </div>
  }

  return (
    <div>
    
      {
            <div className="images">
            <div className="div-image-title">Video about the search</div>
            <div className="image-as">
            <div className='vid-svg-aside'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="svg-vid-as bi bi-collection-play" viewBox="0 0 16 16">
  <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/>
  <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/>
</svg></div>
               <div><img className='vid-img-as' src={data[0].thumbnailUrl}/></div>
               

             
                
            </div>
            <div className="div-image-title">See more video </div>
        </div>
        
        }

        
    </div>
);



    
}