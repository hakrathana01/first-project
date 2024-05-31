
import { Grid, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"


const NavBar=()=>{
    const menu=[{name:'Home',url:'/'},{name:'About US',url:'/about-us'},{name:"Contact",url:'/contact'}]
    const { pathname } = useLocation();
    console.log("PathName",pathname)
    return(
        <Grid container sx={{background:'#E49BFF',display:'flex',justifyContent:'space-between', padding:'10px', position:'fixed' }}>
            <Grid item>LOGO</Grid>
            <Grid item>
                <Grid container spacing={2} sx={{padding:'0px 10px'}}>
                    {menu.map((item,index)=>{
                        return(
                            <Grid item key={index}>
                            <Link to={item.url} sx={{BorderBottom:'none'}}>
                                <Typography sx={{color:pathname==item.url?(theme)=>theme.palette.primary.main:''}}>
                                    {item.name}
                                </Typography>
                            </Link>
                               
                                
                            </Grid>
                        )
                    })}
                    
                   
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavBar