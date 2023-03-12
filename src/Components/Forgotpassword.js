import React from 'react';
import Navbar from'./Navbar';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import { useState } from 'react';

function Forgotpassword() {
    const navigate = useNavigate();
    const cancel= () => {
      navigate('/login')
    }

    const inputElement = useRef();
    
    const [showModal, setShowModal]=useState(false)
    const [email, setemail]=useState("")
    const[error,seterror]=useState("")
    const Submit = () => {
        const email = inputElement.current.value;
       
        
        const emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(emailpattern.test(email)){
            seterror("")
            setemail(email)
            setShowModal(true)
        }
        else{
            seterror("Please enter a valid email address")
            
        }


    }
  
    
    
  return (
    <>
        <Navbar/>
        <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
        <div className='fhead'>
            <h3 >Find Your Account</h3>
            <h1>Please enter your email address or mobile number to search for your account.</h1>
        </div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
             <div className="w-full max-w-md space-y-8"> 
                <div>
                     <label htmlFor="email-address" className="sr-only">
                         Email address
                     </label>
                     <input
                        ref={inputElement}
                         name="email"
                         type="email"
                         autoComplete="email"
                         required
                         className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                         placeholder="Enter Your Email address"
                    />
                 </div>
                 <div>
                    <h1>{(error)}</h1>
                 </div>
                 
                 <div className="btnc">
                 <button type="submit" onClick={Submit} className="group relative flex w-full justify-center rounded-md border  bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                  Submit  </button>
                  <button type="submit" onClick={cancel} className="group relative flex w-full justify-center rounded-md border  bg-red-400 py-2 px-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                  Cancel  </button>
                 </div>
                 
            </div>
        </div>
        </div>
        </div>
       
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
               
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {(email)}
                  </p>
                </div>
                {/*footer*/}
                <button onClick={()=>setShowModal(false)}> close</button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

   
export default Forgotpassword
