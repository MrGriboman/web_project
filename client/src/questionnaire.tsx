import { Select, TextField, SelectChangeEvent, MenuItem, FormControl, InputLabel, OutlinedInput, FormControlLabel, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base';
import React from "react";
import { isNamespaceExport } from "typescript";
import { grey } from "@mui/material/colors";

const grey_200 = grey[200];

const Questionnaire = () => {
    const hobbies = [
        'Английский язык',
        'Музыкальные инструменты',
        'JavaScript'
    ]
        
    const [knownHobby, setKnownHobby] = React.useState<string[]>([]);
    const [desiredHobby, setDesiredHobby] = React.useState<string[]>([]);

    const knowHandleChange = (event: SelectChangeEvent<typeof knownHobby>) => {
    const {
        target: { value },
    } = event;
    setKnownHobby(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
    };

    const wantKnowHandleChange = (event: SelectChangeEvent<typeof desiredHobby>) => {
        const {
            target: { value },
        } = event;
        setDesiredHobby(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        };
    

    return ( 
        <div className="questionnaire-form-container">
            <div className="login-form-container">
            <form className="login-form" autoComplete='off' noValidate>
                <TextField            
                    variant='filled'
                    size='small'                    
                    label='E-mail'            
                    sx={{ m:2 }}
                >
                </TextField>          
                
                <FormControl sx={{m:2, background: grey_200, width: '350px'}}>
                    <InputLabel>Знаю</InputLabel>
                    <Select                                      
                        multiple
                        value={knownHobby}                    
                        onChange={knowHandleChange}
                        input={<OutlinedInput label="Знаю"/>}
                    >
                        {hobbies.map((hobby) => (
                            <MenuItem
                                key={hobby}
                                value={hobby}
                            >
                            {hobby}  
                            </MenuItem>
                        ))}
                    </Select>      
                </FormControl>

                <FormControl sx={{m:2, background: grey_200, width: '350px'}}>
                    <InputLabel>Хочу узнать</InputLabel>
                    <Select                    
                        multiple
                        value={desiredHobby}                    
                        onChange={wantKnowHandleChange}
                        input={<OutlinedInput label="Хочу узнать"/>}
                    >
                        {hobbies.map((hobby) => (
                            <MenuItem
                                key={hobby}
                                value={hobby}
                            >
                            {hobby}  
                            </MenuItem>
                        ))}
                    </Select>      
                </FormControl>

                <FormControl sx={{m:2}}>
                    <FormControlLabel control={<Checkbox/>} label='Ищу собеседника' />
                    <FormControlLabel control={<Checkbox/>} label='Ищу ментора' />
                    <FormControlLabel control={<Checkbox/>} label='Хочу быть ментором' />
                </FormControl>
                          
                <TextField
                    variant='filled'
                    multiline                                        
                    label='О себе'            
                    sx={{ m:2 }}
                >
                </TextField>
                <br></br>
                <div className='submit-btn-container'>
                <Button type='submit' variant='contained' color='primary' fullWidth>Сохранить</Button>
                </div>          
            </form>
            </div>
        </div>
     );
}
 
export default Questionnaire;