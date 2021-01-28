import React from "react";
import { useStyles } from "./Styles";
import {
    Container,
    Typography,
    Paper,
    Grid,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFieldIcon from "@material-ui/icons/PlayCircleFilled";

const grids = [1, 2, 3, 4, 5, 6, 7, 8];

function Home() {
    const classes = useStyles();
    return (
        <div>
            <main>
                <Paper
                    className={classes.homePost}
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/random)`,
                    }}
                >
                    <Container fixed>
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={7}>
                                <div className={classes.homePostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h4"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Smth become a reality.
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Officia id nostrud exercitation tempor
                                        ad irure velit sit velit in. Aliqua
                                        magna voluptate veniam velit aliquip.
                                        Ipsum deserunt ea ea amet ut fugiat aute
                                        velit veniam occaecat deserunt. Ut sit
                                        nostrud proident aliquip laborum ut nisi
                                        ipsum sint eiusmod reprehenderit
                                        incididunt minim excepteur. Minim dolore
                                        exercitation anim ex.
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Enjoy your way
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            gutterBottom
                            paragraph
                        >
                            Culpa esse excepteur eiusmod velit est ullamco ex
                            esse sint. Officia adipisicing tempor consectetur
                            eiusmod nisi sit excepteur magna et. Ullamco ad et
                            quis consectetur velit. Sunt laborum in ut cillum eu
                            enim laborum. Quis cillum ipsum nostrud fugiat
                            ullamco et mollit qui consequat eu labore consequat
                            aliquip. Non aliquip sit et consectetur ex id.
                            Ullamco eu pariatur aliquip nostrud est non fugiat
                            ipsum nostrud laborum duis dolore sunt. Lorem
                            proident nulla occaecat cupidatat deserunt laboris
                            fugiat dolor excepteur minim. Adipisicing deserunt
                            cillum adipisicing eu ex ea aliquip qui id laboris.
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={5} justify="senter">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Start Now
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Learn More
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={2}>
                        {grids.map((item) => (
                            <Grid item key={item} xs={12} sm={6} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title={item}
                                    />
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography variant="h5" gutterBottom>
                                            Some post
                                        </Typography>
                                        <Typography>
                                            Velit dolor elit occaecat voluptate
                                            consequat aliqua.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <LayerIcon />
                                        <PlayCircleFieldIcon />
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

export default Home;
