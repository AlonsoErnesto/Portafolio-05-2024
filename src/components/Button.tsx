import './index.scss'
interface ButtonProps {
   text: string;
   url: string;
   height: number;
   width: number;
 }
 export const Button: React.FC<ButtonProps> = ({ text, url, width, height }) => {
  return (
    <>
      <a className='btn-primary' style={{ padding: `${width}rem ${height}rem` }} href={url}  target="_blank" rel="noopener noreferrer">
        {text}
      </a>
      {
        url == '/resume.pdf' &&
        <embed src="/assets/pdf/CV-Ernesto_Mamani.pdf" width="100%" height="500px" type="application/pdf" />
      }
    </>
    
  );
};
