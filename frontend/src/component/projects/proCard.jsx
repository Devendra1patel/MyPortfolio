
// import { styled } from "styled-components";
import './ProCard.css'; 


// const Container = styled.div`
//    width:100%;
//    height:100%;
//   //  background-color:gray;
//    display:flex;
//    flex-direction:row;
// //    justify-content:center;
//    // align-items:center;
//    margin: 10px auto 0 auto;

// `;

// const CardBanner = styled.div`
//    width:40%;
//    height:100%;
//    background: rgba(0, 0, 100, 0.3);
   
// `;

export default function ProjectCard() {

  return (
   <>
    <div className="container" >
        {/* <div  > */}
           <div className="project-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSlKkoF_jtVQXmMSfhIYp3MaiYyg76Tq9AYnYtQNkLxfGqNA00aw0DOhhGiBScNWErXY&usqp=CAU"  ></img>
           </div>
           
            <div className='project-content-perent'  >
                <table>
                  <thead >
                     <tr >
                     <h2 style={{margin:'0',marginBottom:'20px',color:'var(--color-gold)'}} >Project Title</h2>
                     </tr>
                  </thead>

                  <tbody>
                     <tr>
                        <td><p>Tech :</p></td>
                        <td><p>CSS, Javascript, Reactjs,Express</p></td>
                     </tr>
                     <tr>
                        <td><p>Description :</p></td>
                        <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sint!</p></td>
                     </tr>
                     <tr className='card-link' >
                        <td><button> <a src="https://www.instagram.com/l_._devendra_._l/" target="_blank" >Explore live...</a> </button></td>
                     
                        <td><button> <a src="https://www.instagram.com/l_._devendra_._l/">Github Repo...</a> </button></td>
                     </tr>

                  </tbody>

                </table>
            </div>
        {/* </div> */}
    </div>
    
   </>

    
  );
}
