import React from "react";
import AddList from "./AddList";
function Display(){
    return(
        <>
        <div className="container shadow-sm mt-5 p-5 border">
            <h2 className="text-center">TodoInput</h2>
            <AddList/>
        </div>
        </>
    )
}
export default Display;