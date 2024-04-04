import Map, { Marker } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE } from "../../api-tokens";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCitiesContext } from '../../context';

function CitiesMap() {
  const citiesList = useCitiesContext();

  return (
    <Map
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        latitude: 20,
        longitude: 0,
        zoom: 1.3,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={MAPBOX_MAP_STYLE}
    >
      {citiesList && citiesList.map(city => (

        <Marker key={city.id} longitude={city.coord.longitude} latitude={city.coord.latitude} color="red" ></Marker>

      ))}
    </Map>
  );
}

export default CitiesMap;
