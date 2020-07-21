import React from "react";
import {Link,Route ,Switch } from "react-router-dom";
import Tag1 from "./Tag1";
import Tag2 from "./Tag2";
import Tag3 from "./Tag3";
const Root = ()=> {
    return(
        <div>
            <strong>
                
            </strong>
            <div>
            <Link to="/">Tag1</Link>
            </div>
            <div>
            <Link to="/1">Tag2</Link>
            </div>
            <div>
            <Link to="/2">Tag2</Link>
            </div>
            <Switch>
            <Route component={Tag3}   path="/2" />
            <Route component={Tag2}   path="/1" />
            <Route component={Tag1}   path="/" />
           
            
            </Switch>
        </div>
    );
};

export default Root;