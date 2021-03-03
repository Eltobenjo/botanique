import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import breakfast from './images/breakfast.jpg'
import lunch from "./images/lunch.jpg";
import dinner from "./images/dinner.png";
import dessert from "./images/dessert.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
  card:{
    flexDirection:'row',
  }
});

const meals = [
  {
    title: "Breakfast",
    description: "",
    img: breakfast,
  },
  {
    title: "Lunch",
    description: "",
    img: lunch,
  },
  {
    title: "Dinner",
    description: "",
    img: dinner,
  },
  {
    title: "Dessert",
    description: "",
    img: dessert,
  },
];



const Main = () => {
   const classes = useStyles();
   return (
     <Card className={classes.root}>
       {meals.map((meal) => (
         <CardActionArea>
           <CardMedia className={classes.media} image={meal.img} title="" />

           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {meal.title}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
             </Typography>
           </CardContent>
         </CardActionArea>
       ))}
       <CardActions>
         <Button size="small" color="primary">
           Share
         </Button>
         <Button size="small" color="primary">
           Learn More
         </Button>
       </CardActions>
     </Card>
   );
          }
  
  

export default Main
