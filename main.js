import { Router} from "react-router-dom";
import history from "./history";

const Move = (e) => {
   
    if (e.keyCode === 13){
        var query = e.target.value;
        e.preventDefault()
       history.push(`/search/?q=${query}`)
        window.location.reload()
        


     
    
    }
}

function Main(){
    return   <div className="main">
    <div className="logo-motto">
        <div className="logo-center">Cori</div>
        <div className="logo-motto-2">Search engine</div>
    </div>
    <div className="form">
      
        <input type="search" onKeyUp={Move} placeholder="Search, Find & Like more than 1K articles"/>
    </div>
    <div className="motto">
         <span> <b>Feel Free to search Anything,
             Browse the web, enjoy picture and video,
             your privacy is
             our priority   <br/><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg></b>
         </span>
    </div>
</div>
}

export default Main;