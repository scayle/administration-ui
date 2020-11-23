import { makeAutoObservable } from "mobx"
import AuthStore from "./AuthStore";
import React, {createContext, useContext} from "react";
import {Client} from "../../api";

export default class AppStore {
    static Context = createContext<AppStore>(new AppStore())

    readonly client: Client
    readonly authStore: AuthStore

    constructor() {
        makeAutoObservable(this)
        this.client = new Client()
        this.authStore = new AuthStore(this.client)
    }

    static Provider(props: {children: JSX.Element | JSX.Element[]}) {
        return React.createElement(AppStore.Context.Provider, {
            children: props.children,
            value: new AppStore()
        })
    }
}

export function useAppStore() {
    return useContext<AppStore>(AppStore.Context)
}