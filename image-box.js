import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ImageBox() {
  const [data, setData] = useState([]);
  const [dataIsLoaded, SetdataIsLoaded] = useState(false);
  const { search } = useLocation();
// The value of search would be '?term=codecademy'
const queryParams = new URLSearchParams(search);
// queryParams is an object with a .get() method...
const termValue = queryParams.get('q');


 
  useEffect(() => {


    const fetchData = async () => {
		
		var url =  `https://bing-image-search1.p.rapidapi.com/images/search?q=${termValue}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
                'X-RapidAPI-Key': '6dde589ceemshdb689fb1c9fb0fap1003c6jsnc89817c3723e'
            }
        };
	
      const res = await fetch(
		 url
        ,options
      );
      const json = await res.json();
	
	 ;
      setData(json.value);
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
    <div className='mother-box'>
  {
            data.map((item) => (
                <div className="image-img">
                    <div className="single-image-img"><img className='img'   src={item.thumbnailUrl}/></div>
                  </div> 
            ))
        }

        
    </div>
);
}

export default ImageBox;