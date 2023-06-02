import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Inventory() {
  return (
    <Fragment>
      {/* <a href="shop.html">
        <button type="submit" style={{ cursor: "pointer" }}>
          Adding more items
        </button>
      </a> */}
      <Link to="/shop">
        <button type="submit" style={{ cursor: "pointer" }}>
          Adding more items
        </button>
      </Link>
      <table border="1">
        <tr>
          <th>Item</th>
          <th>Rarity</th>
          <th>Usage</th>
        </tr>
        <tr>
          <td>Avatar-Enchanted Love</td>
          <td>Limited-Rare</td>
          <td>Decorate for player's Avatar</td>
        </tr>
      </table>
      {/* <a href="index_mainpage.html">
        <button type="submit" style={{ cursor: "pointer" }}>
          Return
        </button>
      </a> */}
      <Link to="/mainpage">
        <button type="submit" style={{ cursor: "pointer" }}>
          Return
        </button>
      </Link>
    </Fragment>
  );
}
export default Inventory;
