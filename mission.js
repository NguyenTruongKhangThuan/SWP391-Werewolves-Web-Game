import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Mission(){
    return(
        <Fragment>
          <h2>Missions</h2>
    <table border="1">
        <tr>
            <th>Mission</th>
            <th>Reward</th>
            <th>Completion State</th>
        </tr>
        <tr>
            <td>
                <h3>Tutorial_Mission 1_Red Light!</h3>
                <p>Getting caught as a Werewolf</p>
            </td>
            <td>30000 Golds</td>
            <td>Not yet</td>
        </tr>
        <tr>
            <td>
                <h3>Tutorial_Mission 1_Save my Maison!</h3>
                <p>As one of the remaining villagers, caught all of the Werewolves.</p>
            </td>
            <td>100 Diamonds</td>
            <td>Not yet</td>
        </tr>
    </table>
    {/* <a href="index_mainpage.html">
        <button type="submit" style={{cursor: "pointer"}}>Return</button>
    </a> */}
    <Link to="/mainpage">
    <button type="submit" style={{cursor: "pointer"}}>Return</button>
    </Link>
        </Fragment>
    );
}
export default Mission;