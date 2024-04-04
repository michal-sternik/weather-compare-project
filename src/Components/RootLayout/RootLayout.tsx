import React from 'react';

import { Stack } from '@mui/material';
import { weatherWorkspaceContainerStyle, weatherWorkspaceMainAreaStyle } from './RootLayoutStyles';
import CitiesMap from '../CitiesMap/CitiesMap';
import CitiesPanel from '../CitiesPanel/CitiesPanel';



function RootLayout() {
    return (
        <Stack direction="column" sx={weatherWorkspaceContainerStyle} >
            <Stack
                direction="row"
                flexGrow={1}
                sx={weatherWorkspaceMainAreaStyle}
                height="100%"
            >
                <CitiesPanel />
                <CitiesMap />
                {/* <EventsPanel />
          <EventsMap /> */}
            </Stack>
        </Stack>
    );
}

export default RootLayout;
