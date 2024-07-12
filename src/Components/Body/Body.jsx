import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet';
import './Body.css'
import '../Body/cursor.css'
import '../Body/cursor.js'

import Close from '../../assets/close.png';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer.jsx';
import Home from '../Home/Home'
import Explore from '../Explore/Explore';
import Service from '../Service/Service';
import About from '../About/About';
import Profile from '../Profile/Profile.jsx'
import Registration from '../Registration/Registration.jsx';
import Privacy from '../Privacy/Privacy.jsx';
import Terms from '../Terms/Terms.jsx';

import { MyContext } from '../../ContextAPI.jsx';
import { appwriteSendOTP, appwriteSubmitOTP, appwriteLogOUT, userId, sessionId } from '../../../Appwrite.jsx';

import {Link, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'
import { AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import Category from '../Category/Category.jsx';
import Success from '../Success/Success.jsx';
import Error404 from '../Error404/Error404.jsx';
import MyBookings from '../MyBookings/MyBookings.jsx';

export function closeUserNav(){
  const userNav = document.getElementById('userNav');
  userNav.classList.remove('user-nav-show');
  userNav.classList.add('hide'); 
}

export let newNumber, OTP_Value1 ;
function Body() {

let options = {
  method: 'GET',
  url: 'https://pro-work.onrender.com/tax',
  // headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
 console.log("XXXXXXXXXXX");
  
  const [OTP, setOTP] = useState(true)
  const [OTP_Value, setOTP_Value] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")

  const {
    setCookie, removeCookie,
    signupUser, setsignupUser, removesignupUser,
    signupUserNum, setsignupUserNum, removesignupUserNum,
    Name, setName,
    Email, setEmail,
    houseNo, sethouseNo,
    streetaddre, setstreetaddre,
    pinCode, setpinCode,
  } = useContext(MyContext);

  console.log(signupUser);

  function SignCross(){
    const signINUP = document.getElementById('signINUP');
    const BodyRoutes = document.getElementById('Body-routes');
    signINUP.classList.add('signinup-move-up')
    signINUP.classList.remove('signinup-move-down')
    BodyRoutes.classList.remove('blurr')
    BodyRoutes.classList.add('nonblurr')
  }

  function unBLUR(){
    const BodyRoutes = document.getElementById('Body-routes');
    BodyRoutes.classList.remove('blurr')
    BodyRoutes.classList.add('nonblurr')
  }
  
  
  async function sendOTP(){
    newNumber = "+" + PhoneNumber;
    setOTP(false)
    toast.success('OTP sent Successfully')
    appwriteSendOTP()
  }

  async function resendOTP(){
    appwriteSendOTP()
    toast.success('OTP sent Successfully')
  }

  async function submitOTP(){
    OTP_Value1 = OTP_Value;
    appwriteSubmitOTP()
    toastSubmitOTPx()

    function toastSubmitOTPx(){setTimeout(stopy, 2500)
      function stopy(){
        if(sessionId == undefined){
          toast.error("Wrong OTP, Please Try Again.")
        }else{
          toastSubmitOTP()
        }
      }
    }
    
    function toastSubmitOTP(){setTimeout(stopy, 2200)
      function stopy(){
        // axios.post('https://pro-work.onrender.com/prowork/signup', {PhoneNumber})
        // .then(function (response){
        let options = {
  method: 'POST',
  url: 'https://pro-work.onrender.com/prowork/signup',
  data: { PhoneNumber }
  // headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

          const waiting1 = new Promise(resolve => setTimeout(resolve, 1000));
    toast.promise(
      waiting1, { loading: 'Saving...', success: <b className='toaastgreen'>Verification Successfull</b>, error: <b>Wrong OTP, Please Try again</b> }, {duration: 1500}
    );
    toaast()
    function toaast(){setTimeout(stopy1, 2700)
        function stopy1(){
            toast('Welcome to Pro Work', {
                style: { border: '2px solid rgb(1, 141, 112)', padding: '12px', fontSize: '1.2rem', color: 'rgb(1, 141, 112)', position: "bottom-center"},
            }, {duration: 2000},);
        }
    }

          setCookie('sessionID', sessionId,{maxAge: 3600*24*21})
          setsignupUser('signupuserid', response.data._id,{maxAge: 3600*24*21})
          setsignupUserNum('signupusernum', response.data.PhoneNumber,{maxAge: 3600*24*21})
          setOTP(true)
          unBLUR()
        
          axios.get('https://pro-work.onrender.com/prowork/userdetails',)
          .then(function (response){
            console.log(response.data[0].Name)
            setName(response.data[0].Name);
            setEmail(response.data[0].Email);
            sethouseNo(response.data[0].houseNo);
            setstreetaddre(response.data[0].streetaddre);
            setpinCode(response.data[0].pinCode);
          // })
        })
      }
    }
  }

  async function logOut(){
    appwriteLogOUT()
    toastLogOut()
    function toastLogOut(){setTimeout(stopz, 2500)
      function stopz(){
        setOTP(true)
        removeCookie('sessionID')
        removesignupUser('signupuserid')
        removesignupUserNum('signupusernum')
        setPhoneNumber("91")
        setOTP_Value(null)
      }
    }
  }

  return (
    <CookiesProvider defaultSetOptions={{ path: '/prowork' }}>
      <AnimatePresence>
        <div id="Body">
        <Helmet><title>Pro Work - Home</title></Helmet>
        <Toaster/>

          {OTP?
          (
          <div id='signINUP' className='signIn-signUp'>
            <div id='SignCross' className="sign-cross">
              <img onClick={SignCross} className='sign-close' src={Close} alt="" />
            </div>
            <h2 className='sign-h2'>Sign Up/ Sign In</h2>
            <div className='sign-form'>
              <div className='signlabelinput'>
                <PhoneInput inputStyle={{color:'green'}} country={'in'} value={PhoneNumber} onChange={setPhoneNumber} />
              </div>
              <button className='sign-form-button' onClick={sendOTP} >Send OTP</button>
            </div>
          </div>
          ):
          (
          <div className="otp-main-parent">
            <div className="otpmain">
              <h1>Verify OTP</h1>
              <OtpInput inputStyles={{color:'green',}}  className='otpInput otpInputDesktop' value={OTP_Value} onChange={setOTP_Value} OTPLength='6' otpType='number' disabled={false} autoFocus></OtpInput>
              <OtpInput inputStyles={{color:'green', height:'20%', width:'20%'}}  className='otpInput otpInputPhone' value={OTP_Value} onChange={setOTP_Value} OTPLength='6' otpType='number' disabled={false} autoFocus></OtpInput>
              <button className='sign-form-button otpbutton' onClick={submitOTP}>Submit</button>
              <p className='otpp'>Did not recive?<a className='otppp' onClick={resendOTP} >Resend again</a></p>
            </div>
          </div>
          )}

          {signupUser.signupuserid ? 
          (
          <div id='userNav' className="user-nav">
            <ul className='no-bullets'>
              <img className='closeUserNav' onClick={closeUserNav} src={Close} alt="" />
              <Link to='/prowork/profile'><li onClick={closeUserNav}>Profile</li></Link>
              <Link to='/prowork/mybookings'><li onClick={closeUserNav}>My Bookings</li></Link>
              <Link to='/prowork'><li onClick={logOut}>Log out</li></Link>
            </ul>
          </div> 
          )
          :
          ("")
        }

          <Navbar/>

          <div id='Body-routes' className="body-routes">
            <Routes location={location} key={location.pathname} >
              <Route path='/' element={<Home/>}/>
              <Route path='/prowork/services' element={<Service/>}/>
              <Route path='/prowork/explore' element={<Explore/>}/>
              <Route path='/prowork/about' element={<About/>}/>
              <Route path='/prowork/profile' element={<Profile/>}/>
              <Route path='/prowork/mybookings' element={<MyBookings/>}/>
              <Route path='/prowork/terms' element={<Terms/>}/>
              <Route path='/prowork/privacy-policy' element={<Privacy/>}/>
              <Route path='/prowork/:error404' element={<Error404/>}/>
              <Route path='/prowork/payment_success' element={<Success/>}/>
              <Route path='/prowork/registration' element={<Registration/>}/>


              <Route path='/prowork/services/:category' element={<Category/>}/>
            </Routes>
          </div>

          <Footer/>

        </div>
      </AnimatePresence>
    </CookiesProvider>
    
  )
}

export default Body
