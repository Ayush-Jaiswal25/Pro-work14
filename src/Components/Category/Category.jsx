import React, { useContext, useState } from 'react'
import './Category.css'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { MyContext } from '../../ContextAPI.jsx';
import { categoryList } from '../../assets/CategoryList'
import { service_List } from '../../assets/serviceList'
import { useForm } from "react-hook-form"
import { editDDetails } from '../Profile/Profile.jsx';
import aarrowdown from '../../assets/aarrow-down.gif'

function Category() {

  const {
    signupUserNum,
    Name, setName, 
    Email, setEmail,
    houseNo, sethouseNo,
    streetaddre, setstreetaddre,
    pinCode, setpinCode,
    editDetails, seteditDetails
  } = useContext(MyContext);

  const { register, handleSubmit, watch, formState:{ errors, isSubmitting} } = useForm()
  const [ BookNow, setBookNow] = useState(false);
  const [ BookNowNext, setBookNowNext] = useState(false);

  let CategoryURL = window.location.href;

  let j = '100', k = 'AJ';
  async function checkOut({name, amount}){
    axios.post("http://localhost:3000/payment/checkout", {name, amount})
    .then(function (response){
      console.log(response.data.order)

      let options = {
        "key": "rzp_test_YlsIMKyGXhS3ih",
        "amount": response.data.order.amount,
        "currency": "INR",
        "name": "Pro Work",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": response.data.order.id,
        "callback_url": "http://localhost:3000/payment/payment-verification",
        "prefill": {
          "name": "Ayush Jaiswal",
          "email": "ayush@gmail.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      var rzp1 = new Razorpay(options);
      rzp1.open()
    })
  }

  function ServiceBooking(){
    setBookNow(true)
    const BodyRoutes = document.querySelector('.CategoryBlock');
    const operate = document.querySelector('.operate');
    BodyRoutes.classList.add('blurr')
    operate.classList.add('blurr')
    BodyRoutes.classList.remove('nonblurr')
    operate.classList.remove('nonblurr')
  }
  function ServiceBookingNext(){
    setBookNow(false)
    setBookNowNext(true)
  }
  

  return (
    <div id="Category">
      <Helmet><title>Pro Work - Category</title></Helmet>

      {categoryList.map((item, index) =>{
        if(CategoryURL == item.URL){
          return(
            <div key={index} className="CategoryBlock">
              <h1 className='CategoryBlock-h1'>Book Our Experienced {item.Category}</h1>
              <div className='catcard-div'>
                <button className='bookService' onClick={ServiceBooking}>Book Serivce</button>
                <div className="imgcatcard"><img src={item.image} alt="" className="catcard-img-top" /></div>
              </div>
            </div>          
          )
        }
      })}

      {BookNow?
      (
      <div className='BookNowDiv'>
        <h2>Confirm Your Address</h2>
        <div className="dropdownPlace">
          <label className='profile-label cala' htmlFor="Place">Select Place:</label>
          <select className='profile-input cain' name="place" id="Place">
            <option value="Civil Lines">Civil Lines</option>
            <option value="Jhunsi">Jhunsi</option>
            <option value="Naini">Naini</option>
            <option value="Mama Bhanja">Mama Bhanja</option>
          </select>
        </div>
        
        <div className='confirm-add'>
          <div>

            <div className='profile-lainput'>
              <label className='profile-label' htmlFor="">House no.</label>
              {editDetails?
              (<div>
              {houseNo?(<input value={houseNo} className='profile-input' {...register("houseNo")} type="text" />):("")}
              </div>):(
                <div>
              {houseNo?(""):(<input placeholder=' Enter your House Address' className='profile-input' {...register("houseNo")} type="text" />)}
              {houseNo && (<p className="profile-input">{houseNo}</p>)}
                </div>)}
            </div>

            <div className='profile-lainput'>
              <label className='profile-label' htmlFor="">Street Address</label>
              {editDetails?
              (<div>

              {streetaddre?(<input value={streetaddre} className='profile-input' {...register("streetaddre")}  type="text" />):("")}
              </div>):(
                <div>
              {streetaddre?(""):(<input placeholder='Locality or Landmark' className='profile-input' {...register("streetaddre")}  type="text" />)}
              {streetaddre && (<p className="profile-input">{streetaddre}</p>)}
                </div>)}
            </div>

            <div className='profile-lainput'>
              <label className='profile-label' htmlFor="">Pin code</label>
              {editDetails?(
                <div>
              {pinCode?(<input value={pinCode} className='profile-input' {...register("pinCode")} type="number" />):("")}
                </div>):(
                  <div>
              {pinCode?(""):(<input placeholder='Enter pincode' className='profile-input' {...register("pinCode")} type="number" />)}
              {pinCode && (<p className="profile-input">{pinCode}</p>)}
                  </div>)}
            </div>

          </div>
          <button className='bookService bookService-next' onClick={ServiceBookingNext}>Next &nbsp; <div className='aarrow-doleft'> <img className='aarrow-down' src={aarrowdown} alt="" /></div></button>
        </div>
      </div>
      ):("")}
      {BookNowNext?
      (
      <div className='BookNowDiv BookNowNext'>
        <div className="finalBookHeading"><h2>Summary</h2></div>
        <div className="finalbookdes"><h3>The Service man will reach your home between 2 - 4 hours</h3></div>
          <div className="includeonly"><h5>*Include Service charge only</h5></div>
        <div className='allSumary'>
          <div className="wiallsum"><h4>Booking:</h4><h4>Electrician</h4></div>
          <div className="wiallsum"><h4>Your contact Number:</h4> <h4>+919450066558</h4></div>
          <div className="wiallsum"><h4>Service Charge:</h4><h4>Rs.250.00</h4></div>
          <div className="wiallsum wiallsumlasts"><h4>Travel Charge:</h4><h4>Rs.25.00</h4></div>
          <div className="wiallsum"><h4>Total Amount:</h4><h4>Rs.275.00</h4></div>
          <button className='bookService bookService-next bookService-nextt' onClick={()=>checkOut({name:k, amount:j})}>Book Now</button>
        </div>
      </div>
      ):("")}

      
      <h1 className='operate'>We Operate in Civil Lines, Naini, Jhunsi, Mama Bhanja</h1>
        
    </div>
  )
}

export default Category