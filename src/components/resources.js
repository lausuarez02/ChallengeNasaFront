import React from 'react';
import Container from '@mui/material/Container';
import NavBar from './navBar'


const Resources = () => {
    const data = [{
        link: 'data.com'
    }, {
        link: 'google.com'
    }]
    return(
        <div>
            <NavBar/>
            <h1>Resources</h1>
            
             {data.map((id) => {
                return(
                    <Container fixed>
                    <a key={id.link} target="blank" href={id.link}>
                    {id.link}
                  </a>
                  </Container>

                )

             })}
        </div>
    )
}

export default Resources