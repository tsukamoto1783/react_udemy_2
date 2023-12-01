import { TodoType } from "../types/api/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = true } = props;
    const completeMark = completed ? "[完]" : "[未]";

    return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>
}