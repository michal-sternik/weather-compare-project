
import { IconButton, Stack } from '@mui/material';
import { toggleMapVisibilityButtonStyle, weatherWorkspaceContainerStyle, weatherWorkspaceMainAreaStyle } from './RootLayoutStyles';
import CitiesMap from '../CitiesMap/CitiesMap';
import CitiesPanel from '../CitiesPanel/CitiesPanel';
import { useState } from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


function RootLayout() {
    const [isMapVisible, setIsMapVisible] = useState<boolean>(false)

    return (
        <Stack direction="column" sx={weatherWorkspaceContainerStyle} >
            <Stack
                direction="row"
                flexGrow={1}
                sx={weatherWorkspaceMainAreaStyle}
                height="100%"
            >
                <CitiesPanel isMapVisible={isMapVisible} />
                <CitiesMap isMapVisible={isMapVisible} />
            </Stack>

            <IconButton
                size="large"
                sx={toggleMapVisibilityButtonStyle}
                onClick={() => {
                    setIsMapVisible(!isMapVisible)
                }}
            >
                {isMapVisible ? <ListAltIcon /> : <TravelExploreIcon />}
            </IconButton>
        </Stack>
    );
}

export default RootLayout;
