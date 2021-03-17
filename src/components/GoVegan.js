import React from "react";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { swaps } from "../data/swapsData.js";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  selectors: {
    flexWrap: "noWrap !important",
    display: "flex",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function GoVegan() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Why Go Vegan ?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Adopting a plant-based diet is the best way to help animals, the
            planet and your health. Not only will you be sparing animals from
            suffering, you will be doing your bit to help reduce our impact on
            the planet. And with such a huge boost in the availability of
            plant-based options, it is no surprise that more and more people are
            choosing to ditch animal products. There really is no downside!
          </Typography>
          <Typography
            component="h1"
            variant="32"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Try some vegan alternatives 
          </Typography>
        </Container>
      </div>
      <div className="selectors">
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={1}>
            {swaps.map((swap) => (
              <Grid item key={swap.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={swap.img}
                    height="450"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {swap.title}
                    </Typography>
                    <Typography>{swap.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      variant="button"
                      color="textPrimary"
                      href={swap.link}
                      className={classes.link}
                    >
                      Explore
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
