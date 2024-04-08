import { PredictedPlace } from '../../types/cityTypes'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { citiesListItemStyle } from '../CityListItem/CityListItemStyle'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useCityContext } from '../../context';

const PredictedCity = ({ city, country }: PredictedPlace) => {

    const { addCityToCitiesList } = useCityContext();

    return (
        <Stack flexDirection="column" sx={citiesListItemStyle}>

            <Stack
                flexDirection="row"
                alignItems="center"
                boxShadow={3}
                sx={{
                    borderRadius: '5px',
                    padding: '1vw 0vw 1vw 1vw',
                    cursor: 'pointer',
                }}
            >

                <Stack
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        columnGap="8px"
                        rowGap="2px"
                        flexWrap="wrap"
                    // margin="4px 0 4px 0"
                    >

                        <AddLocationIcon sx={{
                            fontSize: "1.2vw",
                            whiteSpace: "nowrap", color: '#DDDDDD'
                        }} />
                        <Typography sx={{
                            fontSize: { xs: "1.8vw", md: '0.8vw' },
                            whiteSpace: "nowrap",
                            color: '#DDDDDD',
                            fontWeight: '600',
                        }
                        } > {city}</Typography>
                        <Typography sx={{
                            color: '#DDDDDD',
                            fontSize: { xs: "1.4vw", md: '0.6vw' },
                            whiteSpace: "nowrap",
                            fontWeight: '600',
                            opacity: 0.7
                        }}>{country}</Typography>

                        <Tooltip title="Add to comparison" placement="right">
                            <IconButton onClick={() => addCityToCitiesList(city!)}>
                                <ArrowDropDownCircleIcon sx={{
                                    color: '#DDDDDD', fontSize: "1.2vw",
                                    whiteSpace: "nowrap",
                                }} />
                            </IconButton>
                        </Tooltip>



                    </Stack>
                </Stack>

            </Stack>
        </Stack >


    )
}

export default PredictedCity