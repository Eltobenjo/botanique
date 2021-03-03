import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "fixed",
    height:'4rem',
    flexWrap:'wrap',
    alignContent:'flexEnd',
   
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    
  },
 

}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar} >
         <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
               
       

          
       
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/#"
              className={classes.link}
            >
              Recipes
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/#"
              className={classes.link}
            >
              Link2
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/#"
              className={classes.link}
            >
              Link3
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/#"
              className={classes.link}
            >
              Link4
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}