import React from 'react'
import "./Definitions.css"

const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {
                // rendering the audio at the top for 
                // english category alone
                meanings[0] && word && category === "en" && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "#fff", borderRadius: 10 }}
                        controls
                    >
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
                                    <hr style={{ backgroundColor: "black", width: "100" }} />
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

