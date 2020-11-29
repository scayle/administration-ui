import { makeAutoObservable, runInAction } from "mobx";
import { Client } from "../../api";
import { User, UsersQuery } from "../../graphql/types";
import { GET_USERS } from "../../api/operations";

export default class UserListStore {
  private readonly client: Client;
  users: User[] = [];

  constructor(client: Client) {
    makeAutoObservable(this);
    this.client = client;
  }

  reset() {
    this.users = [];
  }

  async load() {
    const users = await this.client.apollo.query<UsersQuery>({
      query: GET_USERS,
    });

    runInAction(() => {
      if (users.data.getAllUsers) {
        this.users = users.data.getAllUsers;
      }
    });
  }
}
