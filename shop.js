import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Shop(){
    return(
        <Fragment>
          <div className="tab">
         <button className="tablinks" onclick="openShop(event, 'Avatar')" id="defaultOpen">Avatar</button>
        <script>
            document.getElementById("defaultOpen").click();
        </script>
        <button className="tablinks" onclick="openShop(event, 'Frames')">Frames</button>
        <button className="tablinks" onclick="openShop(event, 'Currency')">Currency</button>
        <button className="tablinks" onclick="openShop(event, 'Background')">Background</button>
        <button className="tablinks" onclick="openShop(event, 'Limited Items')">Limited Items</button> 
    </div>

    <div id="Avatar" className="tabcontent">
        <table border="1">
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Unit Count</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Enchanted Love Avatar</td>
                <td>Love is in the air ~~~~</td>
                <td>1</td>
                <td>30000 gold</td>
            </tr>
        </table>
    </div>
    <div id="Frames" className="tabcontent">
        <table border="1">
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Unit Count</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Enchanted Love Frames</td>
                <td>Love is in the air ~~~~</td>
                <td>1</td>
                <td>30000 gold</td>
            </tr>
        </table>
    </div>
    <div id="Currency" className="tabcontent">
        <table border="1">
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Unit Count</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Simple Love</td>
                <td>Small Packages contains small love: 300 Gems and 1 Special Avatar</td>
                <td>1</td>
                <td>120000VND</td>
            </tr>
        </table>
    </div>
    <div id="Background" className="tabcontent">
        <table border="1">
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Unit Count</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Enchanted Love Background</td>
                <td>Love is in the air ~~~~</td>
                <td>1</td>
                <td>30000 gold</td>
            </tr>
        </table>
    </div>
    <div id="Limited Items" className="tabcontent">
        <table border="1">
            <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Unit Count</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Bullet Waiting For Me Frames</td>
                <td>Admist the echos of hope through the seekers of justice</td>
                <td>1</td>
                <td>30000 gold</td>
            </tr>
        </table>
        
    </div>
    <button>Add Item</button>
    {/* <a href="index_mainpage.html">
        <button type="submit">Return</button>
    </a> */}
    <Link to='/mainpage'>
        <button>Return</button>
    </Link>
        </Fragment>
    );
}
export default Shop;
// function openShop(evt, shopName){
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByclassName("tabcontent");
//   for(i=0; i< tabcontent.length; i++)
//   {
//       tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByclassName("tablinks");
//   for(i=0; i<tablinks.length;i++)
//   {
//       tablinks[i].className = tablinks[i].className.replace(" active","");
//   }

//   document.getElementById(shopName).style.display = "block";
//   evt.currentTarget.className += "active";

// }