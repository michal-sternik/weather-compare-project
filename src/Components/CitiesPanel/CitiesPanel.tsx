import { Stack, CircularProgress, IconButton, InputAdornment, TextField } from "@mui/material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useCitiesContext } from "../../context";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function CitiesPanel() {

  const [inputValue, setInputValue] = useState<string>('');
  const citiesList = useCitiesContext()

  return (
    <Stack
      width="100%"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"
      overflow="auto"
      sx={citiesListPanelStyles}
    >
      <Stack
        flexDirection="row"
        sx={{ width: '100%', minHeight: '80px', padding: '12px' }}
      >
        <TextField
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          fullWidth
          placeholder="Szukaj wydarzeń..."
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
      <Stack>filter</Stack>
      <Stack width="100%">
        {!citiesList ? (
          <Stack flexGrow={1} justifyContent="center" alignItems="center">
            <CircularProgress size="160px" thickness={2} />
          </Stack>
        ) : (
          citiesList && citiesList.map((city) => <CityListItem {...city} />)
        )}
      </Stack>
    </Stack>
  );
}
export default CitiesPanel;
