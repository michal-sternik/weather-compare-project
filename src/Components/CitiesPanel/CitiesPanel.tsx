import { Stack, CircularProgress, IconButton, InputAdornment, TextField, Typography, Chip } from "@mui/material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useCitiesContext } from "../../context";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import CityAutocompleteService from "../../api/services/cityAutocompleteService";
import { PredictedPlace } from "../../types/cityTypes";
import PredictedCity from "../PredictedCity/PredictedCity";

function CitiesPanel() {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [candidatesList, setCandidatesList] = useState<PredictedPlace[]>([]);
  const citiesList = useCitiesContext()

  useEffect(() => {
    setIsTyping(true);
    if (inputValue) {
      const timer = setTimeout(() => {
        CityAutocompleteService.getListOfPredictetCities(inputValue).then((response) =>
          setCandidatesList(response),
        );
        setIsTyping(false);
      }, 400);
      return () => {
        clearTimeout(timer);
      };
    }
    setIsTyping(false);
    setCandidatesList([]);

    return () => { };
  }, [inputValue]);

  return (
    <Stack
      width="100%"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"
      overflow="auto"
      sx={citiesListPanelStyles}
    >

      {/* allocate in another component */}
      <Stack width='100%' marginBottom='10px' height='20vh' >
        <Stack
          flexDirection="row"
          sx={{ width: '100%', minHeight: '80px', padding: '12px' }}
        >
          <TextField
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            fullWidth
            placeholder="Szukaj miast do porównania..."
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
            (candidatesList.map(predictedCity => {
              return (<PredictedCity {...predictedCity} />)
            })
            )
          }
        </Stack>
      </Stack>


      {/* filter, sort, allocate in another component */}
      <Stack display='flex' flexDirection='row' gap='10px'>
        <Typography variant="h6" sx={{ color: 'white' }}>
          Sort by:
        </Typography>
        <Chip
          onClick={() => { }}
          variant="outlined"
          size="small"
          label={`Temperature`}
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        />
        <Chip
          onClick={() => { }}
          variant="outlined"
          size="small"
          label={`Wind Speed`}
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'bold',
            fontSize: '12px',
          }}
        />
      </Stack>


      <Stack width="100%">
        {!citiesList ? (
          <Stack flexGrow={1} justifyContent="center" alignItems="center">
            <CircularProgress size="160px" thickness={2} />
          </Stack>
        ) : (
          citiesList && citiesList.map((city) => <CityListItem {...city} />)
        )}
      </Stack>
    </Stack >
  );
}
export default CitiesPanel;
