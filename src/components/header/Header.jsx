import { Button, Grid, Hidden, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './logo.png';
import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";



export default ({ openLogin, setopenLogin, openSignUp, setopenSignUp }) => {
    const navDealer = () => {
        subNavDealer()
        if (window.scrollY >= 10) {
            setNav(true);
        } else {
            setNav(false);
        }

    };
    const subNavDealer = () => {
        if (window.scrollY >= 260) {
            setsubNav(true);
        } else {
            setsubNav(false)
        }

    };




    const [nav, setNav] = useState(true);
    const [subNav, setsubNav] = useState(false);
    const [subNavElements, setsubNavElements] = useState(false);

    window.addEventListener("scroll", navDealer);
    const matches = useMediaQuery('(min-width:900px)');

    return <Box maxWidth='xl' sx={{ margin:'atuo',position: 'sticky', top: '0px', width: '100%', color: 'white',zIndex:4 }}>
        <Box className={"navActive"}>
            <Grid container alignItems='center' justifyContent='space-between' padding='20px 3%' borderBottom={'1px solid #E0E0E0'}>
                <Grid item xs={4} verticalAlign='center'>
                    <Hidden mdUp sx={{ verticalAlign: 'center' }}>
                        <MenuIcon color="red" style={{ verticalAlign: 'center' }} />
                    </Hidden>
                    <img src={Logo} alt={Logo} style={{ verticalAlign: 'center' }} />
                </Grid>
                <Grid item xs={7} container alignItems='center' justifyContent={{ xs: 'flex-end', md: 'space-around' }} sx={{ fontWeight: 'bold' }}>
                    <Hidden mdDown>
                        <Grid item >
                            Fiverr Bussiness
                        </Grid>
                        <Grid item >
                            Expolorrer
                        </Grid>
                        <Grid item >
                            PKR
                        </Grid>
                        <Grid item >
                         <Link to='/becomeSeller' style={{textDecoration:'none', color:'inherit'}}>   Become Seller </Link>
                        </Grid>
                    </Hidden>
                    <Grid item mr={{ xs: 2, md: false }} sx={{ cursor: 'pointer' }} onClick={() => setopenSignUp(!openSignUp)}>
                        Sign in
                    </Grid>
                    <Grid item >
                        <Button onClick={() => setopenLogin(!openLogin)} variant="text" sx={{ fontWeight: 'bold', color: '#1DBF73', borderRadius: '5px', border: '1px solid black', padding: '5% 20%' }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Grid>


        </Box>

        <Hidden smDown>

            <Grid container borderBottom={'1px solid #E0E0E0'} padding='10px 3%' justifyContent={'space-between'} className={(subNav) ? "navActive" : "navSimple"} sx={{display: subNav ? 'flex' : 'none'}}>
                {[{ label: 'Graphics & Design', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Digital Marketing', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Writing & Translation', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Video & Animation', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Music & Audio', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Programming & Tech', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Business', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Lifestyle', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] },
                { label: 'Trending', subMenu: [{ sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' }, { sublabel: 'label-1', link: '#' },] }].map((obj) => <Grid item sx={{cursor:'pointer'}} onClick={() => { setsubNavElements(obj.subMenu); }} >{obj.label}</Grid>)}
            </Grid>

            {
                subNavElements ? <Grid padding='50px 5%' margin='auto' container alignItem='center' sx={{ backgroundColor: '#DDDDDF' }} onMouseLeave={() => { setsubNavElements(false); }} >
                    {
                        subNavElements.map((obj) => <Grid item xs={3} mb={2}>
                            <a href={obj.link} style={{ textDecoration: 'none', color: 'black' }} onClick={() => setsubNavElements(false)}>
                                {obj.sublabel}
                            </a>
                        </Grid>)
                    }
                </Grid> : null
            }
        </Hidden>
    </Box>
}
