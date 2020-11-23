import {makeAutoObservable, runInAction} from "mobx";
import {MutationLoginArgs} from "../../graphql/types";
import {Client} from "../../api";
import {LOGIN} from "../../api/operations";

export default class AuthStore {
    private readonly client: Client

    isLoggedIn: boolean = false
    id: string = ""

    constructor(client: Client) {
        makeAutoObservable(this)
        this.client = client
    }

    async login(loginData: MutationLoginArgs) {
        const authData = await this.client.apollo.mutate({
            mutation: LOGIN,
            variables: loginData
        })

        if (authData.data?.login.token) {
            this.client.setToken(authData.data.login.token)

            runInAction(() => {
                this.isLoggedIn = true
                this.id = authData.data.login.token
            })
        }
    }
}