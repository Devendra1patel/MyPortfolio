import './home.css';
import './global.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchFindProject } from '../redux/slice/project';
// import styled from 'styled-components'

// const NavUl = styled.ul`
//     justify-content: space-between ;
//     width:40%;
//     font-family:var( --font-inder);
//     font-weight:700;
//     font-size:18px;
//     color:'var(--color-font)';
// `;

const Navbar = () => {
   const dispatch = useDispatch();
   const data = {
    "_id":"6557582a87d5acf073692da5"
   }
  function handledispatch()
  {
    dispatch(fetchFindProject(data))
    
  }

  return (
    <div className="home-nav width-g ul flex-row flex-center block-center " >
         <div className='flex-row navbar'>
            <Link className='text-decoration-none nav-btn' to='/'><li className='theam'>Home</li> </Link>
            <Link className='text-decoration-none nav-btn' to='/projects' onClick={()=>handledispatch()}><li className='theam'>Project</li> </Link>
            <Link className='text-decoration-none nav-btn' to=''><li className='theam'>Template</li> </Link>
            <Link className='text-decoration-none nav-btn' to='/about' ><li className='theam'>About</li> </Link>
        </div>
    </div>
  )
}

export default Navbar
