import type { SxProps } from '@mui/system';

const citiesListItemStyle: SxProps = {
    width: '100%',
    padding: '12px 12px 0px 12px',

    '&:last-child': {
        padding: '12px 12px 12px 12px',
    },
    '&:first-of-type': {
        padding: '0px 12px 0px 12px',
    },
};

const citiesListItemContentStyle: SxProps = {
    backgroundColor: '#2C2C2C',
    borderRadius: '5px',
    padding: '12px 16px',
    cursor: 'pointer',
};

const citiesListItemContentLinkStyle = { height: '100%' };

const citiesListItemTitleStyle: SxProps = {
    fontFamily: 'Open Sans, sans-serif',
    color: '#DDDDDD',
    fontSize: '16px',
    fontWeight: '600',
};



export {
    citiesListItemStyle,
    citiesListItemContentStyle,
    citiesListItemTitleStyle,
    citiesListItemContentLinkStyle,

};
