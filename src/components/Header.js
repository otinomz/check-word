import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import categories from '../data/Category'

const Header = ({category, setCategory}) => {
    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff,"
            },
            type: 'dark',
            },
        });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        id="standard-basic"
                        label="Search a word"
                        variant="standard"
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))} 
                    </TextField>
                </ThemeProvider>
                </div>
        </div>
    )
}

export default Header
