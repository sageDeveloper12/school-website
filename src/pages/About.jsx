
import Subheader from '../components/subheader/Subheader';
import { submenu,aboutImage } from '../data';




const About = () => {
  return (
    <div className="about__section">
      <div className="about__us-container">
        <section className='headings'>
            <Subheader name = {submenu[0].name}  image={submenu[0].image} />
        </section>
        <section className='history_section section'>
           <div className="history__container container">
            <div className="left">
                <h2>History</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[3]} alt="" />
              </div>  
            </div>
          </div>

        </section>
        <section className='mission__section section'>
           <div className="mission__container container reverse">
            <div className="left">
                <h2>Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[1]} alt="" />
              </div>  
            </div>
          </div>

        </section>
        <section className='vision__section section'>
           <div className="vision__container container">
            <div className="left">
                <h2>Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[2]} alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>  
            </div>
          </div>

        </section>
        <section className='values__section section'>
           <div className="values__container container reverse">
            <div className="left">
                <h2>Values</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[2]} alt="" />
              </div>  
            </div>
          </div>

        </section>
      </div>
    </div>

  )
}

export default About