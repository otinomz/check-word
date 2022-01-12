import { TextField } from '@material-ui/core'
import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
                 <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
    )
}

export default Header
