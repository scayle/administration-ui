import React, { useEffect } from "react";
import { observer, useLocalStore } from "mobx-react-lite";
import UserListStore from "./UserListStore";
import { useAppStore } from "../../globalStores/AppStore/AppStore";
import UserList from "./UserList/UserList";

interface Props {}

const Users = observer(({}: Props) => {
  const { client } = useAppStore();
  const userListStore = useLocalStore(() => new UserListStore(client));

  useEffect(() => {
    userListStore.load();
    return () => {
      userListStore.reset();
    };
  });

  return <UserList userListStore={userListStore} />;
});

export default Users;
