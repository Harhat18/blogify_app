import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
const useStyles = makeStyles()((theme) => {
  return {
    root: {
      flexgrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(3),
    },
  };
});

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { classes } = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.container}
              color="inherit"
            />
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <a href="hhtp://localhost:3000/posts"> blogify</a>
            </Typography>

            <Button color="primary" variant="outlined" startIcon={<EditIcon />}>
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12}>
            <Router>
              <Routes>
                <Route exact path="/posts" element={<PostsList />} />
              </Routes>
              <Navigate from="/" to="/posts" />
            </Router>
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
