import { Box, Stack, Typography } from '@mui/material'
import { CityListItemProps } from '../../types/cityTypes'
import { imgMapBoxIconStyle, weatherMapBoxIconStyles } from './WeatherMapIconStyles'

const WeatherMapIcon = ({ name, temperature, icon }: CityListItemProps) => {
    return (
        <Box sx={weatherMapBoxIconStyles}>
            <img style={imgMapBoxIconStyle} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Stack>
                <Typography>
                    {`${Math.floor(temperature - 273)} °C`}
                </Typography>
                <Typography sx={{ fontSize: "calc(0.5vw + 0.5vh)" }}>
                    {name}
                </Typography>
            </Stack>
        </Box>
    )
}

export default WeatherMapIcon