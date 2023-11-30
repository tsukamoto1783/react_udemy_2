import React, { memo, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../providers/UserProvider";

export const Page1DetailA = memo(() => {
    const history = useHistory();
    const onClickBack = () => history.goBack();
    // console.log(history);

    const { state } = useLocation();
    // console.log(state);
    const context = useContext(UserContext);
    console.log("Page1DetailA");
    // console.log(context);

    const onClickChange = () => context.setIsUserInfo(!context.isUserInfo);

    return (
        <div>
            <h1>Page1DetailAページです</h1>
            <p>stateは{state}です</p>
            <button onClick={onClickBack}>戻る</button>
            <br />
            <p>Global State</p>
            {context.isUserInfo ? <p>true</p> : <p>false</p>}
            <br />
            <button onClick={onClickChange}>State Change</button>

        </div>
    )
});