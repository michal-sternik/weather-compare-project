import Map, { Marker, MapRef } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE } from "../../api-tokens";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCitiesContext } from '../../context';
import { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WeatherMapIcon from '../WeatherMapIcon/WeatherMapIcon';

function CitiesMap({ isMapVisible }: { isMapVisible: boolean }) {
  const citiesList = useCitiesContext();
  const mapRef = useRef<MapRef>(null);
  const [clicked, setClicked] = useState<boolean>(false)

  useEffect(() => {
    if (isMapVisible && mapRef.current) {
      mapRef.current.resize();
    }
  }, [isMapVisible, mapRef]);

  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      display: { xs: isMapVisible ? 'flex' : 'none', md: 'flex' }
    }}>

      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          latitude: 20,
          longitude: 0,
          zoom: 2,
        }}

        mapStyle={MAPBOX_MAP_STYLE}
      >
        {clicked && <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{ margin: '10px' }}
          onClick={() => {
            setClicked(false);
            mapRef.current?.flyTo({
              center: [0, 20],
              zoom: 2,
            });
          }}

        >
          Back
        </Button>}

        {citiesList && citiesList.map(city => (

          <Marker
            key={city.id}
            longitude={city.coord.longitude}
            latitude={city.coord.latitude}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setClicked(true);
              mapRef.current?.flyTo({
                center: [city.coord.longitude, city.coord.latitude],
                zoom: 6,
              });
            }}
          >
            <WeatherMapIcon {...city} />
          </Marker>

        ))}
      </Map>
    </Box>
  );
}

export default CitiesMap;
