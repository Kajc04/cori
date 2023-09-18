import Box from "./box";
import Boo from "./Boxhook";

import AsideImageBox from "./aside-image";
import AsideVideoBox from "./aside-video";
import { Details } from "./search-details";

function Maincori(){
   
   
  
    
    return <div className="main-cori">
       <Details/>
        <div className="mother-box">
        
            <div className="wrap">
            <Box/>
            <div className="sub-wrap">
        
            <AsideImageBox/>
            
            <AsideVideoBox/>

            
            </div>
            
          
         
         
        
    
    </div>
  
        
    
    </div>
    <div className="footer-cori">
  <div className="cpy-right-cori">
        <span >Copyright © 2022 Assocau, Inc. with <span style={{color:'red'}}> ♥ </span> in Abidjan</span>
    </div>

  </div>
    </div>
}

export default Maincori;