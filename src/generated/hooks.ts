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
  isVoteRectify: Scalars["Boolean"];
  candidates: Array<Candidate>;
  results: Array<ElectionResults>;
  censuses: Array<Census>;
};

export type ElectionResultsArgs = {
  filter?: Maybe<ResultsFilter>;
};

export type ElectionInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  isVoteRectify: Scalars["Boolean"];
  censuses: Array<CensusInput>;
  candidates: Array<CandidateInput>;
};

export type ElectionResults = {
  __typename?: "ElectionResults";
  votes: Scalars["Int"];
  group?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  genre?: Maybe<Genre>;
  candidate: Candidate;
};

export type ElectionVote = {
  __typename?: "ElectionVote";
  id: Scalars["ID"];
  user: Scalars["ID"];
  election: Scalars["ID"];
  candidate: Scalars["ID"];
};

export type ElectoralProcess = Election | Poll;

export type File = {
  __typename?: "File";
  name: Scalars["String"];
};

export enum Genre {
  Male = "MALE",
  Female = "FEMALE",
  Other = "OTHER"
}

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
  modifyUser: User;
  login: LoginPayload;
  createElection: Election;
  voteOnElection: Scalars["Boolean"];
  modifyElection: Election;
  uploadFile: File;
  createPoll: Poll;
  voteOnPoll: Scalars["Boolean"];
  modifyPoll: Poll;
};

export type MutationModifyUserArgs = {
  input: UserUpdateInput;
  id: Scalars["ID"];
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

export type MutationModifyElectionArgs = {
  input: UpdateElectionInput;
  id: Scalars["ID"];
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

export type MutationModifyPollArgs = {
  input: UpdatePollInput;
  id: Scalars["ID"];
};

export type Poll = {
  __typename?: "Poll";
  id: Scalars["ID"];
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  isVoteRectify: Scalars["Boolean"];
  question: Scalars["String"];
  options: Array<PollOption>;
  isRealTime: Scalars["Boolean"];
  censuses: Array<Census>;
  results: Array<PollResults>;
};

export type PollResultsArgs = {
  filter?: Maybe<ResultsFilter>;
};

export type PollInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  isVoteRectify: Scalars["Boolean"];
  censuses: Array<CensusInput>;
  question: Scalars["String"];
  options: Array<Scalars["String"]>;
  isRealTime: Scalars["Boolean"];
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
  group?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  genre?: Maybe<Genre>;
  option: PollOption;
};

export type PollVote = {
  __typename?: "PollVote";
  id: Scalars["ID"];
  user: Scalars["String"];
  poll: Scalars["String"];
  option: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user: User;
  me: User;
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

export type ResultsFilter = {
  group: Scalars["Boolean"];
  location: Scalars["Boolean"];
  genre: Scalars["Boolean"];
};

/** All possible roles on app */
export enum Role {
  Admin = "ADMIN",
  Secretary = "SECRETARY"
}

export type UpdateElectionInput = {
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  censuses?: Maybe<Array<CensusInput>>;
  candidates?: Maybe<Array<CandidateInput>>;
};

export type UpdatePollInput = {
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  censuses?: Maybe<Array<CensusInput>>;
  question?: Maybe<Scalars["String"]>;
  options?: Maybe<Array<Scalars["String"]>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  uid: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles: Array<Role>;
  genre: Genre;
};

export type UserInput = {
  uid: Scalars["String"];
  password: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles?: Maybe<Array<Role>>;
};

export type UserUpdateInput = {
  password?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Role>>;
};

export type VoteElectionInput = {
  candidate: Scalars["ID"];
  election: Scalars["ID"];
  rectifiedVote?: Maybe<Scalars["ID"]>;
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

export type ElectionsQueryVariables = {};

export type ElectionsQuery = {
  __typename?: "Query";
  pendingElections: Array<{
    __typename?: "Election";
    start: string;
    end: string;
    description: string;
    id: string;
  }>;
};

export type OptionsQueryVariables = {
  id: Scalars["ID"];
};

export type OptionsQuery = {
  __typename?: "Query";
  election: {
    __typename?: "Election";
    start: string;
    end: string;
    description: string;
    candidates: Array<{
      __typename?: "Candidate";
      id: string;
      firstName: string;
      lastName: string;
    }>;
  };
};

export type LogInMutationVariables = {
  input: LoginInput;
};

export type LogInMutation = {
  __typename?: "Mutation";
  login: { __typename?: "LoginPayload"; accessToken: string };
};

export const ElectionsDocument = gql`
  query elections {
    pendingElections {
      start
      end
      description
      id
    }
  }
`;
export function useElectionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectionsQuery,
    ElectionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ElectionsQuery, ElectionsQueryVariables>(
    ElectionsDocument,
    baseOptions
  );
}
export function useElectionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectionsQuery,
    ElectionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ElectionsQuery, ElectionsQueryVariables>(
    ElectionsDocument,
    baseOptions
  );
}
export type ElectionsQueryHookResult = ReturnType<typeof useElectionsQuery>;
export type ElectionsLazyQueryHookResult = ReturnType<
  typeof useElectionsLazyQuery
>;
export type ElectionsQueryResult = ApolloReactCommon.QueryResult<
  ElectionsQuery,
  ElectionsQueryVariables
>;
export const OptionsDocument = gql`
  query options($id: ID!) {
    election(id: $id) {
      start
      end
      description
      candidates {
        id
        firstName
        lastName
      }
    }
  }
`;
export function useOptionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    OptionsQuery,
    OptionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<OptionsQuery, OptionsQueryVariables>(
    OptionsDocument,
    baseOptions
  );
}
export function useOptionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    OptionsQuery,
    OptionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<OptionsQuery, OptionsQueryVariables>(
    OptionsDocument,
    baseOptions
  );
}
export type OptionsQueryHookResult = ReturnType<typeof useOptionsQuery>;
export type OptionsLazyQueryHookResult = ReturnType<typeof useOptionsLazyQuery>;
export type OptionsQueryResult = ApolloReactCommon.QueryResult<
  OptionsQuery,
  OptionsQueryVariables
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
