import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Gamepage(){
    return(
        <Fragment>
          <div className="row-1">
        <div className="box-1">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 01</h3>
            <p>Level 10</p>
        </div>
        <div className="box-4">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 04</h3>
            <p>Level 9</p>
        </div>
        <div className="box-6">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 06</h3>
            <p>Level 7</p>
        </div>
    </div>
    <div className="row-2">
        <div className="box-2">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 02</h3>
            <p>Level 15</p>
        </div>
        <div className="box-settings">
            <h3>Room ID: 123456</h3>
            <h3>Room Status: Public</h3>
        </div>
        <div className="box-7">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 07</h3>
            <p>Level 12</p>
        </div>
    </div>
    <div className="row-3">
        <div className="box-3">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 03</h3>
            <p>Level 6</p>
        </div>
        
        <div className="box-5">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 05</h3>
            <p>Level 2</p>
        </div>
        <div className="box-8">
            <img src="./assets/desktop-wallpaper-69318-anime-forum-avatars-cool-profile-anime.jpg" alt="avatar-1"/>
            <h3>User 08</h3>
            <p>Level 6</p>
        </div>
    </div>
    <div className="match-buttons">
        <div className="cancel-button">
            {/* <a href="index_mainpage.html">
                <button type="submit">Cancel Game</button>
            </a> */}
            <Link to='/game'>
                <button>Cancel</button>
            </Link>
        </div>
        <div className="start-button">
            {/* <a href="gamebegin.html">
                <button type="submit">Start Game</button>
            </a> */}
            <Link to='/gamebegin'>
                <button>Start game</button>
            </Link>
        </div>
        {/* <a href="setting.html">
            <button type="submit">Settings</button>
        </a> */}
        <Link to='/setting'>
            <button>Setting</button>
        </Link>
    </div>
        </Fragment>
    );
}
export default Gamepage;
