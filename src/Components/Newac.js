// import { useNavigate } from 'react-router-dom';

// export default function Newac() {
//   const navigate = useNavigate();
//   const savebtn =()=>{
//     navigate('/');
//   }
//     return (
//       <>
      
  
//         <div className="hidden sm:block" aria-hidden="true">
//           <div className="py-5">
//             <div className="border-t border-gray-200" />
//           </div>
//         </div>
  
//         <div className="mt-10 sm:mt-0">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
               
//               </div>
//             </div>
//             <div className="mt-5 md:col-span-2 md:mt-0">
//               <form action="#" method="POST">
//                 <div className="overflow-hidden shadow sm:rounded-md">
//                   <div className="bg-white px-4 py-5 sm:p-6">
//                     <div className="grid grid-cols-6 gap-6">
//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                           First name
//                         </label>
//                         <input
//                           type="text"
//                           name="first-name"
//                           id="first-name"
//                           autoComplete="given-name"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                           Last name
//                         </label>
//                         <input
//                           type="text"
//                           name="last-name"
//                           id="last-name"
//                           autoComplete="family-name"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-4">
//                         <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
//                           Email address
//                         </label>
//                         <input
//                           type="text"
//                           name="email-address"
//                           id="email-address"
//                           autoComplete="email"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                           Country
//                         </label>
//                         <select
//                           id="country"
//                           name="country"
//                           autoComplete="country-name"
//                           className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         >
//                           <option>Mexico</option>
//                           <option>United States</option>
//                           <option>Canada</option>
//                           <option>India</option>
//                           <option>Paksithan</option>
//                           <option>Bangladesh</option>
//                           <option>Nepal</option>
//                           <option>Bhutan</option>
//                           <option>Dubai</option>
//                           <option>Chaina</option>
//                           <option>Singapore</option>
                          
//                         </select>
//                       </div>
  
//                       <div className="col-span-6">
//                         <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                          Address
//                         </label>
//                         <input
//                           type="text"
//                           name="street-address"
//                           id="street-address"
//                           autoComplete="street-address"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                         <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           id="city"
//                           autoComplete="address-level2"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                         <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                           State / Province
//                         </label>
//                         <input
//                           type="text"
//                           name="region"
//                           id="region"
//                           autoComplete="address-level1"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
  
//                       <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                         <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                           ZIP / Postal code / PIN code
//                         </label>
//                         <input
//                           type="text"
//                           name="postal-code"
//                           id="postal-code"
//                           autoComplete="postal-code"
//                           className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-base font-semibold leading-6 text-gray-900">Profile</h3>
//                 <p className="mt-123 text-sm text-gray-600">
//                   This information will be displayed publicly so be careful what you share.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-5 md:col-span-2 md:mt-0">
//               <form action="#" method="POST">
//                 <div className="shadow sm:overflow-hidden sm:rounded-md">
//                   <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
//                     <div>
//                       <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
//                       <div className="mt-2 flex items-center">
//                         <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
//                           <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                           </svg>
//                         </span>
//                         <button
//                           type="button"
//                           className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
//                         >
//                           Change
//                         </button>
//                       </div>
//                     </div>
  
//                     <div>
//                       <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
//                       <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
//                         <div className="space-y-1 text-center">
//                           <svg
//                             className="mx-auto h-12 w-12 text-gray-400"
//                             stroke="currentColor"
//                             fill="none"
//                             viewBox="0 0 48 48"
//                             aria-hidden="true"
//                           >
//                             <path
//                               d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                               strokeWidth={2}
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                           <div className="flex text-sm text-gray-600">
//                             <label
//                               htmlFor="file-upload"
//                               className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
//                             >
//                               <span>Upload a file</span>
//                               <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                             </label>
//                             <p className="pl-1">or drag and drop</p>
//                           </div>
//                           <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                         About
//                       </label>
//                       <div className="mt-2">
//                         <textarea
//                           id="about"
//                           name="about"
//                           rows={3}
//                           className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
//                           placeholder="  Tell more about your self"
//                           defaultValue={''}
//                         />
//                       </div>
//                     </div>
//                   </div>
                  
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
  
// //         <div className="hidden sm:block" aria-hidden="true">
// //           <div className="py-5">
// //             <div className="border-t border-gray-200" />
// //           </div>
// //         </div>
  
// //         <div className="mt-10 sm:mt-0">
// //           <div className="md:grid md:grid-cols-1 md:gap-1">
// //             <div className="mt-5 md:col-span-2 md:mt-0">
            
// //                <div className="overflow-hidden shadow sm:rounded-md">                  
// //                   <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
// //                     <button>
// //                       type="submit"
// //                       className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={savebtn}>
// //                       Save
// //                     </button>
// //                   </div>
                
// //                 </div>
         
// //             </div>
// //           </div>
// //         </div>
// //       </>
//     )
//   }
  /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Newac() {
  const navigate = useNavigate();
  const savebtn =()=>{
    navigate('/');
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [state ,setState] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <>
    
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Create a new account</h2>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="first-name"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="last-name"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/2 px-5">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block uppercase tracking-wide text-gray-700 text-xxs font-bold mb-10" htmlFor='country'
                >
                  <option>Mexico</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>India</option>
                  <option>Paksithan</option>
                  <option>Bangladesh</option>
                  <option>Nepal</option>
                  <option>Bhutan</option>
                  <option>Dubai</option>
                  <option>Chaina</option>
                  <option>Singapore</option>
                  
                </select>
                </div>
            <div className="w-full md:w-1/2 px-5">
               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                 City
               </label>
                 <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id='city'
                    type='text'
                    placeholder=''
                   value={city}
                   onChange={(e)=> setCity(e.target.value)}
                  />
             </div>
             <div className="w-full md:w-1/2 px-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="area">
                    Area
                </label>
                <input
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 id='area'
                 type='text'
                 placeholder=''
                 value={area}
                 onChange={(e)=> setArea(e.target.value)}
                 />
            </div>
               
            <div className="w-full md:w-1/2 px-5">
                   <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                       State
                      </label>
                     <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id='state'
                          type='text'
                          placeholder=''
                          value={state}
                          onChange={(e)=> setState(e.target.value)}/>
                   </div>
                      
                    </div>
                    <div className="w-full md:w-1/2 px-5">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pincode">
                          Pin Code
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id='pincode'
                          type='text'
                          placeholder=''
                          value={pinCode}
                          onChange={(e)=> setPinCode(e.target.value)}/>
                      </div>
                      <div className="w-full md:w-1/2 px-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="about">
                          About
                        </label>
                        <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id='about'
                          type='text'
                          placeholder=''
                          value={about}
                          onChange={(e)=> setAbout(e.target.value)}/>
                      </div>
                    </div>
       </div>
     
    </form>
    <div className="mt-10 sm:mt-0">
         <div className="md:grid md:grid-cols-1 md:gap-1">
             <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="overflow-hidden shadow sm:rounded-md">                  
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                       <button
                        type="submit"
                       className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={savebtn}>
                       Save
                       </button>
                    </div>
                 </div>
             </div>
          </div>
      </div>
    </>
  );
}



