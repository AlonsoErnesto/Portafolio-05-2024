import './style.scss'

interface AboutProps {
  idNav:string
}

export const About:React.FC<AboutProps> = ({idNav}) => {
  return (
    <div id={idNav} className='contain'>
      <div className='contain__about'>
        <h3> Acerca de mi</h3>
        <div className='contain__about__description'>
          <div>
          <p>
            Hola! Mi nombre es Ernesto y disfruto creando Software, en donde mi gran interes es el desarrollo WEB, con más de 3 años de experiencia — desarrollo plataformas de gran escala para empresas privadas, como publicas.
          </p>
          <p>
            Avanzado hasta el día de hoy, he tenido el privilegio de trabajar en una empresa que desarrolla plataformas WEB a gran escala, <a href='https://www.gob.pe/senasa'> en este caso al gobierno Peruano SENASA </a>  y una <a>plataforma privada en Arequipa EXPONENTIA.</a>
          </p>
          <p>
            También recientemente <a>lancé un curso</a> que cubre todo lo necesario para crear una aplicación web empresarial usando NestJS, React, Angular y Kafka con microserivicios y microFrontend, contr una introduccion de DevOps CI/CD.
          </p>
          <p>
          Aquí hay las tecnologías con las que he estado trabajando:
          </p>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>Javascript (ES6+)</li>
              <li>Typescript </li>
              <li>Java </li>
              <li>C# </li>
            </ul>
          </div>
          <div className='contain__photo'>
            <img src='assets/images/avatar.jpg' alt='photo'/>
          </div>
        </div>
      </div>
    </div>
  )
}
