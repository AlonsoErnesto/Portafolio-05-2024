import './index.scss'
interface ButtonProps {
   text: string;
   url: string;
   height: number;
   width: number;
   download?: string | undefined;
  }

 export const Button: React.FC<ButtonProps> = ({ text, url, width, height, download }) => {
  return (
    <>
    { download === 'download' && 
        <a download='CV-ERNESTO.pdf' className='btn-primary' style={{ padding: `${width}rem ${height}rem` }} href={url}  target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    }
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
