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
  createUser: CreateUserResponse;
  login: LoginUserResponse;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  newUser: NewUser;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updatedUser: UpdateUser;
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
  isAdmin: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getAllUsers: Array<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type NewUser = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
};

export type UpdateUser = {
  id: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginUserResponse' }
    & Pick<LoginUserResponse, 'id' | 'token'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserResponse' }
    & Pick<CreateUserResponse, 'id'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserResponse' }
    & Pick<CreateUserResponse, 'id'>
  ) }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'isAdmin'>
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'isAdmin'>
  )> }
);
