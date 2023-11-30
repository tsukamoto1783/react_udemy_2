import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    // 分割代入でserchを取得
    const { search } = useLocation();

    const query = new URLSearchParams(search);
    console.log(query);

    return (
        <div>
            <h1>UrlParameterページです</h1>
            <p>パラメータは{id}です</p>
            <p>クエリパラメータは{query.get("name")}です</p>
        </div>
    )
};

