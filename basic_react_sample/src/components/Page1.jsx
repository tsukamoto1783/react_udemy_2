import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
    const history = useHistory();
    const onClickDetailA = () => history.push("/page1/detailA");

    console.log("Page1");
    return (
        <div>
            <h1>Page1ページです</h1>
            {/* <Link to="/page1/detailA">DetailA</Link> */}

            <Link to={{ pathname: "/page1/detailA", state: "hogehoge" }}>DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA</button>
        </div >
    )
};
