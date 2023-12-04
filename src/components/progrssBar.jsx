import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import data from "./data";
import Gallery from "./Gallery";

const ProgrssBar = () => {
  const [value, setValue] = useState(0);
  const [complete,setComplete] = useState(false)
  console.log("hllo")
   
  const intervalRef = useRef(null);

  let content ;

  const startTimer = () => {
    if (value === 0) {
      intervalRef.current = setInterval(() => {
        setValue((prevTime) => prevTime + 10);
        //   console.log(intervalRef.current)
      }, 80);
    }
    if (value >= 100) {
      clearInterval(intervalRef.current);
      setComplete(true)
    }
  };
  
  useEffect(()=>{
    startTimer()
  },[value])



  if(complete){
    const randomIndex = Math.floor(Math.random()* data.length)
    content = data[randomIndex]
  }



  return (
    <>
    <div className="main-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <span style={{width:`${value}%`}}></span>
      <span className={`${value>50 && "spanner"}`}>{((value/100)*100).toFixed(0)}%</span>
    </div>
     <Gallery complete={complete} galleryData={content} />
    </>
  );
};

export default ProgrssBar;


