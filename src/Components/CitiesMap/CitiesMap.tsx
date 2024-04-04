

// import { CENTER_OF_EARTH, MAPBOX_ACCESS_TOKEN, MAPBOX_MAP_STYLE } from '../../api-tokens';
// import { citiesMapStyle } from './CitiesMapStyles';

import Map, { Marker } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN } from "../../api-tokens";



function CitiesMap() {

  return (
    <Map

      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        latitude: 59.4211,
        longitude: 19.6903,
        zoom: 3,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <Marker longitude={59.4} latitude={19.8} color="red" />
    </Map>

  );
}

export default CitiesMap