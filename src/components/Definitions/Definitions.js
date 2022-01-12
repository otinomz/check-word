import React from 'react'
import "./Meanings"


const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {
                word === "" ? (
                    <span className="subTitle">Start By Typing A Word In Search</span>
                ) : (
                    "something"
                )
            }
        </div>
    )
}

export default Definitions

