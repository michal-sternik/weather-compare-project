import { Stack, CircularProgress } from "@mui/material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useEffect, useState } from "react";
import CityService from "../../api/services/cityService";
import { CityListItemProps } from "../../types/cityTypes";
import { randomCapitals } from "../../utils/country_utils";
import { world_capitals_by_continent } from "../../world_capitals_by_continent";


const areCitiesLoading = false;
function CitiesPanel() {

  const [citiesList, setCitiesList] = useState<CityListItemProps[]>()


  const getWeatherForRandomCities = async (randomCitiesTable: string[]) => {

    const response = await CityService.getCitiesWeather(randomCitiesTable)
    setCitiesList(response)

  }

  useEffect(() => {
    getWeatherForRandomCities(randomCapitals(world_capitals_by_continent))

  }, []);

  return (
    <Stack
      width="100%"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"
      overflow="auto"
      sx={citiesListPanelStyles}
    >
      {areCitiesLoading ? (
        <Stack flexGrow={1} justifyContent="center" alignItems="center">
          <CircularProgress size="160px" thickness={2} />
        </Stack>
      ) : (
        citiesList && citiesList.map((city) => <CityListItem {...city} />)
      )}
    </Stack>
  );
}
export default CitiesPanel;
