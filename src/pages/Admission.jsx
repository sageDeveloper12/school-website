import { steps } from "../data";
import { useState } from "react";



const Admission = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const handleClick = (id)=>{
        setCurrentStep(id)
    }
  return (
    <div className="admission section">
        <div className="admission__container container">
            <section className="admission__process">
                <div className="admission__process-container ">
                  {
                   steps.map((step)=>(
                    <div className={`steps ${currentStep === step.id ? 'active' : ''} `}key={step.id} onClick={()=>{handleClick(step.id)}}>
                        <h4>{step.title}</h4>
                        {currentStep === step.id && <p>{step.content}</p>}
                    </div>
                   ))
                }
                </div>
            </section>
            section
        </div>
    </div>
  )
}

export default Admission