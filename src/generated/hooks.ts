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
  voters: Array<VoterInput>;
};

export type ColegiateBody = {
  __typename?: "ColegiateBody";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Election = {
  __typename?: "Election";
  id: Scalars["ID"];
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  maxVotes: Scalars["Int"];
  voteWeights: Array<VoteWeight>;
  candidates: Array<Candidate>;
  results: ResultsForElection;
  censuses: Array<Census>;
  delegates: Array<User>;
};

export type ElectionResultsArgs = {
  filter?: Maybe<ResultsFilter>;
};

export type ElectionInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  censuses: Array<CensusInput>;
  delegates: Array<Scalars["ID"]>;
  maxVotes?: Maybe<Scalars["Int"]>;
  candidates: Array<CandidateInput>;
  voteWeights?: Maybe<Array<VoteWeightInput>>;
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
  createUser: User;
  deleteUser: User;
  login: LoginPayload;
  deleteCandidate: Candidate;
  createElection: Election;
  voteOnElection: Scalars["Boolean"];
  modifyElection: Election;
  deleteElection: Scalars["Boolean"];
  uploadFile: File;
  createPoll: Poll;
  voteOnPoll: Scalars["Boolean"];
  modifyPoll: Poll;
  deletePoll: Scalars["Boolean"];
};

export type MutationModifyUserArgs = {
  input: UserUpdateInput;
  id: Scalars["ID"];
};

export type MutationCreateUserArgs = {
  input: UserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationDeleteCandidateArgs = {
  id: Scalars["ID"];
  election: Scalars["ID"];
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

export type MutationDeleteElectionArgs = {
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

export type MutationDeletePollArgs = {
  id: Scalars["ID"];
};

export type Poll = {
  __typename?: "Poll";
  id: Scalars["ID"];
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  maxVotes: Scalars["Int"];
  question: Scalars["String"];
  options: Array<PollOption>;
  isRealTime: Scalars["Boolean"];
  censuses: Array<Census>;
  results: ResultsForPoll;
  delegates: Array<User>;
};

export type PollResultsArgs = {
  filter?: Maybe<ResultsFilter>;
};

export type PollInput = {
  start: Scalars["DateTime"];
  end: Scalars["DateTime"];
  description: Scalars["String"];
  censuses: Array<CensusInput>;
  delegates: Array<Scalars["ID"]>;
  maxVotes?: Maybe<Scalars["Int"]>;
  question: Scalars["String"];
  options?: Maybe<Array<Scalars["String"]>>;
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
  colegiateBody: ColegiateBody;
  collegiateBodies: Array<ColegiateBody>;
  electoralProcesses: Array<ElectoralProcess>;
  electoralProcess: ElectoralProcess;
  pendingElectoralProcesses: Array<ElectoralProcess>;
  elections: Array<Election>;
  pendingElections: Array<Election>;
  election: Election;
  census: Census;
  censuses: Array<Census>;
  polls: Array<Poll>;
  poll: Poll;
  pendingPolls: Array<Poll>;
  isLoggedIn: Scalars["Boolean"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryColegiateBodyArgs = {
  id: Scalars["ID"];
};

export type QueryElectoralProcessesArgs = {
  open?: Maybe<Scalars["Boolean"]>;
  finished?: Maybe<Scalars["Boolean"]>;
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

export type ResultsForElection = {
  __typename?: "ResultsForElection";
  /** Votantes habilitados */
  voters: Scalars["Int"];
  /** Votos Emitidos */
  votesCast: Scalars["Int"];
  /** Votos en blanco */
  whiteVotes: Scalars["Int"];
  results: Array<ElectionResults>;
};

export type ResultsForPoll = {
  __typename?: "ResultsForPoll";
  /** Votantes habilitados */
  voters: Scalars["Int"];
  /** Votos Emitidos */
  votesCast: Scalars["Int"];
  /** Votos en blanco */
  whiteVotes: Scalars["Int"];
  results: Array<PollResults>;
};

/** All possible roles on app */
export enum Role {
  Admin = "ADMIN",
  Secretary = "SECRETARY",
  Voter = "VOTER"
}

export type UpdateElectionInput = {
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  censuses?: Maybe<Array<CensusInput>>;
  delegates?: Maybe<Array<UserInput>>;
  candidates?: Maybe<Array<CandidateInput>>;
};

export type UpdatePollInput = {
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  censuses?: Maybe<Array<CensusInput>>;
  delegates?: Maybe<Array<UserInput>>;
  question?: Maybe<Scalars["String"]>;
  options?: Maybe<Array<Scalars["String"]>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  uid: Scalars["String"];
  dni: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles: Array<Role>;
  genre: Genre;
  colegiateBody?: Maybe<ColegiateBody>;
};

export type UserInput = {
  uid: Scalars["String"];
  dni: Scalars["String"];
  password: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  roles?: Maybe<Array<Role>>;
  collegiateBody?: Maybe<Scalars["ID"]>;
  genre: Genre;
};

export type UserUpdateInput = {
  password?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Role>>;
  colegiateBody?: Maybe<Scalars["ID"]>;
  genre?: Maybe<Genre>;
};

export type VoteElectionInput = {
  candidates: Array<Scalars["ID"]>;
  election: Scalars["ID"];
};

export type VotePollInput = {
  options: Array<Scalars["ID"]>;
  poll: Scalars["ID"];
};

export type Voter = {
  __typename?: "Voter";
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  uid: Scalars["String"];
  dni: Scalars["String"];
};

export type VoterInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  uid: Scalars["String"];
  dni: Scalars["String"];
};

export type VoteWeight = {
  __typename?: "VoteWeight";
  group: Scalars["String"];
  weight: Scalars["Float"];
};

export type VoteWeightInput = {
  group: Scalars["String"];
  weight: Scalars["Float"];
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

export type ElectoralProcessesQueryVariables = {};

export type ElectoralProcessesQuery = {
  __typename?: "Query";
  electoralProcesses: Array<
    | { __typename: "Election"; id: string; description: string }
    | { __typename: "Poll"; id: string; description: string }
  >;
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

export type CensusQueryVariables = {
  id: Scalars["ID"];
};

export type CensusQuery = {
  __typename?: "Query";
  election: {
    __typename?: "Election";
    description: string;
    censuses: Array<{
      __typename?: "Census";
      voters: Array<{
        __typename?: "Voter";
        firstName: string;
        lastName: string;
      }>;
    }>;
  };
};

export type PastElectionResultsQueryVariables = {};

export type PastElectionResultsQuery = {
  __typename?: "Query";
  electoralProcesses: Array<
    | {
        __typename: "Election";
        id: string;
        description: string;
        start: string;
        end: string;
      }
    | {
        __typename: "Poll";
        id: string;
        description: string;
        start: string;
        end: string;
      }
  >;
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
export const ElectoralProcessesDocument = gql`
  query electoralProcesses {
    electoralProcesses {
      __typename
      ... on Election {
        id
        description
      }
      ... on Poll {
        id
        description
      }
    }
  }
`;
export function useElectoralProcessesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >(ElectoralProcessesDocument, baseOptions);
}
export function useElectoralProcessesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ElectoralProcessesQuery,
    ElectoralProcessesQueryVariables
  >(ElectoralProcessesDocument, baseOptions);
}
export type ElectoralProcessesQueryHookResult = ReturnType<
  typeof useElectoralProcessesQuery
>;
export type ElectoralProcessesLazyQueryHookResult = ReturnType<
  typeof useElectoralProcessesLazyQuery
>;
export type ElectoralProcessesQueryResult = ApolloReactCommon.QueryResult<
  ElectoralProcessesQuery,
  ElectoralProcessesQueryVariables
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
export const CensusDocument = gql`
  query census($id: ID!) {
    election(id: $id) {
      description
      censuses {
        voters {
          firstName
          lastName
        }
      }
    }
  }
`;
export function useCensusQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CensusQuery,
    CensusQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CensusQuery, CensusQueryVariables>(
    CensusDocument,
    baseOptions
  );
}
export function useCensusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CensusQuery,
    CensusQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<CensusQuery, CensusQueryVariables>(
    CensusDocument,
    baseOptions
  );
}
export type CensusQueryHookResult = ReturnType<typeof useCensusQuery>;
export type CensusLazyQueryHookResult = ReturnType<typeof useCensusLazyQuery>;
export type CensusQueryResult = ApolloReactCommon.QueryResult<
  CensusQuery,
  CensusQueryVariables
>;
export const PastElectionResultsDocument = gql`
  query PastElectionResults {
    electoralProcesses(finished: true) {
      __typename
      ... on Election {
        id
        description
        start
        end
      }
      ... on Poll {
        id
        description
        start
        end
      }
    }
  }
`;
export function usePastElectionResultsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >(PastElectionResultsDocument, baseOptions);
}
export function usePastElectionResultsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    PastElectionResultsQuery,
    PastElectionResultsQueryVariables
  >(PastElectionResultsDocument, baseOptions);
}
export type PastElectionResultsQueryHookResult = ReturnType<
  typeof usePastElectionResultsQuery
>;
export type PastElectionResultsLazyQueryHookResult = ReturnType<
  typeof usePastElectionResultsLazyQuery
>;
export type PastElectionResultsQueryResult = ApolloReactCommon.QueryResult<
  PastElectionResultsQuery,
  PastElectionResultsQueryVariables
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
