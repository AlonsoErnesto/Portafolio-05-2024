import './index.scss';
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";

export const Contacts = () => {
  return (
    <div className='contacts classname'>
      <ul className='contacts__list'>
         <li><FiGithub size={21} color=''/></li>
         <li><FaInstagram size={21} color=''/></li>
         <li><FaWhatsapp size={21} color=''/></li>
         <li><FiLinkedin size={21} color=''/></li>
         <li><FaCodepen size={21} color=''/></li>
      </ul>
    </div>
  )
}