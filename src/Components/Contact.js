
import React from 'react'
import Navbar from'./Navbar';

function Contact() {
  return (
  
  <>
    <Navbar/>

    <div className="chead">
      <h3>Free free to contact with us</h3>
    </div>
    <from>
      <div className="cname">
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="email" name="email" id="email" placeholder='Enter your email id' />
        <input type="text" name="number" id="number" placeholder='Enter Your Phone Number' />
      </div>
      <div className="cmsg">
        <label htmlFor="message" className="block ">Message</label>
        <div className="cmsg2">
          <textarea name="message" id="message" rows="4" className="ctexta"></textarea>
        </div>
      </div>
    </from>
    <div className="cpolicy">
      <h1>By clicking the button you agree our terms & conditions</h1>
      <div className="cpolicylink">
        <a href="./policy">Treams and conditions</a>
      </div>
    </div>
   
    <div className="cbtn">
      <button type="submit">Submit</button>
    </div>
    
  </>
  )
}

export default Contact
