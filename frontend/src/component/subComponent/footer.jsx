import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons from Font Awesome
// import './home.css';
// import './global.css';
import '../home.css';
import '../global.css';
import './footer.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {

  const [data,setData] = useState()
  const {users} = useSelector(state=>state.user);

  useEffect(()=>{
    console.log(users[0],data);
    setData(users[0]);
  },[users]);

  return (
    <div className="flex-row social-media-link" >
            <a href={ data &&  data.social_link.github? data.social_link.github: 'https://github.com/Devendra1patel'} target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
            <a href={ data && data.social_link.facebook ? data.social_link.facebook: 'https://github.com/Devendra1patel'} target='_blank' rel="noopener noreferrer"><FaFacebook/>  </a>
            <a href={ data && data.social_link.instagram ? data.social_link.instagram: 'https://github.com/Devendra1patel'} target='_blank' rel="noopener noreferrer"><FaInstagram/>  </a>
            <a href={ data && data.social_link.linkedin? data.social_link.linkedin: 'https://github.com/Devendra1patel'} target='_blank' rel="noopener noreferrer"><FaLinkedin/>  </a>
            {/* <a src='' target='_blank'><FaFiver/>  </a> */}
          </div>
  )
}

export default Footer
