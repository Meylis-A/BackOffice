// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| DRAWER HEADER - STYLED ||============================== //

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
}));

export default DrawerHeaderStyled;
