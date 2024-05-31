import { Box } from "@mui/material"
import PropTypes from 'prop-types';

const PageLayout=({children})=>{
    return(
        <Box pt={5.5}  height='100%' sx={{ overflow: 'auto' }}>
           {children} 
        </Box>
    )
}
PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout