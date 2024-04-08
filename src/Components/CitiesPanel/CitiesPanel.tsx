import React, { useEffect, useState } from "react";
import {
  Stack,
  CircularProgress,
  Typography,
  Chip,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Pagination,
} from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import citiesListPanelStyles from "./CitiesPanelStyle";
import CityListItem from "../CityListItem/CityListItem";
import { useCitiesContext } from "../../context";
import AddCity from "../AddCity/AddCity";
import { CityListItemProps } from "../../types/cityTypes";
import { MAX_ITEMS_PER_PAGE } from "../../constants";




interface SortType {
  type: "temperature" | "windSpeed" | "clouds";
  ascending: boolean;
}

function CitiesPanel() {
  const citiesList = useCitiesContext();
  const [sortBy, setSortBy] = useState<SortType | null>(null);
  const [filterOption, setFilterOption] = useState('pagination');
  const [page, setPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(1);



  useEffect(() => {
    if (citiesList) {
      setPagesCount(Math.ceil(citiesList.length / MAX_ITEMS_PER_PAGE))
    }

  }, [citiesList]);

  const renderPaginatedCities = () => {
    if (!citiesList) return [];
    sortedCitiesList()
    const sliceFrom = page * MAX_ITEMS_PER_PAGE - MAX_ITEMS_PER_PAGE
    const sliceTo = page * MAX_ITEMS_PER_PAGE
    return citiesList.slice(sliceFrom, sliceTo)
  }

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

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(event.target.value);
  };


  return (
    <Stack
      width="100%"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"

    >
      <AddCity />

      <Stack display="flex" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        justifyContent='space-evenly'
        width="100%"

      >
        <Stack display="flex" flexDirection="row" gap="10px" alignItems='center'>
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
        <Stack display="flex" flexDirection="row" gap="10px" alignItems='center'>
          <Typography variant="h6" sx={{ color: "white" }}>
            Filter:
          </Typography>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Display</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={filterOption}
              onChange={handleFilterChange}
            >
              <FormControlLabel sx={{
                padding: 0,
                color: "#ffff",

              }} value="pagination" control={<Radio />} label="Pagination" />
              <FormControlLabel sx={{
                padding: 0,
                color: "#ffff",

              }} value="full-list" control={<Radio />} label="Full List" />
            </RadioGroup>
          </FormControl>

        </Stack>

      </Stack>

      <Stack width="100%" overflow="auto"
        sx={citiesListPanelStyles}>
        {!citiesList ? (
          <Stack flexGrow={1} justifyContent="center" alignItems="center">
            <CircularProgress size="160px" thickness={2} />
          </Stack>
        ) : (
          filterOption === 'pagination' ?
            renderPaginatedCities().map((city) => (
              <CityListItem key={city.id} {...city} />
            ))
            :
            sortedCitiesList().map((city) => (
              <CityListItem key={city.id} {...city} />
            ))
        )}
      </Stack>

      <Stack padding='10px' spacing={3} position='absolute' bottom='0'>
        {filterOption === 'pagination' ? (
          <Pagination count={pagesCount} page={page} onChange={(event: React.ChangeEvent<unknown>, value: number) => setPage(value)} />
        ) : null}
      </Stack>
    </Stack >
  );
}

export default CitiesPanel;
