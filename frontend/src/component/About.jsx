import './home.css';
import './global.css';
// import ownerPic from "../assets/Owner_pic.png";
import Footer from './subComponent/footer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageOner from './subComponent/owner_img';
// import {styled} from "styled-components"

// const Contact = styled.div`
//   height:100%;
//   background: var(--color-aqua);
//   border-radius:var(--br-11xl);
//   margin:10px auto 0 auto;
//   padding:20px;
//   box-sizing:border-box;
// `;

// const AboutSection = styled.div`
//     margin:10px auto 0 auto;
//     display: flex;
//     padding-bottom: 0px;
//     flex-direction: column;
//     align-items: center;
//     gap: 14px;
//     flex-shrink: 0;
//     border-radius: var(--br-11xl);
//     background: var(--color-aqua);
//     height:60vh;
// `;

const About = () => {
  const [data,setData] = useState()
  const {users} = useSelector(state=>state.user);

  useEffect(()=>{
    console.log(users[0],data);
    setData(users[0]);
  },[users]);
  return (
    <div>
      <div className="width-g theam contact "  >
          <Footer/>
      </div>
      <div className='width-g theam about-discription-section'>
         {/* <img src={ownerPic} className='about-img' ></img> */}
         <ImageOner/>

         <div className='flex-column flex-center about-des-body' >
            <h2 style={{color:'goldenrod'}} >{data && data.profile_des_head ? data.profile_des_head: "There is one line of code by our company"}</h2>
            <p style={{lineHeight:'2'}} >
               { data && data.profile_des_body?data.profile_des_body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis laboriosam neque itaque minus, necessitatibus, voluptatibus autem porro et eum repellat ullam consectetur accusamus numquam. Deserunt placeat dolor sed eligendi"}
            </p>
         </div>
      </div>
    </div>
  )
}

export default About
