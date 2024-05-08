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
        <li>
          <a  target="_blank" href='https://github.com/AlonsoErnesto'>
            <FiGithub size={21} color='' />
          </a>
        </li>
        <li>
          <a  target="_blank" href='https://github.com/AlonsoErnesto'>
            <FaInstagram size={21} color='' />
          </a>
        </li>
        <li>
          <a  target="_blank" href='https://github.com/AlonsoErnesto'>
            <FaWhatsapp size={21} color='' />
          </a>
        </li>
        <li>
          <a  target="_blank" href='https://github.com/AlonsoErnesto'>
            <FiLinkedin size={21} color='' />
          </a>
        </li>
        <li>
          <a  target="_blank" href='https://github.com/AlonsoErnesto'>
            <FaCodepen size={21} color='' />
          </a>
        </li>
      </ul>
    </div>
  )
}