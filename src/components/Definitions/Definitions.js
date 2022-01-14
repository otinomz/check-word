import React from 'react'
import "./Definitions.css"

const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {/* mapping through items from the API */}
            {
                word === "" ? (
                    <span className="subTitle"> Start By Typing A Word In Search</span>
                ) : (meanings.map((mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className=""  style={{ backgroundColor: "whitesmoke", color: "black" }}>
                                    <b>{def.definition}</b>
                                    {def.example && (
                                            <span>
                                                <b>Example : {def.example}</b>
                                            </span>
                                        )
                                    }
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms:</b>
                                            {def.synonyms.map((s)=> `${s},`)}
                                        </span>
                                    )
                                    }
                                    <hr style={{ backgroundColor: "black", width: "100" }} />
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

