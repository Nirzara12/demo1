import React from 'react';
import {useparams} from "react-router-dom";
export default function UserPage(){
    let {id} = useParams();
    return(
        <>
        <h1>User page</h1>
        <p>This is UserPage Subtitle</p>
        </>
    )
}