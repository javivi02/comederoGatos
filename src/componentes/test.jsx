import React from 'react'
import { test } from '../services/test.js'

const Test = ({ props }) => {

   const handlerTest = () => {

      test().then((res) => {
         alert(res)
      })
   }

   return (

      <>
         <div onClick={handlerTest}
              className={`cursor-pointer text-5xl mx-6`}>
            📢
         </div>
      </>

   )
}

export default Test