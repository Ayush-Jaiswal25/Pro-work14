import React, {useState} from 'react'
import './Registration.css'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import toast, { Toaster } from 'react-hot-toast';

function Registration() {

  const [WhatsAppNumber, setWhatsAppNumber] = useState();

  function onRegister(){
    axios.post('http://localhost:3000/prowork/register', {WhatsAppNumber})
    .then(function (response){
      console.log(response)
      const waiting1 = new Promise(resolve => setTimeout(resolve, 800));
      toast.promise(
        waiting1, { loading: 'Saving...', success: <b className='toaastgreen'>Registration Done</b>, error: <b>Wrong OTP, Please Try again</b> }, {duration: 1000}
      );

      whatsAppjoin()
      function whatsAppjoin(){setTimeout(stopy, 2500)
        function stopy(){const wt = document.querySelector('.wa').click()}}
    })
  }
  return (
    <div id='Registration'>
      <Helmet><title>Pro Work - Registration</title></Helmet>
      <a className='wa' href="https://wa.me/917905099282"><button >Click1</button></a>
      <div className="registrationFrom">

          <div className="registraHead">
          <h2 className='sign-h2 reg-h2'>Share your WhatsApp Number</h2>
          <h2 className='sign-h2 reg-h22'>Our support team will contact you as soon as possible</h2>
          </div>

          <div className='sign-form sign-formx'>
            <div className='signlabelinput'>
              <PhoneInput inputStyle={{color:'green'}} name='numberr' country={'in'} value={WhatsAppNumber} onChange={setWhatsAppNumber} />
            </div>
            <button className='sign-form-button'onClick={onRegister} >Join Us</button>
          </div>

          <div className="regis-tags">
            <div className="gg1">
              <label className='workng-tags g1'>Electrician</label>
              <label className='workng-tags g3'>Cook</label>
            </div>

            <div className="gg3">
              <label className='workng-tags g2'>Labour</label>
              <label className='workng-tags g4'>Priest</label>
            </div>

            <div className="gg2">
              <label className='workng-tags g1'>Tailer</label>
              <label className='workng-tags g3'>Contractor</label>
            </div>

            <div className="gg4">
              <label className='workng-tags g1'>Tutor</label>
              <label className='workng-tags g4'>Plumber</label>
            </div>

            <div className="gg5">
              <label className='workng-tags g2'>Mechanic</label>
              <label className='workng-tags g3'>xyz</label>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Registration