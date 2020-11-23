import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";

export class Client {
  apollo: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.apollo = new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:8080/v1",
      }),
      cache: new InMemoryCache(),
    });
  }

  public setToken(authToken: string) {
    this.apollo.setLink(
      new HttpLink({
        uri: process.env.GATEWAY_HOST,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    );
  }
}
