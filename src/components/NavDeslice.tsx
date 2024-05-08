import { Button } from "./Button"


interface NavDesliceProps {
    btnActivate: boolean    
}

const NavDeslice:React.FC<NavDesliceProps> = ({btnActivate}) => {
    
    return (
        <div className={`boxing ${btnActivate && 'block_scroll'}`}>
            <div className="boxing__right">
                <a href='#about'><span>01.</span> About</a>
                <a href='#work'><span>02.</span> Experience</a>
                <a href='#proyect'><span>03.</span> Proyect</a>
                <a href='#contact'><span>04.</span> Contact</a>
                <Button url='./resume.pdf' text='Resume' width={0.75} height={1}/>
            </div>
        </div>
    )
}

export default NavDeslice