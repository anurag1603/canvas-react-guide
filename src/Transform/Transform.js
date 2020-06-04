
import React from 'react';

export class Transform extends React.Component {
    render() {
       return (
          <div>
             <h1>Transform...</h1>
             Transform is the style  and in it you can pass various parameters like -:
              translate -  move the element body  
              rotate - rotate the element body,
              skew  -  roatate the body with degree,  thus the body at the end will be rotated the most.


              When creating a cube you should take care of the syntax, 

               1) Firstly we create a scene, in the scene we add the perspective,
               2) then we create the element where the work is to be done, 

               <div className="scene">
                  <div className="cube">
                        <div className="face face--front"></div>
                        
                        <div className="face face--back"></div>
                  </div>
               </div> 


          </div>
       )
    }
  }