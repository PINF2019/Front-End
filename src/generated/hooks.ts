/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import { gql } from '@apollo/client'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type LoginInput = {
  uid: Scalars['String']
  password: Scalars['String']
}

export type LoginPayload = {
  __typename?: 'LoginPayload'
  accessToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  login: LoginPayload
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
  user: User
  me: User
  isLoggedIn: Scalars['Boolean']
}

export type QueryUserArgs = {
  uid: Scalars['ID']
}

export type User = {
  __typename?: 'User'
  uid: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type LogInMutationVariables = {
  input: LoginInput
}

export type LogInMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'LoginPayload'; accessToken: string }
}

export const LogInDocument = gql`
  mutation LogIn($input: LoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
`
export type LogInMutationFn = ApolloReactCommon.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>
export function useLogInMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    baseOptions
  )
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>
export type LogInMutationResult = ApolloReactCommon.MutationResult<
  LogInMutation
>
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>
