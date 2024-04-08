import type { SxProps } from '@mui/system';

const citiesListItemStyle: SxProps = {
    width: '100%',
    padding: '12px 12px 0px 12px',

    '&:last-child': {
        padding: '12px 12px 12px 12px',
    },

};

const citiesListItemContentStyle: SxProps = {
    borderRadius: '5px',
    padding: '0vw 0vw 0vw 1vw',
    cursor: 'pointer',
};

const citiesListItemContentLinkStyle = { height: '100%' };

const citiesListItemTitleStyle: SxProps = {
    fontFamily: 'Open Sans, sans-serif',
    color: '#DDDDDD',
    fontSize: '16px',
    fontWeight: '600',
};
const cityChipWeatherStyle: SxProps = {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "12px",
}


export {
    citiesListItemStyle,
    citiesListItemContentStyle,
    citiesListItemTitleStyle,
    citiesListItemContentLinkStyle,
    cityChipWeatherStyle
};
