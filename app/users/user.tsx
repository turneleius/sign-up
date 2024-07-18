import type { User } from "@/app/types";

const UserComponent = ({ user }: { user: User }) => {
    return (
        <div className="m-4 p-4 shadow-lg rounded-md bg-white">
            <span className="text-2xl font-bold">Users</span>
            <div>
                <div><span className="font-bold">Name:</span> {user.name}</div>
                <div><span className="font-bold">Email:</span> {user.email}</div>
                <div><span className="font-bold">Phone:</span> {user.phone}</div>
                <div><span className="font-bold">Username:</span> {user.username}</div>
                <div className="text-xl font-bold">Address</div>
                <div className="ml-3"><span className="font-bold">Street:</span> {user.address.street}</div>
                <div className="ml-3"><span className="font-bold">City:</span> {user.address.city}</div>
                <div className="ml-3"><span className="font-bold">Zipcode:</span> {user.address.zipcode}</div>
                <div><span className="font-bold">Website:</span> {user.website}</div>
            </div>
        </div>
    );
}

export default UserComponent;