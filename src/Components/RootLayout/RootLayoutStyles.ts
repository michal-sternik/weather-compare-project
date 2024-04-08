import type { SxProps } from '@mui/system';

const weatherWorkspaceContainerStyle: SxProps = {
  backgroundColor: '#202020',
  height: '100vh',
};

const weatherWorkspaceMainAreaStyle: SxProps = {};
const toggleMapVisibilityButtonStyle: SxProps = {
  display: {
    xs: 'flex',
    md: 'none',
  },
  position: 'absolute',
  bottom: '10px',
  right: '32px',
  backgroundColor: '#1976d2',

  '&:hover': {
    backgroundColor: '#1976d2',
  },
}
export { weatherWorkspaceContainerStyle, weatherWorkspaceMainAreaStyle, toggleMapVisibilityButtonStyle };
