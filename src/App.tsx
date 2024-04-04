
import './App.css'
import { ThemeProvider } from '@mui/material';
import RootLayout from './Components/RootLayout/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import THEME from './theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

    </Route>,
  ),
);

function App() {

  return (
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
