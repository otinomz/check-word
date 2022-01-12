import React from 'react'

const Definitions = ({word, meanings, category}) => {
    return (
        <div>
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

