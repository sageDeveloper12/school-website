import './subheader.css';
import { Link } from 'react-router-dom';

const Subheader = ({name, image}) => {
  return (
    <section className="subheader section">
         <div className='subheader__container container' style={{backgroundImage : `url(${image})`}}>
        <h2><Link to ="/">HOME</Link>/{name}</h2>
    </div>
    </section>
   
  )
}

export default Subheader