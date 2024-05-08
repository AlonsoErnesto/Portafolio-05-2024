import { useState } from "react"
import { Navbar } from "./components"
import {Email, Contacts} from "./components"
import {Home, About, Works, Contact, Footer} from "./pages"
import Proyect from "./pages/Proyect"
import axios from "axios"
import { useMediaQuery } from "react-responsive"
import ListIconsMobile from "./components/ListIconsMobile"

const App = () => {

  const  isDesktopOrMobile = useMediaQuery({
    query: '(max-width: 550px)'
  })
  const [repo, setRepo] = useState(0);
  const [repoPriv, setRepoPriv] = useState(0);

  const ApiRestGithub = async () => {
    const totalRepos = await axios.get('https://api.github.com/users/alonsoernesto', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN_GITHUB}`,
      }
    }); 
    const repost = totalRepos.data.public_repos;
    const repostPrivate = totalRepos.data.total_private_repos;
    setRepo(repost);
    setRepoPriv(repostPrivate);
  }
  ApiRestGithub()

  return (
    <div className='section'>
      <Navbar/>
      {/* Content */}
      <Home/>
      <About idNav='about'/>
      <Works idNav='work'/>
      <Proyect idNav='proyect'/>
      <Contact idNav='contact'/>
      { isDesktopOrMobile &&
        <ListIconsMobile/>
      }
      <Footer repo={repo} repoPriv={repoPriv}/>
      {/* Content */}
      <Contacts classname='ani-down'/>
      <Email/>
    </div>
  )
}

export default App
