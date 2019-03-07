import React from "react";
import BountyTitleForm from "../Components/BountyTitleForm";
import BountyLocationForm from "../Components/BountyLocationForm";
import BountyInfoForm from "../Components/BountyInfoForm";
import BountyRewardForm from "../Components/BountyRewardForm";

function Create() {
    return (
        <div>
            <BountyTitleForm></BountyTitleForm>
            <BountyInfoForm></BountyInfoForm>
            <BountyRewardForm></BountyRewardForm>
            <BountyLocationForm></BountyLocationForm>
        </div>
    );
}


export default Create;
