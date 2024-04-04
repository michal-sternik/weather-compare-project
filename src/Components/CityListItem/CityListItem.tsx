
import { Chip, Stack, Typography } from "@mui/material";

import {
  citiesListItemStyle,
  citiesListItemContentStyle,
  citiesListItemTitleStyle,
  citiesListItemContentLinkStyle,
} from "./CityListItemStyle";

import { CityListItemProps } from "../../types/cityTypes";
import { NavLink } from "react-router-dom";

function CityListItem({ id, name, temperature, windSpeed, clouds }: CityListItemProps) {

  return (
    <Stack flexDirection="column" sx={citiesListItemStyle}>
      <NavLink
        to={`/city/${id}`}
        style={citiesListItemContentLinkStyle}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          boxShadow={3}
          sx={citiesListItemContentStyle}
        >

          <Stack
            flexGrow={1}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              columnGap="8px"
              rowGap="2px"
              flexWrap="wrap"
              margin="4px 0 4px 0"
            >
              <Typography sx={citiesListItemTitleStyle}>{name}</Typography>
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

          </Stack>
        </Stack>
      </NavLink>
    </Stack>
  );
}

export default CityListItem;
