import React from 'react';
import './SidepanelSubnav.css';
import { ProjectsIcon, NotificationsIcon, SearchesIcon, FavoritesIcon, SettingsIcon, MyDocumentsIcon, AboutIcon } from "./SidepanelSubnavIcons/SidepanelSubnavIcons";


const SidepanelSubnav = () => {
    return (
        <div class="sub-navbar--container">
            <div class="subnav">
                <button class="subnavbtn">
                    <span>My Documents</span>
                    <MyDocumentsIcon />
                </button>
                <div class="subnav-content">
                    <a href="#link1">Link 1</a>
                    <a href="#link2">Link 2</a>
                    <a href="#link3">Link 3</a>
                    <a href="#link4">Link 4</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>Projects</span>
                    <ProjectsIcon />
                </button>
                <div class="subnav-content">
                    <a href="#company">Goldfinger</a>
                    <a href="#team">Dr No</a>
                    <a href="#careers">Dye Another Day</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>Notifications</span>
                    <NotificationsIcon />
                </button>
                <div class="subnav-content">
                    <a href="#bring">Downtown Brooklyn</a>
                    <a href="#deliver">240 Sixth Ave</a>
                    <a href="#package">Q3 FY24 Foreclosures</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>Searches</span>
                    <SearchesIcon />
                </button>
                <div class="subnav-content">
                    <a href="#link1">Link 1</a>
                    <a href="#link2">Link 2</a>
                    <a href="#link3">Link 3</a>
                    <a href="#link4">Link 4</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>Favorites</span>
                    <FavoritesIcon />
                </button>
                <div class="subnav-content">
                    <a href="#link1">ALL</a>
                    <a href="#link2">DOCUMENT ID</a>
                    <a href="#link3">DOCMENT TYPE</a>
                    <a href="#link3">PROPERTY BBL</a>
                    <a href="#link4">PROPERTY TYPE</a>
                    <a href="#link4">PARTY NAMES</a>
                    <a href="#link4">PARTY TYPES</a>
                    <a href="#link4">PARTY ADDRESSES</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>Settings</span>
                    <SettingsIcon />
                </button>
                <div class="subnav-content">
                    <a href="#link1">Link 1</a>
                    <a href="#link2">Link 2</a>
                    <a href="#link3">Link 3</a>
                    <a href="#link4">Link 4</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">
                    <span>About</span>
                    <AboutIcon />
                </button>
                <div class="subnav-content">
                    <a href="#link1">Real Property Master</a>
                    <a href="#link2">Real Property Legals</a>
                    <a href="#link3">Real Property Parties</a>
                    <a href="#link4">Real Property References</a>
                    <a href="#link4">Real Property Remarks</a>
                </div>
            </div>
        </div>
    )
}

export default SidepanelSubnav