import { createMuiTheme } from '@material-ui/core/styles';
import "@fontsource/inter";

/*
*   defaults available here https://material-ui.com/customization/default-theme/
*
*/

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fafafa',
            dark: '#c7c7c7',
            contrastText: '#000000'
        },
        secondary: {
            light: '#ffa4a2',
            main: '#e57373',
            dark: '#af4448',
            contrastText: '#000000'
        },
    },
    typography: {
        h5: {
            fontFamily: ['Inter','sans-serif',
            ].join(','),
        },
        h6: {
            fontFamily: ['Inter','sans-serif',
            ].join(','),
        },
        overline: {
            fontFamily: ['Inter','sans-serif',
            ].join(','),
        },
        subtitle1: {
            fontFamily: ['Inter','sans-serif',
            ].join(','),
        },
        subtitle2: {
            fontFamily: ['Inter','sans-serif',
            ].join(','),
            fontWeight: 'bolder',
            fontSize: '1rem'
        },
    },
});

export default customTheme;