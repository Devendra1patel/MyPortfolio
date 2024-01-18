import '.././home.css';
import '.././global.css';
import ownerPic from "../../assets/Owner_pic.png";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ImageOner = () => {

  const [data,setData] = useState()
  const {users} = useSelector(state=>state.user);

  useEffect(()=>{
    console.log(users[0].profile_pic,data);
    setData(users[0]);
  },[users]);

  return (
    <>
        <img src={ data && data.profile_pic? data.profile_pic : ownerPic} className='about-img' ></img>
    </>
  )
}

export default ImageOner
