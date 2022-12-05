import {
    QueryListOfUsers,
    QueryUserById,
    DeleteUserById
} from "../service/UserTable";

export const GetAllUsers = (res, req) => {
    const userList = QueryListOfUsers();
    return res.json(userList);
}

export const GetUser = (res, req) => {
    const userId = req.params.id;
    const user = QueryUserById(userId);
    return res.json(user);
}

export const DeleteUser = (res, req) => {
    const userId = req.params.id;
    const user = DeleteUserById(userId);
    return res.json(user);
}

