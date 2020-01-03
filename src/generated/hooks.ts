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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Candidate = {
  __typename?: "Candidate";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  about?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
};

export type CandidateInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  about?: Maybe<Scalars["String"]>;
};

export type Census = {
  __typename?: "Census";
  id: Scalars["ID"];
  group: Scalars["String"];
  date: Scalars["DateTime"];
  location: Scalars["String"];
  voters: Array<Voter>;
};

export type CensusInput = {
  group: Scalars["String"];
  date: Scalars["DateTime"];
  location: Scalars["String"];
  file: Scalars["String"];
};

export type Election = {
  __typename?: "Election";
  id: Scalars["ID"];
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  candidates: Array<Candidate>;
  results: Array<ElectionResults>;
  censuses: Array<Census>;
};

export type ElectionInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  censuses: Array<CensusInput>;
  candidates: Array<CandidateInput>;
};

export type ElectionResults = {
  __typename?: "ElectionResults";
  id: Scalars["ID"];
  votes: Scalars["Int"];
  candidate: Candidate;
  group: Scalars["String"];
  location: Scalars["String"];
};

export type ElectoralProcess = Election | Poll;

export type File = {
  __typename?: "File";
  name: Scalars["String"];
};

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
  login: LoginPayload;
  createElection: Election;
  voteOnElection: Scalars["Boolean"];
  uploadFile: File;
  createPoll: Poll;
  voteOnPoll: Scalars["Boolean"];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationCreateElectionArgs = {
  input: ElectionInput;
};

export type MutationVoteOnElectionArgs = {
  input: VoteElectionInput;
};

export type MutationUploadFileArgs = {
  file: Scalars["Upload"];
};

export type MutationCreatePollArgs = {
  input: PollInput;
};

export type MutationVoteOnPollArgs = {
  input: VotePollInput;
};

export type Poll = {
  __typename?: "Poll";
  id: Scalars["ID"];
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  question: Scalars["String"];
  options: Array<PollOption>;
  censuses: Array<Census>;
  results: Array<PollResults>;
};

export type PollInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  censuses: Array<CensusInput>;
  question: Scalars["String"];
  options: Array<Scalars["String"]>;
};

export type PollOption = {
  __typename?: "PollOption";
  id: Scalars["ID"];
  text: Scalars["String"];
};

export type PollResults = {
  __typename?: "PollResults";
  id: Scalars["ID"];
  votes: Scalars["Int"];
  option: PollOption;
  group: Scalars["String"];
  location: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user: User;
  me: User;
  candidates: Array<Candidate>;
  candidate: Candidate;
  electoralProcesses: Array<ElectoralProcess>;
  electoralProcess: ElectoralProcess;
  /** Devuelve aquellos procesos electorales que aún no han sido iniciados */
  futureElectoralProcesses: Array<ElectoralProcess>;
  /** Devuelve aquellos procesos electorales que han sido finalizados */
  pastElectoralProcesses: Array<ElectoralProcess>;
  elections: Array<Election>;
  pendingElections: Array<Election>;
  election: Election;
  census: Census;
  censuses: Array<Census>;
  polls: Array<Poll>;
  poll: Poll;
  isLoggedIn: Scalars["Boolean"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryCandidateArgs = {
  id: Scalars["ID"];
};

export type QueryElectoralProcessArgs = {
  id: Scalars["ID"];
};

export type QueryElectionArgs = {
  id: Scalars["ID"];
};

export type QueryCensusArgs = {
  id: Scalars["ID"];
};

export type QueryCensusesArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryPollArgs = {
  id: Scalars["ID"];
};

/** All possible roles on app */
export enum Role {
  Admin = "ADMIN",
  Secretary = "SECRETARY"
}

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  uid: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles: Array<Role>;
};

export type VoteElectionInput = {
  candidate: Scalars["ID"];
  election: Scalars["ID"];
};

export type VotePollInput = {
  option: Scalars["ID"];
  poll: Scalars["ID"];
};

export type Voter = {
  __typename?: "Voter";
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  uid: Scalars["String"];
};

export type ElectionNameQueryVariables = {};

export type ElectionNameQuery = {
  __typename?: "Query";
  elections: Array<{
    __typename?: "Election";
    start: string;
    end: string;
    description: string;
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
      start
      end
      description
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
