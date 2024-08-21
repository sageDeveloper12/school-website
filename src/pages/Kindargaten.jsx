import { kindagartenOffers, kindagartenGallery} from "../data";
import {kindagartensubjects, kindagartResource} from "../components/KindagartenSubject";
import { MdChildCare } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";




const Kindargaten = () => {

  return (
    <div className = 'kindagarten'>
        <div className="kindagarten__container container">
            <section className="categories__section section section">
                <div className="categories__section-container container">
                `<div className="left box">
                    <div className="icon">
                    <MdChildCare/>
                    </div>
                    <h2>Preschool</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam accusamus maxime eaque illo magnam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam accusamus maxime eaque illo magnam!</p>
                </div>`
                `<div className="right box">
                    <div className="icon">
                        <FaChildren/>
                    </div>
                    <h2>Kindargeten</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam accusamus maxime eaque illo magnam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veniam accusamus maxime eaque illo magnam!</p>
                </div>`
                </div>    
            </section>
            <section className="kindagarten__subjects section">
                <div className="kindagarten__subject-container container">
                    {
                    kindagartensubjects.map((subject, index)=>(
                        <div className="subject" key={index}>
                           <div className="icon">
                            {subject.icon}
                           </div>
                           <p>{subject.title}</p>
                        </div>
                    ))
                }
                </div>
            </section>

            <section className="offers section">
                <div className="Kindagarten__offers-container container">
                    {
                     
                     kindagartenOffers.map((kindagartenOffer) => (
                            <div key = { kindagartenOffer.id}
                             className="kindagarten__offer">
                                <div className="heading">
                                    <h1><span>{kindagartenOffer.title}</span></h1>
                                </div>
                                <div className="text">
                                    {kindagartenOffer.text}  
                                </div>
                                <button className="btn more">ReadMore</button>
                            </div>
                        ))
                      
                    }
                </div>
            </section>

            <section className="kindagarten__resources section">
                <div className="kindagarten__resources-container container">
                    {
                   kindagartResource.map((resource, index)=>(
                        <div className="resource" key={index}>
                           <div className="icon">
                            {resource.icon}
                           </div>
                           <p>{resource.title}</p>
                        </div>
                    ))
                }
                </div>
            </section>
            <section className="gallery section">
                <div className="kindargaten__gallery-container">
                    {
                    kindagartenGallery.map((image, index)=>(
                            <div key = {index}className="image__container">
                                 <img src={image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    </div>
  )
}

export default Kindargaten