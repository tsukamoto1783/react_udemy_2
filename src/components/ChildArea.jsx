import { memo } from "react";

const sytle = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
    console.log("ChildAreaがレンダリングされた！！");
    const { isOpen, onClickClose } = props;
    return (
        <>
            {isOpen
                ?
                <div style={sytle}>
                    <h2>ChildAreaコンポーネント</h2>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
                : null
            }
        </>
    );
}
);