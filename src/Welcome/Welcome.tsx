import React from 'react';
import "./Welcome.css";

interface props{
    name: string,
}

export const Welcome = (props:props)=>{
    return (
        <div className="welcomeMessage">
            Welcome, {props.name}!!
        </div>
    )
}