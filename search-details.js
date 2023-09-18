import { useLocation } from 'react-router-dom';
export function Details(){
    const { search } = useLocation();
    // The value of search would be '?term=codecademy'
    const queryParams = new URLSearchParams(search);
    // queryParams is an object with a .get() method...
    const termValue = queryParams.get('q');  
    return  <p className="stated"> Powered By Cori search engine : results for " {termValue} "</p> 
}