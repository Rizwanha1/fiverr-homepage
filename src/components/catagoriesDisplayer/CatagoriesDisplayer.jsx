import { Box, Button, Grid, Typography } from '@mui/material'
import CD from './fiverr-categories-graphics-design-.png';
import CardSkelton from './CardSkelton.jsx';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";


export default ({ diplayProduct, setsingleProductDetail }) => {
    const navigate = useNavigate()
    if (diplayProduct === false) {
        navigate('/')
    }
    return <Box maxWidth='xl' margin='100px auto' >
        {/* <img src={CD} width='100%' /> */}
        <Grid container spacing={2}>

            {
                diplayProduct.length > 0 ? diplayProduct.map((singleProduct) => <Grid item xs={12} sm={5} md={4} lg={3}>
                    <Box width='95%' margin='auto' boxShadow='0px 0px 1px black'>
                        <CardSkelton {...singleProduct} setsingleProductDetail={setsingleProductDetail} />
                    </Box>
                </Grid>) : <Grid item xs={12} >
                    <center>
                        <Typography mb={4} fontSize={{ xs: '16px', sm: '18px', md: '20px' }} sx={{ color: 'red' }}>
                            Not Product Found
                        </Typography>
                        <Link to='/' style={{textDecoration:'underline'}}> Go Back </Link>
                    </center>
                </Grid>
            }

        </Grid>
        <Box textAlign={'center'} mt={15}>
            <Pagination count={10} variant="outlined" shape="rounded" sx={{ display: 'inline-block' }} />
        </Box>
    </Box>
}



// export default connect(
//     (store) => {
//         return store;
//     },
//     (dispatch) => {
//         return {
//             orderItem : (productObj) =>{
//                 dispatch({
//                     type : "ORDER_ITEM",
//                     product : productObj,
//                 })
//             },


//             cartItem : (productObj) =>{
//                 dispatch({
//                     type : "CART_ITEM",
//                     product : productObj,
//                 })
//             },


//             deleteItem : (indx) =>{
//                 dispatch({
//                     type : "DEL_ITEM",
//                     index : indx,
//                 })
//             },






//         }
//     }
// )(catagoriesDisplayer);
