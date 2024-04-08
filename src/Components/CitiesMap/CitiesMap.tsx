import Map, { Marker } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE } from "../../api-tokens";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCitiesContext } from '../../context';
import { useRef, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CitiesMap() {
  const citiesList = useCitiesContext();
  const mapRef = useRef(null);
  const [clicked, setClicked] = useState<boolean>(false)

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        latitude: 20,
        longitude: 0,
        zoom: 2,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={MAPBOX_MAP_STYLE}
    >
      {clicked && <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{ margin: '10px' }}
        onClick={() => {
          setClicked(false)
          mapRef.current?.flyTo({
            center: [0, 20],
            zoom: 2,
          });
        }}

      >
        Back
      </Button>}

      {
        citiesList && citiesList.map(city => (

          <Marker
            key={city.id}
            longitude={city.coord.longitude}
            latitude={city.coord.latitude}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setClicked(true)
              mapRef.current?.flyTo({
                center: [city.coord.longitude, city.coord.latitude],
                zoom: 6,
              });
            }}
          >
            <Box sx={{
              width: '130px',
              height: 'auto',
              borderRadius: '20%',
              background: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',

              fontSize: "5px",
            }}>
              <img style={{ width: '40%', height: 'auto' }} src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`} />
              <Stack>
                <Typography>
                  {`${Math.floor(city.temperature - 273)} °C`}
                </Typography>
                <Typography sx={{ fontSize: "calc(0.5vw + 0.5vh)" }}>
                  {city.name}
                </Typography>
              </Stack>
            </Box>
          </Marker>

        ))
      }
    </Map >
  );
}

export default CitiesMap;
