import UserComponent from "./user";
import type { User } from "@/app/types";

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

const UsersPage = async () => {
    const users = await getUsers();

    return (
        users.map((user: User) =>
            <UserComponent user={user} />
        )
    );
}

export default UsersPage;