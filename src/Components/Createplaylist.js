import React from 'react'
import Header from './Header'
function Createplaylist() {
  return (
   <>
    <Header/>
    <div className="min-h-full text-center ">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
             Create playlist
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div>
              <h6>Welcome to PMusic</h6>
            </div>
          </div>
        </main>
      </div>
   </>
  )
}

export default Createplaylist
