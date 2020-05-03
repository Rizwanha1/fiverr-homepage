import React from 'react';
import Button from '@mui/material/Button'
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

const Productdetailpage = ({
    gigOwnerName,
    gigOwnerTier,
    gigImages,
    gigTitle,
    gigRate,
    gigStartPrice,
    gigMainCatagory,
    gigSubCatagory,
    gigLikedBy,
    gigDescription,
    deliveryDays,
}) => {

    console.log(gigTitle);



    return <Box padding='30px 1.5%'>
        <Grid container alignItems='center' justifyContent='space-around'>
            <Grid item xs={12}>
                <Typography fontSize={{ xs: '16px', sm: '20px' }} >
                    {gigTitle}
                </Typography>
            </Grid>
            <Grid item xs={11} sm={9} container>
                <List>
                    {
                        [gigOwnerName,
                            gigOwnerTier,
                            gigImages,
                            gigTitle,
                            gigRate,
                            gigStartPrice,
                            gigMainCatagory,
                            gigSubCatagory,
                            gigLikedBy,
                            gigDescription,
                            deliveryDays,].map((value,indx) => {
                                return <ListItem>
                                    <ListItemIcon>{indx}</ListItemIcon>
                                    <ListItemText>{value}</ListItemText>
                                </ListItem>

                            })
                    }
                </List>
            </Grid>
        </Grid>
    </Box>
}

export default Productdetailpage;
