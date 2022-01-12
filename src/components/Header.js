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
                    <TextField id="standard-basic" label="Search a word" variant="standard" />
                     <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={category}
                        helperText="Please select your language"
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
