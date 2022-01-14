import React from 'react'
import "./Definitions.css"

const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === "en" && (
                    <audio style={{backgroundColor: "#fff", borderRadius: 10}}>
                        Your Browser doesn't support audio element
                    </audio>
                )
            }

            {/* mapping through items from the API */}
            {
                word === "" ? (
                    <span className="subTitle"> Start By Typing A Word In Search</span>
                ) : (meanings.map((mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className="singleMean"  style={{ backgroundColor: "whitesmoke", color: "black" }}>
                                    <b>{def.definition}</b>
                                    {def.example && (
                                            <span>
                                                <b>Example:</b>
                                                {def.example}
                                            </span>
                                        )
                                    }
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms: </b>
                                            {def.synonyms.map((s)=> `${s},`)}
                                        </span>
                                    )
                                    }
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

