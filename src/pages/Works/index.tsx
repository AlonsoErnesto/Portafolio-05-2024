import { useState } from 'react'
import './style.scss'


interface WorksProps {
  idNav:string
}

export const Works:React.FC<WorksProps>= ({idNav}) => {
  const [worksList, setWorksList] = useState(1);

  return (
    <div id={idNav} className='content'>
      <div  className='content__wrap'>
        <div className='content__wrap__title'>
        <h2>Donde he trabajado</h2>
        </div>
        <div className='content__wrap__contain'>
        <div className='content__wrap__contain__navigate'>
            <button onClick={() => setWorksList(1)} className={`content__wrap__contain__navigate__btn ${worksList === 1 ? 'active' : ''}`}>
              <span>Investac</span>
            </button>
            <button onClick={() => setWorksList(2)}  className={`content__wrap__contain__navigate__btn ${worksList === 2 ? 'active' : ''}`}>
              <span>Exponentia</span>
            </button>
            <button onClick={() => setWorksList(3)}  className={`content__wrap__contain__navigate__btn ${worksList === 3 ? 'active' : ''}`}>
              <span>Freelance</span>
            </button>
            <button onClick={() => setWorksList(4)}  className={`content__wrap__contain__navigate__btn ${worksList === 4 ? 'active' : ''}`}>
              <span>Prac. TECSUP</span>
            </button>
            <button onClick={() => setWorksList(5)} className={`content__wrap__contain__navigate__btn ${worksList === 5 ? 'active' : ''}`}>
              <span>Prac. UNITEK</span>
            </button>
        </div>
        {/*  */}
        {
          worksList === 1 &&
          <div className='content__wrap__contain__desc'>
            <h3>Desarrollador Backend <span>@Node.js - @Oracle</span></h3>
            <p>Noviembre 2022 - Enero 2024 </p>
            <div>
              <ul>
                  <li>
                  Empresa de desarrollo de software, con más de 5 años ofreciendo servicios en el mercado. Ubicado en Lima.
                  </li>
                  <li>
                    Proyecto encargado por el cliente de SENASA, Servicio Nacional de Sanidad Agraria del Perú, que opto por nuestro servicio de desarrollar una plataforma WEB para la interaccion con agricultores y empresarios agronomos.
                  </li>
                  <li>
                  Desarrollo de servicios web en el lado del servidor con GraphQL y RESTful, incluyendo testing con Jest para garantizar la calidad de los servicios.
                  </li>
                  <li>
                  Diseño, creación y mantenimiento de la arquitectura de la base de datos en Oracle, incluyendo pruebas en el entorno de desarrollo del servidor.
                  </li>
              </ul>
            </div>
          </div>
        }
        {
          worksList === 2 &&
          <div className='content__wrap__contain__desc'>
            <h3>Desarrollador WEB Full Stack <span>@React - @Nodejs</span></h3>
            <p>Diciembre 2021 - Octubre 2022</p>
            <div>
              <ul>
                  <li>
                  Empresa con más de tres años de experiencia especializada en el desarrollo de una plataforma que permite a empresas con una amplia base de clientes analizar comentarios
                  </li>
                  <li>
                  Encargado en desarrollar las tarea que asigne el CTO, via Jira y Slack para la comunicacion acertiva.
                  </li>
                  <li>
                  Tareas como el desarrollo de nuevos servicios RESTful API, diseño e implementacion con Figma y React respectivamente.
                  </li>
              </ul>
            </div>
          </div>
        }
        {
          worksList === 3 &&
          <div className='content__wrap__contain__desc'>
            <h3>Desarrollador Front-End. <span>@React - @SCSS</span></h3>
            <p>Abril 2020 - Setiembre 2021</p>
            <div>
              <ul>
                  <li>
                  Desarrollador Freelance de modalidad remota, me contactaron para ser parte de un equipo de desarrolladores por un periodo determinado.
                  </li>
                  <li>
                  Encargado del desarrollo y diseño de interfaces (UI/UX) con Figma y React, frameworks de Bootstrap y TailwindCSS y preprocesador como SASS.
                  </li>
              </ul>
            </div>
          </div>
        }
        {
          worksList === 4 &&
          <div className='content__wrap__contain__desc'>
            <h3>Desarrollador WEB Jr. <span>@Angular - @NodeJS</span></h3>
            <p>Diciembre 2019 - Febrero 2020</p>
            <div>
              <ul>
                  <li>
                  Formé parte de un equipo de desarrolladores en Lima, donde me uní como Desarrollador Web Full Stack Jr. Me encargaba de diseñar, integrar y desarrollar servicios, controladores e interacciones entre el usuario y la interfaz.
                  </li>
                  <li>
                  Realize varias practicas con diferentes empresas de tecnología con el objectivo mejorar en el desarrollo WEB y Mobile.
                  </li>
                  <li>
                  En donde me considero que aporte más a tecnologias como Angular y NodeJS en esta sección, como Full Stack Jr.
                  </li>
                  <li>
                  Entre otros proyectos desarrollados, fui parte en proyectos WEB escalares con tecnologinas como NestJS Y NextJS entre otros.
                  </li>
              </ul>
            </div>
          </div>
        }
        {
          worksList === 5 &&
          <div className='content__wrap__contain__desc'>
            <h3>Desarrollador de aplicaciones <span> @Typescript - @C# - @Java</span></h3>
            <p>Mayo 2019 - Diciembre 2020</p>
            <div>
              <ul>
                <li>
                    Desarrollo de aplicaciones SPA - MVC - Blog's entre otros, mejorando mi desempeño en interfas de usuario y experiencia de usuario (UI/UX).
                  </li>
                  <li>
                    Desarrollo de aplicaciones de escritorio para Windows con la finalidad de administrar y suministrar a empresas MYPES.
                  </li>
                  <li>
                  Mantenimiento y ensamblaje de Hardware de sistemas informáticos que requieren alto rendimiento como medio.
                  </li>
              </ul>
            </div>
          </div>
        }
        {/*  */}
        </div>
      </div>
    </div>
  )
}
