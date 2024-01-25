import React from 'react';
import "./NavBar.css";
import {Icon} from "@shopify/polaris";
import {CaretDownIcon, PersonIcon, SettingsIcon, SearchIcon} from "@shopify/polaris-icons";

interface props{
    name: string,
};

const TabinNavBar = (props:props)=>{

    return(
        <div className="tabInNavBarMain">
           {props.name}
        </div>
    )
}

const OtherSide = ()=>{
    return(
        <div className="otherSide">
            <div className="search" style={{display:"flex", height:"20px", width:"120px", borderBottom:"1px solid #4A4A4A", gap:"8px",padding:"0px 2px 4px 2px"}}>
            <div style={{height:"20px", width:"20px"}}><Icon source={SearchIcon}></Icon></div> Search
            </div>
            <div className="account" style={{display:"flex", height:"20px", width:"82px", gap:"4px",padding:"2px 0px",fontWeight:"650", fontSize:"13px"}}>
            <div style={{height:"20px", width:"20px"}}><Icon source={PersonIcon}></Icon></div> Account
            </div>
            <div className="settings" style={{display:"flex", height:"20px", width:"82px", gap:"4px",padding:"2px 0px",fontWeight:"650", fontSize:"13px"}}>
            <div style={{height:"20px", width:"20px"}}><Icon source={SettingsIcon}></Icon></div> Settings
            </div>
        </div>
    )
}

export const NavBar = () =>{
    return (
        <div className="navBarMain">
            
        
            <div className="tagBar">
                <TabinNavBar name="Home"></TabinNavBar>
                <TabinNavBar name="Orders"></TabinNavBar>
                <TabinNavBar name="Integration"></TabinNavBar>
                <div className="tabInNavBarMain" style={{display:"flex"}}>Tracking Page <div style={{height:"20px", width:"20px"}}><Icon source={CaretDownIcon}></Icon></div></div>
                <TabinNavBar name="Partner with Us"></TabinNavBar>
            </div>
            <OtherSide></OtherSide>
        </div>
    );
};