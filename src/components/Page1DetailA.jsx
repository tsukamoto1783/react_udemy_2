import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Page1DetailA = () => {
    const history = useHistory();
    const onClickBack = () => history.goBack();
    console.log(history);

    const { state } = useLocation();
    // console.log(state);
    return (
        <div>
            <h1>Page1DetailAページです</h1>
            <p>stateは{state}です</p>
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
};