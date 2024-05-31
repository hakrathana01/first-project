import { createTheme } from "@mui/material";


const palette={
    primary:{
        main: '#FF0000',
    },
    secondary:{
        main:'#FFFF00'
    }
}

const theme = createTheme({
   palette
  });

  export default theme