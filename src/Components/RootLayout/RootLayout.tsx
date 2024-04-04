import React from 'react';

import { Grid, Stack, SxProps } from '@mui/material';
import { Outlet } from 'react-router-dom';

import THEME from '../../theme';
import { weatherWorkspaceContainerStyle, weatherWorkspaceMainAreaStyle } from './RootLayoutStyles';
import CitiesPanel from '../CitiesPanel/CitiesPanel';
import CitiesMap from '../CitiesMap/CitiesMap';



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
