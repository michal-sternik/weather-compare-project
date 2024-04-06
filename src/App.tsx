
import './App.css'
import { ThemeProvider } from '@mui/material';
import RootLayout from './Components/RootLayout/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import THEME from './theme';
import { CitiesContext, CityContext } from './context';
import { useState, useEffect } from 'react';
import CityService from './api/services/cityService';
import { CityListItemProps } from './types/cityTypes';
import { randomCapitals } from './utils/country_utils';
import { world_capitals_by_continent } from './world_capitals_by_continent';
import { SnackbarProvider } from 'notistack';
import { handleClickVariant } from './utils/snackbar_utils';
import { AxiosError } from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

    </Route>,
  ),
);

function App() {

  const [citiesList, setCitiesList] = useState<CityListItemProps[]>([])

  const getWeatherForRandomCities = async (randomCitiesTable: string[]) => {
    const response = await CityService.getCitiesWeather(randomCitiesTable)
    setCitiesList(response)
  }

  const addCityToCitiesList = async (cityName: string) => {
    try {
      const response = await CityService.getCityWeather(cityName)
      setCitiesList([response, ...citiesList])
    }
    catch (e: unknown) {
      if (e instanceof AxiosError) {
        handleClickVariant(e.response!.data.message, 'error');
      } else {
        console.log(e)
      }
    }
  }
  const removeCityFromList = (id: number) => {
    const citiesLeft = citiesList.filter(city => city.id !== id)
    setCitiesList(citiesLeft)
  }

  useEffect(() => {
    getWeatherForRandomCities(randomCapitals(world_capitals_by_continent))

  }, []);


  return (
    <CitiesContext.Provider value={citiesList}>
      <CityContext.Provider value={{ addCityToCitiesList, removeCityFromList }}>
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={THEME}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </SnackbarProvider>
      </CityContext.Provider>
    </CitiesContext.Provider >
  )
}

export default App
