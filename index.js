import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cori from './Cori-search';
import reportWebVitals from './reportWebVitals';
import CoriImg from './Cori-image';
import CoriVid from './Cori-video';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        
        <Route path='/search' element={<Cori/>}>
           <Route path='/search:query' element={<Cori/>}/>
         </Route> 

         <Route path='/image' element={<CoriImg/>}>
           <Route path='/image/:query' element={<CoriImg/>}/>
         </Route> 

         <Route path='/video' element={<CoriVid/>}>
           <Route path='/video:query' element={<CoriVid/>}/>
         </Route> 


        </Routes>
        
      
    </BrowserRouter>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
