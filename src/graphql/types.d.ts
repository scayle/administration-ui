export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  id: Scalars['ID'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginUserResponse;
  user: CreateUserResponse;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserArgs = {
  newUser: NewUser;
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type NewUser = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
};
