import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterElement from '../twitter-element/twitter-element';

const HomePage = () => {
    const latestPostTitle: String = 'Blog Post Title';
    const latestPostText: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci tortor, sollicitudin nec mattis quis.';


    return (
        <>
            <div className="App">

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <section>
                            <h2>Latest Post</h2>

                            <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {latestPostTitle}
                                </Typography>
                                
                                <Typography variant="body1">
                                    {latestPostText}
                                </Typography>
                            </CardContent>

                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </Card>
                        </section>
                    </Grid>

                    <Grid container item spacing={2}>
                        <Grid item xs={6}>
                            <section>
                                <TwitterElement />
                            </section>
                        </Grid>
                        <Grid item xs={6}>
                            <section>
                                <h3>Featured Lineup</h3>
                                <Card>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Donec id massa tincidunt, auctor velit a, laoreet justo.</li>
                                        <li>Curabitur quis felis nec tellus tincidunt semper.</li>
                                        <li>Mauris pretium risus et mi malesuada, eget scelerisque metus hendrerit.</li>
                                        <li>Praesent cursus orci vulputate aliquet aliquet.</li>
                                        <li>Morbi id nulla ac nisi elementum tincidunt ultrices eget massa.</li>
                                        <li>Integer non metus quis nibh tincidunt condimentum at nec neque.</li>
                                        <li>Phasellus vitae turpis pretium, tempor magna eu, cursus magna.</li>
                                        <li>Cras ornare massa eget quam lobortis sollicitudin.</li>
                                        <li>Fusce nec risus vitae sapien vehicula aliquam.</li>
                                        <li>Ut quis metus id elit elementum blandit ut vitae nisl.</li>
                                        <li>Curabitur id dui in sem condimentum tristique eu eget lacus.</li>
                                        <li>Vestibulum consequat dolor eget massa sollicitudin, non hendrerit metus porttitor.</li>
                                        <li>Nam euismod massa vel hendrerit tristique.</li>
                                        <li>Nam sed justo eleifend, sagittis nibh eu, placerat eros.</li>
                                        <li>Suspendisse eu ligula rhoncus, pellentesque dui eu, hendrerit odio.</li>
                                        <li>Donec sit amet odio et turpis egestas eleifend.</li>
                                        <li>Sed consequat odio in facilisis ultrices.</li>
                                        <li>Donec eu mauris lobortis, semper felis nec, imperdiet enim.</li>
                                        <li>Duis pharetra nisi sed quam elementum ullamcorper.</li>
                                    </ul>
                                </Card>
                            </section>
                        </Grid>
                    </Grid>
                    
                </Grid>

                
            

                <Outlet />
            </div>
        </>
    );
};

export default HomePage;
