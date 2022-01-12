import { createTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"

const Header = () => {
    const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Search a word" variant="standard" />
                </ThemeProvider>
                </div>
        </div>
    )
}

export default Header
