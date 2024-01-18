import './home.css';
import './global.css';
import workFlow from "../assets/workflow2.png";

// coursel import-------
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Footer from './subComponent/footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ImageOner from './subComponent/owner_img';


const Home = () => {

  const [data,setData] = useState()
  const {users} = useSelector(state=>state.user);

  useEffect(()=>{
    console.log(users[0],data);
    setData(users[0]);
  },[users]);
  
 
  return (
    <div className='flex-column' style={{ }}>
        {/* -----------------nav-------------- */}
      {/* <div className="home-nav width-g ul flex-row flex-center block-center " style={{backgroundColor:'var(--color-aqua)',  borderRadius: '0 0 var(--br-11xl) var(--br-11xl)'}}>
        <NavUl className='flex-row '>
            <li  >Home</li>
            <li>Project</li>
            <li>Template</li>
            <li>About</li>
        </NavUl>
      </div> */}

      {/* ---------------bannerslides--------- */}
      <div className=' width-g home-banner-section elevation-border' >
        <div className='crousel-content'>
            <h2>Project Title</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi!
            </h4>
        </div >

      <div className='flex-row home-crousel-outer-2'  >
        <div className='home-outer-1'>

            <Carousel className='control-arrow.control-prev crousel-home flex-row'
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            transitionTime={500}
            emulateTouch={true}
            style={{backgroundColor:'black' }}
            >
                <div>
                    <img className='home-crousel-img' src="https://i.pinimg.com/736x/15/ed/bb/15edbb5e4d34a7fd0399ae686dc451aa.jpg" width={400}  alt="Slide 1" />
                    {/* <p className="legend">Slide 1</p> */}
                </div>
                <div>
                    <img className='home-crousel-img' src="https://i.pinimg.com/736x/15/ed/bb/15edbb5e4d34a7fd0399ae686dc451aa.jpg" width={400}   alt="Slide 2" />
                    {/* <p className="legend">Slide 2</p> */}
                </div>
            </Carousel>
        </div>
      </div>
      </div>

      {/* --------owner intro --------------- */}
      <div className='width-g short-about-perent' >
        <div className='short-about-child1-text' >{ data && data.profile_des_head? data.profile_des_head: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem incidunt quidem ipsam. Ipsa, voluptas sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus!"} </div>
        <div className='flex-column flex-center short-about-child2-img'>
            <div className='theam own-name' style={{top:'0'}} >
              {
               data && data.name? data.name : "OWNER NAME"
              } 
            </div>
            <ImageOner/>
            {/* <img src='https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg' style={{width: '',height: '90%'}}></img> */}
        </div>
      </div>
      {/* ---------------Work flow---------- */}
      <div className='width-g theam flow' >
        <div  >
          <img src= {workFlow} style={{width:'100%',height:'100%',borderRadius:'10px'}} ></img>
        </div>
      </div>

      {/* ------------------footter---- */}
      <div className='width-g theam flex-column flex-center footer' >
         <div style={{width:'100%'}}>
          <Footer/>
         </div>
          <table>
                  <tbody>
                     <tr>
                        <td><p>Gmail :</p></td>
                        <td><p>{data && data.contact.email ? data.contact.email: "pateldevendra3131@gmail.com"}</p></td>
                     </tr>
                     <tr>
                        <td><p>Number :</p></td>
                        <td><p>{data && data.contact.number?data.contact.number: "+91-9974165743"}</p></td>
                     </tr>
                  </tbody>
          </table>
      </div>


    </div>
  )
}

export default Home;