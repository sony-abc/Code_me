import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';

import './App.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="p1">
      <div className="p2">
        <div className={classes.wrapper}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center">Video Chat</Typography>
          </AppBar>
          <VideoPlayer />
          <Sidebar>
            <Notifications />
          </Sidebar>
        </div>
      </div>

      <div className="p3">
        <div>
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88',
                },
              },
            }}
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/editor/:roomId"
              element={<EditorPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
