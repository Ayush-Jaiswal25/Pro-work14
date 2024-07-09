import React, { useContext } from 'react'
import axios from 'axios';
import {useSearchParams} from 'react-router-dom'
import { MyContext } from '../../ContextAPI.jsx';

function Success() {

  const {
    // setCookie, removeCookie,
    signupUser, setsignupUser, removesignupUser,
    // signupUserNum, setsignupUserNum, removesignupUserNum,
    // Name, setName,
    // Email, setEmail,
    // houseNo, sethouseNo,
    // streetaddre, setstreetaddre,
    // pinCode, setpinCode,
  } = useContext(MyContext);

  const [query] = useSearchParams();
  console.log(query.get("payment_id"))

  window.onload = function(){
    console.log("Successs page has laded")
    console.log(signupUser.signupusernum)
    const paymentData = signupUser.signupusernum
    axios.post('http://localhost:3000/prowork/Founder', {paymentData})
  }


  return (
    <div>
      <h1>Success</h1>
      <h3>{query && query.get("payment_id")}</h3>
    </div>
  )
}

export default Success