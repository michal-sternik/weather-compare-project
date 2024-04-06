import { Stack, CircularProgress, Typography, Chip } from "@mui/material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useCitiesContext } from "../../context";
import AddCity from "../AddCity/AddCity";

function CitiesPanel() {
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

      {/* allocate in another component */}
      <AddCity />


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
