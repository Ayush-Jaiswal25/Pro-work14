import React, { useContext, useState } from 'react'
import './Profile.css'
import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form"
import { MyContext } from '../../ContextAPI.jsx';
import axios from 'axios'

import greenwave from '../../assets/green wave.jpg'

export function editDDetails(){
  seteditDetails(true)
}

function Profile() {

  

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

  const onSubmit = (data) =>{ 
    axios.post('http://localhost:3000/prowork/userdetails', {data})
    .then(function (response){
      console.log(response)

      axios.get('http://localhost:3000/prowork/userdetails',)
      .then(function (response){
        console.log(response.data)
        setName(response.data[0].Name);
        setEmail(response.data[0].Email);
        sethouseNo(response.data[0].houseNo);
        setstreetaddre(response.data[0].streetaddre);
        setpinCode(response.data[0].pinCode);
        // window.location.reload(false);
      })
    })
  }
  axios.get('http://localhost:3000/prowork/userdetails',)
  .then(function (response){
    console.log(response.data)
    setName(response.data[0].Name);
    setEmail(response.data[0].Email);
    sethouseNo(response.data[0].houseNo);
    setstreetaddre(response.data[0].streetaddre);
    setpinCode(response.data[0].pinCode);
    // window.location.reload(false);
  })

  
  
  return (
    <div id="Profile">
      <Helmet><title>Pro Work - Profile</title></Helmet>
      <div className="profile-content">
        <h1 className='profile-mainTitle'>Users Profile</h1>

        <form className='profile-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="personalInfo">
            <h1 className='profile-h1'>Personal Info</h1>
            <div className='profile-lainput'>
              <label className='profile-label' htmlFor="">Name</label>    
              {editDetails?
              (<div>
                {Name?(
                  <div>
                    <input value={Name} onChange={setName} className='profile-input' {...register("Name", {required: true, minLength: {value:3, message: "Name must be greater than 3 character"}, maxLength: 15})} type="text" />
                    {errors.name && <div className='red'> errors.name.message</div>}
                  </div>
                
                ):("")}
              </div>)
              :(
              <div>
                {Name?(""):( <div>

                  <input placeholder='Enter your name' className='profile-input' {...register("Name", {required: true, minLength: {value:3, message: "Name must be greater than 3 character"}, maxLength: 15})} type="text" />
                  {errors.Name && <div className='red'> {errors.Name.message}</div>}
                </div>
                  )}
                {Name && (<p className="profile-input">{Name}</p>)}
              </div>)}
            </div>

            <div className='profile-lainput'>
              <label className='profile-label email' htmlFor="">Email</label>
              {editDetails?(<div>
                {Email?(<input value={Email} onChange={setEmail} className='profile-input' {...register("Email")} type="text" />):("")}</div>
            ):(
            <div>
              {Email?(""):(<input placeholder='Enter your Email' className='profile-input' {...register("Email")} type="text" />)}
              {Email && (<p className="profile-input">{Email}</p>)}
            </div>
            )}
              
            </div>

            <div className='profile-lainput'>
              <label className='profile-label' htmlFor="">Phone no.</label>
              <label className='profile-input phnum' htmlFor="">+{signupUserNum.signupusernum}</label>
            </div>
          </div>

          <div className="homeaddress">
            <h1 className='profile-h1'>Home Address</h1>

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

          <div className="saveDetailDiv">
          {Name?
          (
          <div className="edit_delete">
            <button onClick={editDDetails} className="userAccountEdit">Edit Details</button>
            {/* <button className="userAccountDelete">Delete Account</button> */}
          </div>
          ):(
          <div className="saveee">
            <button disabled={isSubmitting} className='saveDetails'>Save</button>
            {isSubmitting && <div>Loding----</div>}
          </div>
          )}

          </div> 

        </form>
      </div>

      <img className='profile-greenwave' src={greenwave} alt="" />
    </div>
  )
}

export default Profile