import React, { useState } from "react";
import {
  Stack,
  CircularProgress,
  Typography,
  Chip,
} from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useCitiesContext } from "../../context";
import AddCity from "../AddCity/AddCity";
import { CityListItemProps } from "../../types/cityTypes";

interface SortType {
  type: "temperature" | "windSpeed" | "clouds";
  ascending: boolean;
}

function CitiesPanel() {
  const citiesList = useCitiesContext();
  const [sortBy, setSortBy] = useState<SortType | null>(null);

  const handleSort = (sortType: "temperature" | "windSpeed" | "clouds") => {
    //first click
    if (!sortBy) {
      setSortBy({ type: sortType, ascending: false });
    }
    //click again
    else if (sortBy.type === sortType) {
      setSortBy({ type: sortType, ascending: !sortBy.ascending });
    }
    //click other sort method
    else {
      setSortBy({ type: sortType, ascending: false });
    }
  };

  const getSortIcon = (sortType: "temperature" | "windSpeed" | "clouds") => {
    if (!sortBy || sortBy.type !== sortType) return undefined;
    return sortBy.ascending ? <ArrowUpward /> : <ArrowDownward />;
  };

  const sortedCitiesList = () => {
    if (!citiesList) return [];

    const sortFunction = (a: CityListItemProps, b: CityListItemProps) => {
      if (sortBy?.type === "temperature") {
        return sortBy.ascending
          ? a.temperature - b.temperature
          : b.temperature - a.temperature;
      } else if (sortBy?.type === "windSpeed") {
        return sortBy.ascending
          ? a.windSpeed - b.windSpeed
          : b.windSpeed - a.windSpeed;
      } else if (sortBy?.type === "clouds") {
        return sortBy.ascending ? a.clouds - b.clouds : b.clouds - a.clouds;
      }
      return 0;
    };

    return citiesList.sort(sortFunction);
  };



  return (
    <Stack
      width="100%"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"
      overflow="auto"
      sx={citiesListPanelStyles}
    >
      <AddCity />

      <Stack display="flex" flexDirection="row" gap="10px">
        <Typography variant="h6" sx={{ color: "white" }}>
          Sort by:
        </Typography>
        <Chip
          onClick={() => handleSort("temperature")}
          variant="outlined"
          size="small"
          label={`Temperature`}
          icon={getSortIcon("temperature")}
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        />
        <Chip
          onClick={() => handleSort("windSpeed")}
          variant="outlined"
          size="small"
          label={`Wind Speed`}
          icon={getSortIcon("windSpeed")}
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        />
        <Chip
          onClick={() => handleSort("clouds")}
          variant="outlined"
          size="small"
          label={`Cloud Cover`}
          icon={getSortIcon("clouds")}
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        />
      </Stack>

      <Stack width="100%">
        {!citiesList ? (
          <Stack flexGrow={1} justifyContent="center" alignItems="center">
            <CircularProgress size="160px" thickness={2} />
          </Stack>
        ) : (
          sortedCitiesList().map((city) => (
            <CityListItem key={city.id} {...city} />
          ))
        )}
      </Stack>
    </Stack>
  );
}

export default CitiesPanel;
