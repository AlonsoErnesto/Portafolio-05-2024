import './style.scss'
import {Button} from '../../components'

export const Home = () => {
  return (
    <div className='container'>
      <div className='container__content'>
        <p>Hola, mi nombre es</p>
        <h2 className='container__content__name'>Ernesto Alonso.</h2>
        <h3>Y desarrollo software.</h3>
        <p className='container__content__description'>
        Soy egresado en Ingeniero de Sistemas, especializado en construccion de software, (ocacionalmente diseño). Actualmente, me enfoco en el Desarrollador WEB Full Stack, con mayor experiencia en el <span>Backend</span>.
        </p>
        <Button url='https://github.com/AlonsoErnesto?tab=repositories' text='Observa mis trabajos!' width={1.25} height={1.75}/>
      </div>
    </div>
  )
}

// export default Home
