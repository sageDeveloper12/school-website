import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';
import {motion} from 'framer-motion';
import {heroImage, classImage,schoolActivities,testimonials, gallery} from '../data';
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaLowVision } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineSportsHandball } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { currentIndex, nextSlide, prevSlide, setSliderItems, items } = useContext(MyContext);
  const [teacher, setTeacher] = useState(0);
  const [student, setStudent] = useState(0);
  const [location, setLocation] = useState(0);
  const [awards, setAward] = useState(0);
  const [modalOpen , setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const {title, image, description} = schoolActivities[currentIndex];



   // Intersection Observer Hook
   const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  

  const openModal = (index) =>{
    setModalIndex(index);
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModel = () =>{
    setModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    setSliderItems(heroImage.map((img, index) => ({ image: img, title: `Slide ${index + 1}`, description: 'Description here' })));
    console.log("i cant stop myself")
  }, [heroImage, setSliderItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); 
    }, 5000); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [nextSlide]);

  useEffect(()=>{
    if(inView){
    const counters = [
      {endValue: 100, setCount:setTeacher},
      {endValue: 100, setCount:setStudent},
      {endValue: 100, setCount:setLocation},
      {endValue: 100, setCount:setAward}
    ]

      counters.forEach(({endValue, setCount})=> {
        const duration = 2000;
        const increment = endValue/ (duration/50);

        const interval = setInterval(()=>{
          setCount((prevState)=>{
            if(prevState >= endValue){
              clearInterval(interval)
              return endValue
            }
            return prevState + increment
          })
        },50)
      })
    

 }}, [inView])


  return (
    <section className="section">
    <section className="home__container container" style={{ backgroundImage: `url(${heroImage[currentIndex]})` }}>
      <div className="hero__container">
        <motion.div className="hero__banner-text" initial={{y:-500}} animate={{y:0}} transition={{delay:1, type :"spring", stiffness: "400"}}>
          <h1>Welcome <span>BAWUJ SCHOOLS</span></h1>
          <p>Inspiring Excellence in Education from Kindergarten to Secondary School.</p>
        </motion.div>
        <button className='prev' onClick={prevSlide}><FaLessThan className='icon' /></button>
        <button className='next' onClick={nextSlide}><FaGreaterThan className='icon'/></button>
      </div>
    </section>
      <section className="about">
        <div className="about__container container">
          <div className="about__box mission">
            <div className="about__icon"><FaFlag className='icon'/></div>
            <div className="about__text">
              <h2>Mission</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
            </div>
          </div>
          <div className="about__box vision">
            <div className="about__icon"><FaLowVision className='icon' /></div>
              <div className="about__text">
                <h2>Vision</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </div>
          <div className="about__box history">
            <div className="about__icon"><FaHistory className='icon' /></div>
              <div className="about__text">
                <h2>History</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </div>
          <div className="about__box program">
            <div className="about__icon"><HiAcademicCap className='icon'/></div>
              <div className="about__text">
                <h2>Academics</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </div>
        </div>
      </section>
      <section className="welcome__message section">
        <div className="welcome__message-container container">
          <div className="left">
            <h3>WELCOME TO ICAST SCHOOL</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum atque veritatis, quaerat commodi provident dolores eveniet, sequi voluptate amet nulla libero molestias, vero ipsa natus amet nulla libero molestias, vero ipsa natu.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum atque veritatis, quaerat commodi provident dolores eveniet, sequi voluptate amet nulla libero molestias, vero ipsa natus amet nulla libero molestias, </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum atque veritatis, quaerat commodi provident dolores eveniet, sequi voluptate amet nulla libero molestias, vero ipsa natus amet nulla libero molestias, </p>
          </div>
          <div className="right">
            <img src={heroImage[2]} alt="" />
          </div>
        </div>     
      </section>
     <section className='offers section'>
      <div className="offer__container">
        <h2>WHAT WE OFFER</h2>
        <div className="offer__boxes">
        <div className="left__side">
          <div className="offer__card">
            <div className="offer__icon">
              <FaHouse className='icon' />
            </div>
            <div className="offer__text">
                <h3>Accomodation</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Enim, atque ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Reiciendis eos earum dolorem vero quaerat perspiciatis!Porro repellat eum architecto velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
          <div className="offer__card">
            <div className="offer__icon">
              <FaHelmetSafety className='icon' />
            </div>
            <div className="offer__text">
                <h3>Safety</h3>
                <p>Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Neque exercitationem at tenetur quo delectus sunt?amet consectetur adipisicing elit. 
                  Enim, atque ducimus. Porro repellat eum architecto velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
          <div className="offer__card">
            <div className="offer__icon">
              <GiTeacher className='icon'/>
            </div>
            <div className="offer__text">
                <h3>Certified Teacher</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident expedita, facilis ab praesentium rem. 
                  Enim, atque ducimus. Porro repellat eum architecto velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
        </div>
        <div className="right__side">
          <div className="offer__card">
            <div className="offer__icon">
              <SiGoogleclassroom className='icon' />
            </div>
            <div className="offer__text">
                <h3>Sufficient Classroom</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Temporibus molestiae quidem suscipit quaerat explicabo recusandae. elit.lorem15 
                  Enim, atque ducimus. Porro repellat eum architecto velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
          <div className="offer__card">
            <div className="offer__icon">
              <MdOutlineSportsHandball className='icon' />
            </div>
            <div className="offer__text">
                <h3>Sport Facilities</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Enim, atque ducimus. Porro repellat eum architeclorem15
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Possimus, iure. Quasi eveniet fuga exercitationem dolorem.to velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
          <div className="offer__card">
            <div className="offer__icon">
              <MdOutlineHotelClass className='icon' />
            </div>
            <div className="offer__text">
                <h3>Quality Classroom</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Enim, atque ducimus. Porro repellat eum architecto Lorem ipsum dolor, sit amet 
                  consectetur adipisicing elit. Inventore nemo optio asperiores vitae quos corporis?velit reprehenderit qui voluptatem nihil!</p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
     </section>
      <section className="subscribe">
        <div className="subscribe__container contaimer">
          <div className="subscribe__text">
            <h2>Subscribe To Our Newsletter</h2>
          </div>
          <div className="subscribe__form">
            <form className='form'>
              <input type="text " placeholder='Your email address' />
              <button className='subscribe__btn'>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="class__container container">
          <div className="class__heading">
            <h2>OUR CLASSES</h2>
          </div>
          <div className="class__boxes">
              <div className="class__box">
                <div className="class__image">
                    <img src={classImage[0]} alt="" />
                </div>
                <div className="class__text">
                  <h3>DayCare</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate magnam enim 
                    ipsum doloribus repudiandae saepe doloremque eveniet.</p>
                </div>
                <button className='class__button btn more'>Read More</button>
            </div>
              <div className="class__box">
                <div className="class__image">
                    <img src={classImage[1]} alt="" />
                </div>
                <div className="class__text">
                  <h3>Kindargarten</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate magnam enim 
                    ipsum doloribus repudiandae saepe doloremque eveniet.</p>
                </div>
                <button className='class__button btn more'>Read More</button>
            </div>
              <div className="class__box">
                <div className="class__image">
                    <img src={classImage[2]} alt="" />
                </div>
                <div className="class__text">
                  <h3>Primary</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate magnam enim 
                    ipsum doloribus repudiandae saepe doloremque eveniet.</p>
                </div>
                <button className='class__button btn more'>Read More</button>
            </div>
              <div className="class__box">
                <div className="class__image">
                    <img src={classImage[2]} alt=""/>
                </div>
                <div className="class__text">
                  <h3>Secondary</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate magnam enim 
                    ipsum doloribus repudiandae saepe doloremque eveniet.</p>
                </div>
                <button className='class__button btn more'>Read More</button>
            </div>
            
          </div>
        </div>
      </section>

      
      <section className="School Activities section">
          <div className="school__activities-container container">
            <h2>SCHOOL ACTIVITIES</h2>
            <div className="activities__boxes">
              <div className="left__side">
                <img src= {image} alt="" />
              </div>
              <div className="right__side">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn more">Read More</button>
              </div>
            </div>
          </div>
      </section>
     <section className='counter'>

     </section>
     <section className='counter section' ref ={counterRef}>
        <div className="counter__container container">
          <div className="counter">
            <GiTeacher className='icon'/>
            <h3>Certified Teachers</h3>
            <p>{Math.floor(teacher)}</p>
          </div>
          <div className="counter">
            <FaSchoolFlag className='icon'/>
            <h3>Location</h3>
            <p>{Math.floor(location)}</p>
          </div>
          <div className="counter">
            <PiStudentBold className='icon' />
            <h3>Student</h3>
            <p>{Math.floor(student)}</p>
          </div>
          <div className="counter">
            <LiaAwardSolid className='icon' />
            <h3>Awards</h3>
            <p>{Math.floor(awards)}</p>
          </div>
        </div>
     </section >

     <section className="gallery section">
        <div className="gallery__container container">
            <h2>GALLERY</h2>
            <div className="gallery__wrapper">
                {
                  gallery.map((image, index)=>(
                     <div className="image__container" key = {index}>
                        <img src={image} alt="" onClick={()=>{openModal(index)}}/>
                     </div>
                  ))
                }
            </div>
                {
                  modalOpen && (
                    <div className="modal">
                       <span>
                          <IoMdClose className='close__icon modal__icon' onClick={closeModel}/>
                       </span>
                       <span>
                          <FaLessThan className='prev__icon modal__icon' onClick={prevSlide}/>                       
                       </span>
                       <img src={gallery[modalIndex]} alt="Enlarged image" />
                       <span>
                          <FaGreaterThan className='next__icon modal__icon' onClick={nextSlide} />
                       </span>
                    </div>
                  )
                }
        </div>
     </section>
     <section className="testimonial section">
      <div className="testimonial__container container">
       {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="testimonial__item">
        <div className="text__container">
          <p>{testimonial.text}</p>
        </div>
        <div>
          <div className="profile">
            <div className="image__container">
              <img src={testimonial.image} alt="Testimonial" />
            </div>
            <div className="circle"></div>
            <div className="profile__text">
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
         
        </div>
        
      </div>
    ))}
  </div>
</section>
<section className="contact section">
  <div className="contact__container">
    <h2>CONTACT</h2>
  </div>
</section>
</section>
  )
}

export default Home