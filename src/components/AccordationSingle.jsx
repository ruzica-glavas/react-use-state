import { useState } from "react"

const AccordationSingle = (props)=>{
    const [isOpen, setIsOpen] = useState (false)

    const {language} = props
    const {title, description} = language

    const handleAccordation =() => setIsOpen (!isOpen) //switchare su true

    return (
        <>
        <div className = "card-body">
                <div className="btn">
                    <button className="btn btn-primary" onClick={handleAccordation}>{title}</button>
                </div>
                <div className="container-description">
                    {isOpen && <div className="description">{description}</div>}{/* se isOpen é su true si mostra la descrizione se no, niente*/}
                </div>
         </div>

        
          
    </>
    )
}

export default AccordationSingle