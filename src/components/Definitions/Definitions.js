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
                                <div className="singleMenu" style={{ backgroundColor: "white", content: "black" }}
                        ))   
                    
                    ))
                )
            }
        </div>
    )
}

export default Definitions

