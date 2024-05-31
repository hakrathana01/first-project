import { Box, Grid } from "@mui/material"

const HomePage=()=>{
    return(
        <Box pt={5.5}  height='100%' sx={{ overflow: 'auto' }}>
     <Grid container sx={{height:'9000px', background:'blue'}}>
            <Grid item>Home Page</Grid>
        </Grid>
    </Box>

    
       
    )
}
export default HomePage