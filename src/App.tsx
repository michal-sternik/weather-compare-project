
import './App.css'
import { ThemeProvider } from '@mui/material';
import RootLayout from './Components/RootLayout/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import THEME from './theme';
import { CitiesContext } from './context';
import { useState, useEffect } from 'react';
import CityService from './api/services/cityService';
import { CityListItemProps } from './types/cityTypes';
import { randomCapitals } from './utils/country_utils';
import { world_capitals_by_continent } from './world_capitals_by_continent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

    </Route>,
  ),
);

function App() {

  const [citiesList, setCitiesList] = useState<CityListItemProps[]>()

  const getWeatherForRandomCities = async (randomCitiesTable: string[]) => {
    const response = await CityService.getCitiesWeather(randomCitiesTable)
    setCitiesList(response)
  }

  useEffect(() => {
    getWeatherForRandomCities(randomCapitals(world_capitals_by_continent))

  }, []);


  return (
    <CitiesContext.Provider value={citiesList}>
      <ThemeProvider theme={THEME}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CitiesContext.Provider>
  )
}

export default App
