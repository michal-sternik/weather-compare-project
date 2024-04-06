import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import PredictedCity from '../PredictedCity/PredictedCity'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search'
import CityAutocompleteService from '../../api/services/cityAutocompleteService';
import { PredictedPlace } from '../../types/cityTypes';

const AddCity = () => {

    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [candidatesList, setCandidatesList] = useState<PredictedPlace[]>([]);

    useEffect(() => {
        if (inputValue) {
            setIsTyping(true);
            const timer = setTimeout(() => {
                CityAutocompleteService.getListOfPredictetCities(inputValue).then(response => {
                    const filteredResponse = response.filter(item => item.city !== undefined);
                    setCandidatesList(filteredResponse);
                }).finally(() => setIsTyping(false))
            }, 400);
            return () => {
                clearTimeout(timer);
            };
        }
        setCandidatesList([]);

        return () => { };
    }, [inputValue]);

    return (
        <Stack width='100%' marginBottom='10px' height='20vh' >

            <Stack
                flexDirection="row"
                sx={{ width: '100%', minHeight: '80px', padding: '12px' }}
            >
                <TextField
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    fullWidth
                    placeholder="Search for cites to compare..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'rgba(221, 221, 221, 0.4)' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setInputValue('')}>
                                    <CloseIcon sx={{ color: '#DDDDDD' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ input: { color: '#DDDDDD', fontFamily: 'sans-serif' } }}
                />
            </Stack>

            <Stack display="flex" flexDirection="row" width="100%" justifyContent='center' >
                {isTyping ?
                    (<Typography variant="h6" sx={{ color: 'white' }}>
                        Loading...
                    </Typography>)
                    :
                    (candidatesList.length !== 0 ? candidatesList.map(predictedCity => {

                        return (<PredictedCity {...predictedCity} />)

                    })
                        :
                        (<Typography variant="h6" sx={{ color: 'white' }}>
                            No cities found...
                        </Typography>)
                    )
                }
            </Stack>
        </Stack>
    )
}

export default AddCity