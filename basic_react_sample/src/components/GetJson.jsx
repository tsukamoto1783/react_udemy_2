import axios from "axios";

export const GetJson = () => {
    const onClickUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onClickUser1 = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (
        <>
            <h1>Get Json Page</h1>
            <button onClick={onClickUsers}>Users</button>
            <br />
            <button onClick={onClickUser1}>User1</button>
        </>
    )

};