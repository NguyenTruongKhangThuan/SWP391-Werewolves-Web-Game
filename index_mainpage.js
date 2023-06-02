import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
function Mainpage(){
    return(
        <Fragment>
          <h1>Welcome to the game</h1>
    <div class="activities">
        {/* <a href="inventory.js"><button type="submit">Inventory</button></a>
        <a href="mission.js"><button type="submit">Mission</button></a>
        <a href="shop.js"><button type="submit">Shop</button></a>
        <a href="game.js"><button type="submit">Play</button></a>
        <a href="info.js"><button type="submit">Account</button></a> */}
        <Link to="/inventory"><button type="submit">Inventory</button></Link>
        <Link to="/mission"><button type="submit">Mission</button></Link>
        <Link to="/shop"><button type="submit">Shop</button></Link>
        <Link to="/game"><button type="submit">Play</button></Link>
        <Link to="/info"><button type="submit">Account</button></Link>
    </div>
        </Fragment>
    );
}
export default Mainpage;