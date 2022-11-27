import React from "react";

function Skills() {
    return (
        <div id="section2">
        <div class="skills">
            <h3>front end</h3>
            <ul>
              <li> CSS </li>
              <li> JavaScript </li>
              <li> Handlebars </li>
              <li> React </li>
              <li> CSS Frameworks </li>
            </ul>
          </div>
          <div class="skills"> 
            <h3>databases</h3>
            <ul>
              <li> MySql </li>
              <li> GraphQL </li>
              <li> MongoDB </li>
              <li> IndexedDB </li>
            </ul>
          </div>
          <div class="skills">
            <h3>back end</h3>
            <ul>
              <li> Express </li>
              <li> Node </li>
              <li> APIs </li>
            </ul>
          </div>
          <div class="skills"> 
            <h3>other</h3>
            <ul>
              <li> Git </li>
            </ul>
          </div>
        </div>
    );
}

export default Skills;