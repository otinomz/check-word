import { TextField } from '@material-ui/core'
import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
                 <TextField id="standard-basic" label="Search a word" variant="standard" />
            </div>
        </div>
    )
}

export default Header
