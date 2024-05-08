import { Button } from '../../components'
import './style.scss'

interface AboutProps {
  idNav:string
}

export const Contact:React.FC<AboutProps> = ({idNav}) => {
  return (
    <div id={idNav} className='contact'>
      <div className='contact__center'>
        <h3 className='contact__center__pass'>What's Next?</h3>
        <h2>
        Get In Touch
        </h2>
        <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <div>
          <Button url='gmail' text='Saludame!' height={2} width={1}/>
        </div>
      </div>
    </div>
  )
}

