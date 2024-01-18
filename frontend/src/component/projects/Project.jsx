import './ProCard.css'
// import styled from "styled-components";
import ProjectCard from "./proCard.jsx"

// const CardDiv = styled.div`
//   height: 100%;
//   flex-shrink: 0;
//   border-radius:var(--br-11xl);
//   margin:10px auto;
//   padding:20px;
//   box-sizing:border-box;
// `;
const Project = () => {
  return (
    <div>
      {/* this is one project */}
      <div className='theam width-g container-grid card' >
        
        <ProjectCard/>
       
      </div>
      {/* ------------- */}
      <div className='theam width-g container-grid card' >
        
        <ProjectCard/>
       
      </div>
      
    </div>
  )
}

export default Project
