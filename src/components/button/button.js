import React from "react";
import './styles.css'


function Button ({name, active, onClick }){


    return (
      <div className="container-button">
<button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button> 
<span>Seus dados estão à salvo conosco</span>
      </div>
    )
}

export default Button