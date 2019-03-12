import React from "react";
import BountyForm from "../Components/BountyForm";
import { FirebaseContext } from '../Components/Firebase';

function Create() {
    return (
        <div>
            <FirebaseContext.Consumer>
                {firebase => <BountyForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        </div>
    );
}


export default Create;
