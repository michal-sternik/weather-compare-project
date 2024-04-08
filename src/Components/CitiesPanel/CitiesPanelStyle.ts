import type { SxProps } from '@mui/system';

const citiesListPanelStyles: SxProps = {
    '&::-webkit-scrollbar': {
        width: '10px',
        backgroundColor: '#2C2C2C',
        borderRadius: '5px',
    },

    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#343434',
        borderRadius: '5px',
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '#2C2C2C',
        borderRadius: '5px',
    },
};
const sortingPanelChipStyles: SxProps = {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "12px",
}
const sortRadioButtonStyles: SxProps = {
    padding: 0,
    color: "#ffff",
}

export { citiesListPanelStyles, sortingPanelChipStyles, sortRadioButtonStyles };
