import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Game(){
    return(
        <Fragment>
          <h1>Select a Game Mode to begin</h1>
    <table>
        <tr>
            <td>
                {/* <a href="gamepage.html">
                    <button type="submit" style={{ cursor: "pointer" }}>Create a Game</button>
                </a> */}
                <Link to="/gamepage">
                <button type="submit" style={{ cursor: "pointer" }}>Create a Game</button>
                </Link>
            </td>
            <td>
                {/* <a href="entergame.html">
                    <button type="submit" style={{ cursor: "pointer" }}>Enter a Game</button>
                </a> */}
                <Link to="/entergame">
                <button type="submit" style={{ cursor: "pointer" }}>Enter a Game</button>
                </Link>
            </td>
            <td>
                {/* <a href="entergame.html">
                    <button type="submit" style={{ cursor: "pointer" }}>Enter a Game</button>
                </a> */}
                <Link to="/mainpage">
                <button type="submit" style={{ cursor: "pointer" }}>Return to lobby</button>
                </Link>
            </td>
        </tr>
    </table>
        </Fragment>
    );
}

export default Game;