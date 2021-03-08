import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";

export let useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));
export let NavDialogs = function ButtonAppBar() {
   let classes = useStyles;
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
               </IconButton>
               <Typography variant="h7" className={classes.title}>
                  Messages
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   );
}