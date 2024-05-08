import { GoRepoForked } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";
import './style.scss'

interface FooterProps {
    repo: number;
    repoPriv: number;
}

export const Footer:React.FC<FooterProps> = ({repo,repoPriv}) => {
    return (
        <div className="footer">
            <div className="footer__center">
                <p>Desarrollado por Ernesto Alonso</p>
                <div className="footer__center__icons">
                    <div>
                        <MdOutlinePrivacyTip size={16}/> <span>{repoPriv}</span>
                    </div>
                    <div>
                        <GoRepoForked size={16}/> <span>{repo}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}