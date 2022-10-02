import React from 'react';
//components
import NavBar from './navBar'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import {Link} from "react-router-dom";


const Home = () => {
    return(
        <Container style={{backgoundColor: '#cfe8fc', height: '100vh' }} sx={{bgcolor:'#cfe8fc'}}>
            <NavBar/>
              <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', bgcolor:'#cfe8fc'  }}
        style={{backgoundColor: '#cfe8fc'}}
      >
            <Paper sx={{ maxWidth: 936, margin: '20px', overflow: 'hidden' }}>
            <Link to="/Quiz" style={{textDecoration: 'none', width: '100%', height:"100px",}}>
                <Button  variant="contained" sx={{ mr: 1 }} style={{width: '100%', height:"100px"}}>
                
            Start Quiz              
                </Button>
                </Link>
            
            </Paper>
            </AppBar>
        </Container>
    )
}

export default Home;