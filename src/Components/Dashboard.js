import React from "react";
import Header from "./Header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="min-h-full text-center ">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="grid-container">
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F1.jpg?alt=media&token=8ef1a9ea-7397-45b1-b5e0-2f8d888b81f0" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F2.jpg?alt=media&token=fc83d27e-03f5-4502-9037-ba73c01ff3d9" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F3.jpg?alt=media&token=54b6032a-c8c5-476b-ad76-4bbcac8ada71" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F4.jpg?alt=media&token=a821a35c-b89a-4188-afd7-f77a90059d79" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F5.jpg?alt=media&token=beadaa87-f44c-479c-b8db-6e2e29b4b22a" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F6.jpg?alt=media&token=9bb77b2c-287e-459d-a8ba-f2c7251d3a0d" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F7.jpg?alt=media&token=6340c3d5-56e8-4fcf-874c-d390ba1ed8ad" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F10.jpg?alt=media&token=d05e8e95-77f5-4fe3-bcc0-c233924ab23b" alt="" /></div>
              <div className="grid-item"><img src="https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/images%2F9.jpg?alt=media&token=6a1ee740-2ee1-425f-98cf-65e76398a36c" alt="" /></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
