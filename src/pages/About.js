import React, { useState } from "react";
import mydata from '../assets/mockData/data.json'
import Heart from '../assets/icons/heart'
const About = () => {
  const aboutData = mydata.aboutUs
  const [email,setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [feedback , setFeedback] = useState('');
  const submit = () => {
    alert('your feedback submitted successfuly!!!');
  }
  return (
    <div className="pt-6 px-10">
    <div className="about-us text-left">
      <h2 className="font-semibold text-xl pb-1.5">About Us</h2>
      <p className="font-normal text-sm">{aboutData.aboutUs}</p>
    </div>
    <div className="donate-to-poke text-left pt-6">
      <h2 className=" flex font-semibold text-xl items-center gap-2 pb-1.5"><Heart />Donate to Poke</h2>
      <div className="flex gap-2"><p className="font-normal text-sm">{aboutData.donatetopoke}</p>
      <div><button className="px-6 bg-lightGreen py-1 rounded-lg text-base font-semibold">Donate</button> </div>
      </div>
      
    </div>
    <div className="reach-out-us pt-6">
      <h2 className="font-semibold text-left text-xl">Reach out to us</h2>
      <div className="pt-4">
        <form onSubmit={e => submit()} className="flex flex-col p-4 bg-whiteGray rounded-2xl gap-4">
          <input className="p-1 rounded-lg" type="email" value={email} placeholder="email" required onChange={(e) => setEmail(e.target.value)}/>
          <input className="p-1 rounded-lg" type="number" value={phoneNumber} placeholder="phone number" required onChange={(e) => setPhoneNumber(e.target.value)}/>
          <input className="p-1 rounded-lg" type="text" value={feedback} placeholder="Feedback/ suggestions" required onChange={(e) => setFeedback(e.target.value)}/>
          <input className="p-1 rounded-lg text-white bg-black" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </div>
  );
};

export default About;
