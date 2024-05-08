import './style.scss';
import { GoFileDirectory, GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

interface ProyectProps {
   idNav:string
 }

const Proyect:React.FC<ProyectProps> = ({idNav}) => {
  return (
    <div id={idNav} className='card'>
      <div className='card__wrapper'>
         <h2>
            <span>03.</span> Proyectos destacados
         </h2>
         <p>
            Ver mis archivos
         </p>
         <ul>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de red social Facebook (FullStack) </h2>
                     <p>
                        Desarrollo del clone de la red social Facebook, con la finalidad de poder reforzar mis conocimientos en plataformas de FAANG.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Reactjs</li>
                        <li>Node.js</li>
                        <li>MYSQL</li>
                     </ul>
                  </section>
               </div>
            </li>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de Uber Eats (FullStack) </h2>
                     <p>
                        Desarrollo de clone Uber Eats con el proposito de usar tecnologias de E-commerce, más la seguridad que se requiere de esta.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Next.js</li>
                        <li>NestJS</li>
                        <li>PostgreSQL</li>
                     </ul>
                  </section>
               </div>
            </li>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de Airbnb (FullStack) </h2>
                     <p>
                        Desarrollo de la plataforma de Airbnb, en donde desarrolle desde cero con tecnologias escalables junto a DevOps.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Next.js</li>
                        <li>NestJS</li>
                        <li>Tailwind CSS</li>
                     </ul>
                  </section>
               </div>
            </li>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de Twitter (FullStack) </h2>
                     <p>
                        Desarrollo de la plataforma de Twitter con sockets, en donde uso Pug como Cliente.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Pug</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                     </ul>
                  </section>
               </div>
            </li>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de Uber (FullStack) </h2>
                     <p>
                        Desarrollo de la plataforma de Uber con servicios de Google y DevOps, para la mejora de servicios de nube.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Pug</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                     </ul>
                  </section>
               </div>
            </li>
            <li>
               <div>
                  <header>
                     <section>
                        <GoFileDirectory color='#64FFDA' size={40}/>
                        <span>
                           <FiGithub size={20}/>
                           <GoLinkExternal size={20}/>
                        </span>
                     </section>
                     <h2>Clone de WhatsApp (FullStack) </h2>
                     <p>
                        Desarrollo de la aplicacion de Whatsapp con servicios y arquitectura de datos avanzados.
                        </p>
                     </header>

                  <section>
                     <ul>
                        <li>Pug</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                     </ul>
                  </section>
               </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Proyect
