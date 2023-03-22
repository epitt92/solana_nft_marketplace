import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#f472b6',
      dark: '#f472b6',
    },
    secondary: {
      main: '#14f095',
      dark: '#95f1c5',
    },
    error: {
      main: '#ea564f',
    },
    background: {
      default: '#0A0B0D',
      paper: '#1D1D1D',
    },
    text: {
      primary: '#e3e6fe',
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: ['ProtoMono', 'CygnitoMono'].join(','),
  },

  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
        },
        row: {
          border: 'none',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
            },
          },
        },
      },
    },
  },
})
