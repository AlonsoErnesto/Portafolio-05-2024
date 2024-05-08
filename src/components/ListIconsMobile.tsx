import { FaCodepen, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const ListIconsMobile = () => {
    return (
        <div className="list">
            <div className="list__icons">
                <li><FiGithub href="https://github.com/AlonsoErnesto" size={21} color=''/></li>
                <li><FaInstagram size={21} color=''/></li>
                <li><FaWhatsapp size={21} color=''/></li>
                <li><FiLinkedin size={21} color=''/></li>
                <li><FaCodepen size={21} color=''/></li>
            </div>
        </div>
    )
}

export default ListIconsMobile