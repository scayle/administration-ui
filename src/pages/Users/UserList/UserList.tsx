import { observer } from "mobx-react-lite";
import UserListStore from "../UserListStore";
import React from "react";

interface Props {
  userListStore: UserListStore;
}

const UserList = observer(({ userListStore }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>IsAdmin</th>
        </tr>
      </thead>
      <tbody>
        {userListStore.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "✓" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default UserList;
