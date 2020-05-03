import { Divider, Grid, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export default (props) => {

    const linkDataSet = [
        // firstSection
        {
            title: 'Catagories',
            links: [
                { subTitle: 'Graphics & Design', routeLink: '/', },
                { subTitle: 'Digital Marketing', routeLink: '/', },
                { subTitle: 'Writing & Translation', routeLink: '/', },
                { subTitle: 'Video & Animation', routeLink: '/', },
                { subTitle: 'Music & Audio', routeLink: '/', },
                { subTitle: 'Programming & Tech', routeLink: '/', },
                { subTitle: 'Data', routeLink: '/', },
                { subTitle: 'Business', routeLink: '/', },
                { subTitle: 'Lifestyle', routeLink: '/', },
                { subTitle: 'Sitemap', routeLink: '/', },
            ]
        },
        // secondSection
        {
            title: 'About',
            links: [
                { subTitle: 'Careers', routeLink: '/', },
                { subTitle: 'Press & News', routeLink: '/', },
                { subTitle: 'Partnerships', routeLink: '/', },
                { subTitle: 'Privacy Policy', routeLink: '/', },
                { subTitle: 'Terms of Service', routeLink: '/', },
                { subTitle: 'Intellectual Property Claims', routeLink: '/', },
                { subTitle: 'Investor Relations', routeLink: '/', },
            ]
        },
        // thirdSection
        {
            title: 'Support',
            links: [
                { subTitle: 'Help & Support', routeLink: '/', },
                { subTitle: 'Trust & Safety', routeLink: '/', },
                { subTitle: 'Selling on Fiverr', routeLink: '/', },
                { subTitle: 'Buying on Fiverr', routeLink: '/', },
            ]
        },
        // fourthSection
        {
            title: 'Community',
            links: [
                { subTitle: 'Events', routeLink: '/', },
                { subTitle: 'Blog', routeLink: '/', },
                { subTitle: 'Forum', routeLink: '/', },
                { subTitle: 'Community Standards', routeLink: '/', },
                { subTitle: 'Podcast', routeLink: '/', },
                { subTitle: 'Affiliates', routeLink: '/', },
                { subTitle: 'Invite a Friend', routeLink: '/', },
                { subTitle: 'Become a Seller', routeLink: '/', },
            ]
        },
        // fifthSection
        {
            title: 'More From Fiverr',
            links: [
                { subTitle: 'Fiverr Pro', routeLink: '/', },
                { subTitle: 'Fiverr Studios', routeLink: '/', },
                { subTitle: 'Fiverr Logo Maker', routeLink: '/', },
                { subTitle: 'Fiverr Guides', routeLink: '/', },
                { subTitle: 'Get Inspired', routeLink: '/', },
                { subTitle: 'ClearVoice', routeLink: '/', },
                { subTitle: 'Fiverr Workspace', routeLink: '/', },
                { subTitle: 'Learn Courses', routeLink: '/', },
                { subTitle: 'Working Not Working', routeLink: '/', },
            ]
        },
    ]

    return <Box mt={5}>
        <Divider />
        <Grid container justifyContent={{xs:'center'}} margin='40px auto auto auto'>
            {
                linkDataSet.map((section) => <Grid item xs={4} sm={2} mt={{xs:4 , sm:false}}>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <Typography fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }} color={'#7A7D85'} sx={{ fontFamily: 'Helvetica', fontWeight: 'bold' }}> {section.title} </Typography>
                            </ListItemText>
                        </ListItem>
                        {
                            section.links.map((subSection) => <ListItem>
                                <ListItemText>
                                    {/* <Typography fontSize='16px' color={'#7A7D85'}> <Link to={subSection.routeLink}> {subSection.subTitle}  </Link></Typography> */}
                                    <Typography fontSize={{ xs: 10, sm: 12, md: 14, lg: 16 }} color={'#7A7D85'} sx={{ '&:hover': { textDecoration: 'underline' } }}> <a href={'#'} style={{ textDecoration: 'none', color: 'inherit', '&:hover': { textDecoration: 'underline' } }}> {subSection.subTitle}  </a></Typography>
                                </ListItemText>
                            </ListItem>)
                        }

                    </List>
                </Grid>)
            }

        </Grid>
    </Box>

}
