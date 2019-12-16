/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};

export type Election = {
  __typename?: "Election";
  id: Scalars["ID"];
  idSecretary: Scalars["String"];
  censusFile: Scalars["String"];
  tableMember: Scalars["Int"];
  startTime: Scalars["DateTime"];
  endTime: Scalars["DateTime"];
  correctVote: Scalars["Boolean"];
  candidate: Array<Scalars["String"]>;
  electionsAnswers: Array<Scalars["Int"]>;
  voteOtherGroup: Scalars["Boolean"];
  nVotes: Scalars["Int"];
  votesAnswers: Array<Scalars["Int"]>;
};

export type ElectionInput = {
  candidate: Array<Scalars["String"]>;
  electionsAnswers: Array<Scalars["Int"]>;
  voteOtherGroup: Scalars["Boolean"];
  nVotes: Scalars["Int"];
  votesAnswers: Array<Scalars["Int"]>;
};

export type ElectoralProcess = Election | Poll;

export type LoginInput = {
  uid: Scalars["String"];
  password: Scalars["String"];
};

export type LoginPayload = {
  __typename?: "LoginPayload";
  accessToken: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createRole: Role;
  login: LoginPayload;
  createPoll: Poll;
  createElection: Election;
};

export type MutationCreateRoleArgs = {
  input: RoleInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationCreatePollArgs = {
  input: PollInput;
};

export type MutationCreateElectionArgs = {
  input: ElectionInput;
};

export type Poll = {
  __typename?: "Poll";
  id: Scalars["ID"];
  idSecretary: Scalars["String"];
  censusFile: Scalars["String"];
  tableMember: Scalars["Int"];
  startTime: Scalars["DateTime"];
  endTime: Scalars["DateTime"];
  correctVote: Scalars["Boolean"];
  question: Scalars["String"];
  answers: Array<Scalars["String"]>;
  presencial: Scalars["Boolean"];
  canEdit: Scalars["Boolean"];
  isSecret: Scalars["Boolean"];
  votesAnswer: Array<Scalars["Int"]>;
};

export type PollInput = {
  question: Scalars["String"];
  answers: Array<Scalars["String"]>;
  presencial: Scalars["Boolean"];
  canEdit: Scalars["Boolean"];
  isSecret: Scalars["Boolean"];
  votesAnswer: Array<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  roles: Array<Role>;
  role: Role;
  users: Array<User>;
  user: User;
  me: User;
  polls: Array<Poll>;
  poll: Poll;
  elections: Array<Election>;
  election: Election;
  electoralprocesses: Array<ElectoralProcess>;
  electoralprocess: Array<ElectoralProcess>;
  isLoggedIn: Scalars["Boolean"];
};

export type QueryRoleArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryPollArgs = {
  id: Scalars["ID"];
};

export type QueryElectionArgs = {
  id: Scalars["ID"];
};

export type QueryElectoralprocessArgs = {
  id: Scalars["ID"];
};

export type Role = {
  __typename?: "Role";
  id: Scalars["ID"];
  name: Scalars["String"];
  users: Array<User>;
};

export type RoleInput = {
  name: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  uid: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles?: Maybe<Array<Role>>;
};

export type ElectionNameQueryVariables = {};

export type ElectionNameQuery = {
  __typename?: "Query";
  elections: Array<{
    __typename?: "Election";
    idSecretary: string;
    censusFile: string;
    startTime: string;
    endTime: string;
  }>;
};

export type LogInMutationVariables = {
  input: LoginInput;
};

export type LogInMutation = {
  __typename?: "Mutation";
  login: { __typename?: "LoginPayload"; accessToken: string };
};

export const ElectionNameDocument = gql`
  query electionName {
    elections {
      idSecretary
      censusFile
      startTime
      endTime
    }
  }
`;
export function useElectionNameQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectionNameQuery,
    ElectionNameQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ElectionNameQuery,
    ElectionNameQueryVariables
  >(ElectionNameDocument, baseOptions);
}
export function useElectionNameLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectionNameQuery,
    ElectionNameQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ElectionNameQuery,
    ElectionNameQueryVariables
  >(ElectionNameDocument, baseOptions);
}
export type ElectionNameQueryHookResult = ReturnType<
  typeof useElectionNameQuery
>;
export type ElectionNameLazyQueryHookResult = ReturnType<
  typeof useElectionNameLazyQuery
>;
export type ElectionNameQueryResult = ApolloReactCommon.QueryResult<
  ElectionNameQuery,
  ElectionNameQueryVariables
>;
export const LogInDocument = gql`
  mutation LogIn($input: LoginInput!) {
    login(input: $input) {
      accessToken
    }
  }
`;
export type LogInMutationFn = ApolloReactCommon.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>;
export function useLogInMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogInMutation,
    LogInMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    baseOptions
  );
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = ApolloReactCommon.MutationResult<
  LogInMutation
>;
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>;
