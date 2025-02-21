
const AccordationSingle = (props)=>{

    const {language} = props
    const {title, description} = language
    return (
        <>
        <div className = "buttons-text">
            <a className="btn btn-primary">{title}</a>
            <p className="card-text">{description}</p>
         </div>
    </>
    )
}

export default AccordationSingle