import { Box } from "@mui/system"
import Home from './home.png';
import Button from '@mui/material/Button'
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, CardHeader, Divider, Grid, Input, InputAdornment, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Laptop } from "@mui/icons-material";
// import pskill from './p.PNG';
import animated from './assets/animated-slider.jpg';
import book from './assets/book-slider.jpg';
import illustration from './assets/illustration-slider.jpg';
import logo from './assets/logo-slider.jpg';
import voiceover from './assets/voiceover-slider.jpg';
import wordpress from './assets/wordpress-slider.jpg';
import social from './assets/social-slider.jpg';
import videoimg from './assets/videoimg.PNG';
import guide from './assets/guide.PNG';
import businessimg from './assets/bus.PNG';
import { Link, useNavigate } from "react-router-dom";




const MediaCard = ({ img }) => {
    return (
        <Card sx={{ maxWidth: '90%', margin: 'auto', "&:hover": { opacity: '.7', cursor: 'pointer' } }}>
            <CardMedia
                component="img"
                height="270"
                image={img}
                alt="green iguana"
            />
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'green' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016" />
        </Card>
    );
}



export default ({ filterDataSet }) => {


    // slider data
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1600, min: 1210 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1210, min: 980 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 980, min: 764 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 764, min: 490 },
            items: 2,
        },
        mob: {
            breakpoint: { max: 490, min: 0 },
            items: 1,
        },
    };

    // slider 2
    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1600, min: 1210 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1210, min: 980 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 980, min: 764 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 764, min: 490 },
            items: 2,
        },
        mob: {
            breakpoint: { max: 490, min: 0 },
            items: 1,
        },
    };
const navigate = useNavigate()
    return <Box>
        <Grid container alignItems={'center'} sx={{ backgroundColor: '#AC415C', color: 'white' }} padding='150px 1.5%'>
            <Grid item container xs={12} sm={6}>
                <Grid item xs={12} component="form" onSubmit={(event) => {
                    event.preventDefault()
                    filterDataSet('sub', event.target.search.value)
                    navigate('/catDisplayer')
                }}>
                    <Typography fontSize={{ xs: '26px', sm: '35px', md: '55px' }}>
                        Find the best Freelancer services for your business
                    </Typography>
                    <Input
                        placeholder="Search related services"
                        sx={{
                            textDecoration: "none",
                            height: "50px",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            width: "100%",
                            marginTop: "20px",
                            color: "white",
                            border: "1px solid white",
                        }}
                        disableUnderline
                        id="search"
                        name='search'
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "white" }} />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <Button
                                    type='submit'
                                    variant="outline"
                                    sx={{ color: "tan", backgroundColor: "teal", borderCollapse: 'collapse' }}
                                >
                                    Search
                                </Button>
                            </InputAdornment>
                        } />
                </Grid>
                <Grid item xs={10} container mt={2} spacing={2}>
                    <Grid item >
                        <Typography>
                            Popular :
                        </Typography>
                    </Grid>
                    {
                        ['NFT', 'Word Press', 'Design', 'Managment'].map((text) => <Grid item >
                            <Link to='/catDisplayer' >
                            <Button onClick={() => {
                                filterDataSet('sub', text)
                            }} sx={{ background: 'none', border: '1px solid white', color: 'white', margin: 0, borderRadius: '17px', fontWeight: 'bold', paddingTop: 0, paddingBottom: 0, fontSize: '14px' }}>
                                {text}
                            </Button>
                            </Link>
                        </Grid>)
                    }

                </Grid>


            </Grid>
            <Grid item xs={false} sm={false} md={6}></Grid>
        </Grid>




        {/* slider for professional skills */}
        <Grid container mt={20}>
            <Grid item xs={12} mb={5}>
                <Typography fontSize={{ xs: '20px', sm: '30px', md: '40px' }}>
                    Professional Skills
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {/* <img src={pskill} /> */}
                <Carousel
                    swipeable
                    draggable
                    responsive={responsive}
                    infinite={true}
                    autoPlay
                >

                    {[
                        {
                            id: 1,
                            title: "Digital Marketing",
                            description:
                                "Lorem ipsum dolor",
                            image: animated,
                        },
                        {
                            id: 2,
                            title: "Graphics & Design",
                            description:
                                "Lorem ipsum dolor",
                            image: book,
                        },
                        {
                            id: 3,
                            title: "Writing & Translation",
                            description:
                                "Lorem ipsum dolor",
                            image: illustration,
                        },
                        {
                            id: 4,
                            title: "Music & Audio",
                            description:
                                "Lorem ipsum dolor",
                            image: logo,
                        },
                        {
                            id: 5,
                            title: "Video & Animation",
                            description:
                                "Lorem ipsum dolor",
                            image: voiceover,
                        },
                        {
                            id: 6,
                            title: "Programming & Tech",
                            description:
                                "Lorem ipsum dolor",
                            image: wordpress,
                        },
                        {
                            id: 7,
                            title: "Business",
                            description:
                                "Lorem ipsum dolor",
                            image: social,
                        },
                    ].map(({ id, title, image, description }) => {
                        return (
                            <Link to='/catDisplayer' >
                                <Box
                                    key={id}
                                    sx={{
                                        // backgroundImage: `url(${image})`,
                                        position: 'relative',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                        // textAlign: "center",
                                        fontWeight: "bold",
                                        color: "white",
                                        height: "60vh",
                                        "&:hover": {
                                            opacity: "0.8",
                                            color: "tan",
                                            cursor: "pointer",
                                        },
                                        width: { xs: 230 },

                                        margin: "0px 10px",
                                        borderRadius: "15px",
                                        padding: "10px",
                                    }}
                                    onClick={() => {
                                        filterDataSet('main', title)
                                    }}
                                >
                                    <img src={image} width='225px' />
                                    <Box sx={{ position: 'absolute', top: 20, paddingLeft: '10px' }}>
                                        <Typography variant="body1" color="white">
                                            {description}
                                        </Typography>
                                        <Typography variant="h5" color="white">
                                            {title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        );
                    })}
                </Carousel>
            </Grid>
        </Grid>


        {/* fingertips */}
        <Grid container padding='150px 1.5%' justifyContent={'space-around'} alignItems='center' backgroundColor='#F1FDF7'>
            <Grid item xs={12} sm={5}>
                <Typography fontSize={{ xs: '20px', sm: '25px', md: 35 }}>
                    A whole world of freelance talent at your fingertips
                </Typography>
                {[{
                    label: 'The best for every budget',
                    text: 'Find high-quality services at every price point. No hourly rates, just project-based pricing.',
                }, {
                    label: 'Quality work done quickly',
                    text: 'Find the right freelancer to begin working on your project within minutes.',
                }, {
                    label: 'Protected payments, every time',
                    text: 'Always know what you will pay upfront. Your payment is not released until you approve the work.',
                }, {
                    label: '24/7 support',
                    text: 'Questions? Our round-the-clock support team is available to help anytime, anywhere.',
                },
                ].map((obj) => <Box mt={3} mb={2}>
                    <Typography fontSize={{ xs: '16px', sm: '22px' }} fontWeight='bold' >
                        <CheckCircleOutlineIcon sx={{ color: 'gray', verticalAlign: 'middle', marginRight: '5px' }} />
                        <span style={{ verticalAlign: 'middle' }}>{obj.label}</span>
                    </Typography>
                    <Typography fontSize={{ xs: '16px', sm: '20px' }} >
                        {obj.text}
                    </Typography>
                </Box>)}

            </Grid>
            <Grid item xs={12} sm={6} mt={{ xs: 5, sm: false }}>
                <img src={videoimg} width='100%' />
            </Grid>
        </Grid>




        {/* explore */}
        <Grid container justifyContent={{ xs: 'center', sm: 'start' }} padding='150px 1.5%'>
            <Grid item xs={12} mb={5}>
                <Typography fontSize={{ xs: '20px', sm: '30px', md: '40px' }}>
                    Explore the marketplace
                </Typography>
            </Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((obj) => <Grid item xs={5} sm={4} md={2} textAlign='center' mt={4} mb={4}>
                <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
                    <Laptop />
                    <Divider sx={{ width: '30%', margin: '10px auto', background: 'gray', height: '1px', '&:hover': { background: 'blue' } }} />
                    <Typography>Graphic Design</Typography>
                </Box>
            </Grid>
            )}
        </Grid>

        <Grid container justifyContent={{ xs: 'center', sm: 'start' }} padding='150px 1.5%' backgroundColor='#0D084D'>
            <Grid item xs={12} >
                <img src={businessimg} width='100%' />
            </Grid>
        </Grid>
        {/* inspirw by freelancers */}
        <Grid container alignItems={'center'} padding='100px 1.5%'>
            <Grid item xs={12} mb={5}>
                <Typography fontSize={{ xs: '20px', sm: '30px', md: '40px' }}>
                    Get inspired with projects <br /> made by our freelancers
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Carousel
                    swipeable
                    draggable
                    responsive={responsive2}
                    infinite={true}
                    autoPlaySpeed={900}
                    autoPlay

                >
                    {[
                        animated,
                        book,
                        illustration,
                        logo,
                        voiceover,
                        wordpress,
                        social,
                        videoimg,
                    ].map((img) => {
                        return (
                            <MediaCard img={img} />
                        );
                    })}
                </Carousel>

            </Grid>
        </Grid>

        {/* guide */}
        <Grid container alignItems={'center'} padding='100px 1.5%'>
            <Grid item xs={12} mb={5}>
                <Typography fontSize={{ xs: '20px', sm: '30px', md: '40px' }}>
                    Guide
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={guide} width={'100%'} />
            </Grid>
        </Grid>

        {/* <img src={Home} alt={Home} width="100%" /> */}

    </Box>
}
