import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { Apple, Facebook, Google } from '@mui/icons-material';
import { Divider, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default ({ openLogin, setopenLogin }) => {

    const getData = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data.get('userId'));
        console.log(data.get('userPassword'));

    }
    return (
        <div>

            <Dialog
                open={openLogin}
                onClose={() => setopenLogin(false)}

            >
                <DialogTitle textAlign='center'> Join Us </DialogTitle>
                <DialogContent sx={{ maxWidth: '350px' }} >
                    <DialogContentText>
                        <Box component='form' onSubmit={getData}>



                            <Button fullWidth sx={{ marginTop: '20px', padding: '10px 0px', background: '#4267B2', color: 'white', '&:hover': { background: '#4267B2' } }} >
                                <Grid container alignItems={'center'}>
                                    <Grid item xs={3}> <Facebook color='white' style={{ verticalAlign: 'middle' }} /></Grid>
                                    <Grid item xs={7}><span>FACEBOOK</span></Grid>
                                </Grid>
                            </Button>

                            <Button fullWidth sx={{ marginTop: '20px', padding: '10px 0px', background: 'transparent', border: '1px solid #E4E5E7', color: 'gray', '&:hover': { background: 'transparent' } }} >
                                <Grid container alignItems={'center'}>
                                    <Grid item xs={3}> <Google color='gray' style={{ verticalAlign: 'middle' }} /></Grid>
                                    <Grid item xs={7}><span>Continue with Google</span></Grid>
                                </Grid>
                            </Button>

                            <Button fullWidth sx={{ marginTop: '20px', padding: '10px 0px', background: 'transparent', border: '1px solid #E4E5E7', color: 'gray', '&:hover': { background: 'transparent' } }} >
                                <Grid container alignItems={'center'}>
                                    <Grid item xs={3}><Apple color='gray' style={{ verticalAlign: 'middle' }} /></Grid>
                                    <Grid item xs={7}><span>Continue with Apple</span></Grid>
                                </Grid>
                            </Button>

                            <Divider sx={{ margin: '50px auto' }}> <span fontSize='14px'>OR</span> </Divider>

                            <TextField
                                fullWidth
                                // value={formData.firstName}
                                id="userId"
                                name="userId"
                                type={'text'}
                                placeholder="Enter Your ID"
                                sx={{ marginBottom: '20px' }}
                            />


                            <TextField
                                fullWidth
                                // value={formData.firstName}
                                type={'password'}
                                id="userPassword"
                                name="userPassword"
                                placeholder="Enter Your Password"
                            />
                            <Link to={'/dashbord'} style={{textDecoration:'none'}}>
                                <Button onClick={()=> setopenLogin(false)} fullWidth type='submit' sx={{ margin: '20px auto', padding: '10px 0px', background: '#1E1E1E', border: '1px solid #E4E5E7', color: 'gray', '&:hover': { background: '#110026' } }} >
                                    <span>Continue</span>
                                </Button>
                            </Link>

                            <Typography >
                                By joining I agree to receive emails.
                            </Typography>

                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box width='100%' textAlign={'center'} pt={2} pb={2}>
                        Already a member?<a href='#' style={{ textDecoration: 'none', color: "green" }}>Sign In</a>
                    </Box>

                </DialogActions>
            </Dialog>
        </div >
    );
}