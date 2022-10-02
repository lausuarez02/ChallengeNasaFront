import React from 'react';
import NavBar from './navBar'

const Info = () => {
    const data = [
        {
            "question": "Test"
        },
        {
            "question": "Test"
        }

    ]
    return(
        <div>
            <NavBar/>
            <h1>Info</h1>
            <ul>
                {
                    data.map((id) => {
                        return(
                            <li key={id}>
                                {id.question}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Info