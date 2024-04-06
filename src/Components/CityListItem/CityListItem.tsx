
import { Chip, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import {
  citiesListItemStyle,
  citiesListItemContentStyle,
  citiesListItemTitleStyle,
} from "./CityListItemStyle";

import { CityListItemProps } from "../../types/cityTypes";
import { NavLink } from "react-router-dom";
import { useCityContext } from "../../context";
import { useState } from "react";

function CityListItem({ id, name, temperature, windSpeed, clouds, addedByUser }: CityListItemProps) {

  const [clicked, setClicked] = useState(false);


  const fadeOut = (cb: () => void) => {
    setClicked(true)
    setTimeout(() => cb(), 300);
  }
  const handleClick = (id: number) => {
    removeCityFromList(id)
    setClicked(false);

  };

  const { removeCityFromList } = useCityContext();

  console.log(name, addedByUser)
  return (
    <Stack flexDirection="column" sx={citiesListItemStyle}>

      <Stack
        flexDirection="row"
        alignItems="center"
        boxShadow={3}
        sx={{
          backgroundColor: addedByUser ? "darkcyan" : 'darkslategrey',
          opacity: clicked ? 0 : 1, transition: 'opacity 0.3s ease-out',
          ...citiesListItemContentStyle
        }}
      >

        <Stack
          flexGrow={1}
          flexDirection="row"
          justifyContent="space-between"
          margin='0px 20px 0px 10px'
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            columnGap="8px"
            rowGap="2px"
            flexWrap="wrap"
            margin="4px 0 4px 0"
          >
            <NavLink
              to={`/city/${id}`}
            >
              <Typography sx={citiesListItemTitleStyle}>{name}</Typography>
            </NavLink>
            <Stack flexDirection="row" gap="4px">

              <Chip
                variant="outlined"
                size="small"
                label={`${Math.floor(temperature - 273)} °C`}
                sx={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              />
              <Chip
                variant="outlined"
                size="small"
                label={`${windSpeed} m/s`}
                sx={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              />
              <Chip
                variant="outlined"
                size="small"
                label={`${clouds} %`}
                sx={{
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              />

            </Stack>
          </Stack>
          <IconButton
            onClick={() => fadeOut(() => handleClick(id))}
          >
            <CloseIcon sx={{ color: '#DDDDDD' }} />
          </IconButton>

        </Stack>
      </Stack>

    </Stack >
  );
}

export default CityListItem;
