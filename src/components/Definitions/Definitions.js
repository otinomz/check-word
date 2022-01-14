import React from 'react'
import "./Definitions.css"

const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {
                word === "" ? (
                    <span className="subTitle">Start By Typing A Word In Search</span>
                ) : (meanings.map((mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className=""  style={{ backgroundColor: "crimson", content: "black" }}>
                                    <b>{ def.definition }</b>
                                </div>
                            ))
                        ))   
                    
                    ))
                )
            }
        </div>
    )
}

export default Definitions

