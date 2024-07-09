import React from 'react'
import './MyBookings.css'
import { Helmet } from 'react-helmet'
function MyBookings() {
  return (
    <div id="MyBookings">
      <Helmet><title>Pro Work - My Bookings</title></Helmet>
      <div className="mybookingtitle"><h1>My Bookings</h1></div>

      <div className="mybooking-body">

        <div className='BookNowDiv BookNowNext mybook-body'>
            <div className="includeonly"><h5>Status: Failed/Success</h5></div>
          <div className='allSumary'>
            <div className="wiallsum"><h4>Booking:</h4><h4>Electrician</h4></div>
            <div className="wiallsum"><h4>Date:</h4> <h4>24/10/2024</h4></div>
            <div className="wiallsum"><h4>Time:</h4> <h4>2:00 P.M.</h4></div>
            <div className="wiallsum"><h4>Service Charge:</h4><h4>Rs.250.00</h4></div>
            <div className="wiallsum wiallsumlasts"><h4>Travel Charge:</h4><h4>Rs.25.00</h4></div>
            <div className="wiallsum"><h4>Total Amount:</h4><h4>Rs.275.00</h4></div>
          </div>
        </div>
        <div className='BookNowDiv BookNowNext mybook-body'>
            <div className="includeonly"><h5>Status: Failed/Success</h5></div>
          <div className='allSumary'>
            <div className="wiallsum"><h4>Booking:</h4><h4>Electrician</h4></div>
            <div className="wiallsum"><h4>Date:</h4> <h4>24/10/2024</h4></div>
            <div className="wiallsum"><h4>Time:</h4> <h4>2:00 P.M.</h4></div>
            <div className="wiallsum"><h4>Service Charge:</h4><h4>Rs.250.00</h4></div>
            <div className="wiallsum wiallsumlasts"><h4>Travel Charge:</h4><h4>Rs.25.00</h4></div>
            <div className="wiallsum"><h4>Total Amount:</h4><h4>Rs.275.00</h4></div>
          </div>
        </div>
        <div className='BookNowDiv BookNowNext mybook-body'>
            <div className="includeonly"><h5>Status: Failed/Success</h5></div>
          <div className='allSumary'>
            <div className="wiallsum"><h4>Booking:</h4><h4>Electrician</h4></div>
            <div className="wiallsum"><h4>Date:</h4> <h4>24/10/2024</h4></div>
            <div className="wiallsum"><h4>Time:</h4> <h4>2:00 P.M.</h4></div>
            <div className="wiallsum"><h4>Service Charge:</h4><h4>Rs.250.00</h4></div>
            <div className="wiallsum wiallsumlasts"><h4>Travel Charge:</h4><h4>Rs.25.00</h4></div>
            <div className="wiallsum"><h4>Total Amount:</h4><h4>Rs.275.00</h4></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyBookings