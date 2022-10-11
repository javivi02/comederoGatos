import React from "react";
import { racionService } from '../services/racionService.js'

const Test = ({ props }) => {

   const handlerTest = () => {

      racionService().then((res) => {
         alert(res)
      })
   }

   return(

      <>
         <div onClick={handlerTest}
              className={`cursor-pointer text-5xl mx-8`}>
            📢
         </div>
      </>

   );
}

export default Test;