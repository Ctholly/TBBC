import { AppBar, Button, createMuiTheme, IconButton, makeStyles, Toolbar, Typography, ThemeProvider, Snackbar } from '@material-ui/core'
import React from 'react';
import './App.css';
import LogoFPI from './hehe.jpg';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});


function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={LogoFPI} alt="logo" height='91' />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              EF V AI
        </Typography>
            <Button onClick={handleClick} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success">
    This is a success message!
    </Alert>
  </Snackbar>
    </ThemeProvider>

  );
}

export default App;
