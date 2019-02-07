module.exports = {
        typeDefs: /* GraphQL */ `type Agent {
  id: ID!
  email: String!
  password: String!
  name: String
}

type AgentConnection {
  pageInfo: PageInfo!
  edges: [AgentEdge]!
  aggregate: AggregateAgent!
}

input AgentCreateInput {
  email: String!
  password: String!
  name: String
}

input AgentCreateOneInput {
  create: AgentCreateInput
  connect: AgentWhereUniqueInput
}

type AgentEdge {
  node: Agent!
  cursor: String!
}

enum AgentOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AgentPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String
}

type AgentSubscriptionPayload {
  mutation: MutationType!
  node: Agent
  updatedFields: [String!]
  previousValues: AgentPreviousValues
}

input AgentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AgentWhereInput
  AND: [AgentSubscriptionWhereInput!]
  OR: [AgentSubscriptionWhereInput!]
  NOT: [AgentSubscriptionWhereInput!]
}

input AgentUpdateDataInput {
  email: String
  password: String
  name: String
}

input AgentUpdateInput {
  email: String
  password: String
  name: String
}

input AgentUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input AgentUpdateOneRequiredInput {
  create: AgentCreateInput
  update: AgentUpdateDataInput
  upsert: AgentUpsertNestedInput
  connect: AgentWhereUniqueInput
}

input AgentUpsertNestedInput {
  update: AgentUpdateDataInput!
  create: AgentCreateInput!
}

input AgentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AgentWhereInput!]
  OR: [AgentWhereInput!]
  NOT: [AgentWhereInput!]
}

input AgentWhereUniqueInput {
  id: ID
  email: String
}

type AggregateAgent {
  count: Int!
}

type AggregateAnnotation {
  count: Int!
}

type AggregateAttribution {
  count: Int!
}

type AggregateCheckWorthy {
  count: Int!
}

type AggregateClaim {
  count: Int!
}

type AggregateClaimSupport {
  count: Int!
}

type AggregateContent {
  count: Int!
}

type AggregateResponse {
  count: Int!
}

type AggregateTruthRating {
  count: Int!
}

type Annotation {
  source_url: String
  data: String
  created: DateTime!
  submitted_by: Agent!
}

type AnnotationConnection {
  pageInfo: PageInfo!
  edges: [AnnotationEdge]!
  aggregate: AggregateAnnotation!
}

input AnnotationCreateInput {
  source_url: String
  data: String
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

input AnnotationCreateManyInput {
  create: [AnnotationCreateInput!]
}

type AnnotationEdge {
  node: Annotation!
  cursor: String!
}

enum AnnotationOrderByInput {
  source_url_ASC
  source_url_DESC
  data_ASC
  data_DESC
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotationPreviousValues {
  source_url: String
  data: String
  created: DateTime!
}

type AnnotationSubscriptionPayload {
  mutation: MutationType!
  node: Annotation
  updatedFields: [String!]
  previousValues: AnnotationPreviousValues
}

input AnnotationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnotationWhereInput
  AND: [AnnotationSubscriptionWhereInput!]
  OR: [AnnotationSubscriptionWhereInput!]
  NOT: [AnnotationSubscriptionWhereInput!]
}

input AnnotationUpdateManyMutationInput {
  source_url: String
  data: String
  created: DateTime
}

input AnnotationWhereInput {
  source_url: String
  source_url_not: String
  source_url_in: [String!]
  source_url_not_in: [String!]
  source_url_lt: String
  source_url_lte: String
  source_url_gt: String
  source_url_gte: String
  source_url_contains: String
  source_url_not_contains: String
  source_url_starts_with: String
  source_url_not_starts_with: String
  source_url_ends_with: String
  source_url_not_ends_with: String
  data: String
  data_not: String
  data_in: [String!]
  data_not_in: [String!]
  data_lt: String
  data_lte: String
  data_gt: String
  data_gte: String
  data_contains: String
  data_not_contains: String
  data_starts_with: String
  data_not_starts_with: String
  data_ends_with: String
  data_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [AnnotationWhereInput!]
  OR: [AnnotationWhereInput!]
  NOT: [AnnotationWhereInput!]
}

type Attribution {
  source_url: String
  snapshot: Content
  created: DateTime!
  submitted_by: Agent!
}

type AttributionConnection {
  pageInfo: PageInfo!
  edges: [AttributionEdge]!
  aggregate: AggregateAttribution!
}

input AttributionCreateInput {
  source_url: String
  snapshot: ContentCreateOneInput
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

input AttributionCreateManyInput {
  create: [AttributionCreateInput!]
}

type AttributionEdge {
  node: Attribution!
  cursor: String!
}

enum AttributionOrderByInput {
  source_url_ASC
  source_url_DESC
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AttributionPreviousValues {
  source_url: String
  created: DateTime!
}

input AttributionScalarWhereInput {
  source_url: String
  source_url_not: String
  source_url_in: [String!]
  source_url_not_in: [String!]
  source_url_lt: String
  source_url_lte: String
  source_url_gt: String
  source_url_gte: String
  source_url_contains: String
  source_url_not_contains: String
  source_url_starts_with: String
  source_url_not_starts_with: String
  source_url_ends_with: String
  source_url_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [AttributionScalarWhereInput!]
  OR: [AttributionScalarWhereInput!]
  NOT: [AttributionScalarWhereInput!]
}

type AttributionSubscriptionPayload {
  mutation: MutationType!
  node: Attribution
  updatedFields: [String!]
  previousValues: AttributionPreviousValues
}

input AttributionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttributionWhereInput
  AND: [AttributionSubscriptionWhereInput!]
  OR: [AttributionSubscriptionWhereInput!]
  NOT: [AttributionSubscriptionWhereInput!]
}

input AttributionUpdateManyDataInput {
  source_url: String
  created: DateTime
}

input AttributionUpdateManyInput {
  create: [AttributionCreateInput!]
  deleteMany: [AttributionScalarWhereInput!]
  updateMany: [AttributionUpdateManyWithWhereNestedInput!]
}

input AttributionUpdateManyMutationInput {
  source_url: String
  created: DateTime
}

input AttributionUpdateManyWithWhereNestedInput {
  where: AttributionScalarWhereInput!
  data: AttributionUpdateManyDataInput!
}

input AttributionWhereInput {
  source_url: String
  source_url_not: String
  source_url_in: [String!]
  source_url_not_in: [String!]
  source_url_lt: String
  source_url_lte: String
  source_url_gt: String
  source_url_gte: String
  source_url_contains: String
  source_url_not_contains: String
  source_url_starts_with: String
  source_url_not_starts_with: String
  source_url_ends_with: String
  source_url_not_ends_with: String
  snapshot: ContentWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [AttributionWhereInput!]
  OR: [AttributionWhereInput!]
  NOT: [AttributionWhereInput!]
}

type BatchPayload {
  count: Long!
}

type CheckWorthy {
  call: Boolean!
  check_worthiness: Float
  support(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  created: DateTime!
  submitted_by: Agent!
}

type CheckWorthyConnection {
  pageInfo: PageInfo!
  edges: [CheckWorthyEdge]!
  aggregate: AggregateCheckWorthy!
}

input CheckWorthyCreateInput {
  call: Boolean
  check_worthiness: Float
  support: AnnotationCreateManyInput
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

input CheckWorthyCreateOneInput {
  create: CheckWorthyCreateInput
}

type CheckWorthyEdge {
  node: CheckWorthy!
  cursor: String!
}

enum CheckWorthyOrderByInput {
  call_ASC
  call_DESC
  check_worthiness_ASC
  check_worthiness_DESC
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CheckWorthyPreviousValues {
  call: Boolean!
  check_worthiness: Float
  created: DateTime!
}

type CheckWorthySubscriptionPayload {
  mutation: MutationType!
  node: CheckWorthy
  updatedFields: [String!]
  previousValues: CheckWorthyPreviousValues
}

input CheckWorthySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckWorthyWhereInput
  AND: [CheckWorthySubscriptionWhereInput!]
  OR: [CheckWorthySubscriptionWhereInput!]
  NOT: [CheckWorthySubscriptionWhereInput!]
}

input CheckWorthyUpdateManyMutationInput {
  call: Boolean
  check_worthiness: Float
  created: DateTime
}

input CheckWorthyWhereInput {
  call: Boolean
  call_not: Boolean
  check_worthiness: Float
  check_worthiness_not: Float
  check_worthiness_in: [Float!]
  check_worthiness_not_in: [Float!]
  check_worthiness_lt: Float
  check_worthiness_lte: Float
  check_worthiness_gt: Float
  check_worthiness_gte: Float
  support_every: AnnotationWhereInput
  support_some: AnnotationWhereInput
  support_none: AnnotationWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [CheckWorthyWhereInput!]
  OR: [CheckWorthyWhereInput!]
  NOT: [CheckWorthyWhereInput!]
}

type Claim {
  id: ID!
  claim_text: String!
  claim_timestamp: DateTime!
  support: ClaimSupport
  created: DateTime!
  submitted_by: Agent!
}

type ClaimConnection {
  pageInfo: PageInfo!
  edges: [ClaimEdge]!
  aggregate: AggregateClaim!
}

input ClaimCreateInput {
  claim_text: String!
  claim_timestamp: DateTime!
  support: ClaimSupportCreateOneInput
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

type ClaimEdge {
  node: Claim!
  cursor: String!
}

enum ClaimOrderByInput {
  id_ASC
  id_DESC
  claim_text_ASC
  claim_text_DESC
  claim_timestamp_ASC
  claim_timestamp_DESC
  created_ASC
  created_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClaimPreviousValues {
  id: ID!
  claim_text: String!
  claim_timestamp: DateTime!
  created: DateTime!
}

type ClaimSubscriptionPayload {
  mutation: MutationType!
  node: Claim
  updatedFields: [String!]
  previousValues: ClaimPreviousValues
}

input ClaimSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClaimWhereInput
  AND: [ClaimSubscriptionWhereInput!]
  OR: [ClaimSubscriptionWhereInput!]
  NOT: [ClaimSubscriptionWhereInput!]
}

type ClaimSupport {
  attributions(where: AttributionWhereInput, orderBy: AttributionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribution!]
}

type ClaimSupportConnection {
  pageInfo: PageInfo!
  edges: [ClaimSupportEdge]!
  aggregate: AggregateClaimSupport!
}

input ClaimSupportCreateInput {
  attributions: AttributionCreateManyInput
}

input ClaimSupportCreateOneInput {
  create: ClaimSupportCreateInput
}

type ClaimSupportEdge {
  node: ClaimSupport!
  cursor: String!
}

enum ClaimSupportOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClaimSupportSubscriptionPayload {
  mutation: MutationType!
  node: ClaimSupport
  updatedFields: [String!]
}

input ClaimSupportSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClaimSupportWhereInput
  AND: [ClaimSupportSubscriptionWhereInput!]
  OR: [ClaimSupportSubscriptionWhereInput!]
  NOT: [ClaimSupportSubscriptionWhereInput!]
}

input ClaimSupportUpdateDataInput {
  attributions: AttributionUpdateManyInput
}

input ClaimSupportUpdateOneInput {
  create: ClaimSupportCreateInput
  update: ClaimSupportUpdateDataInput
  upsert: ClaimSupportUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input ClaimSupportUpsertNestedInput {
  update: ClaimSupportUpdateDataInput!
  create: ClaimSupportCreateInput!
}

input ClaimSupportWhereInput {
  attributions_every: AttributionWhereInput
  attributions_some: AttributionWhereInput
  attributions_none: AttributionWhereInput
  AND: [ClaimSupportWhereInput!]
  OR: [ClaimSupportWhereInput!]
  NOT: [ClaimSupportWhereInput!]
}

input ClaimUpdateInput {
  claim_text: String
  claim_timestamp: DateTime
  support: ClaimSupportUpdateOneInput
  created: DateTime
  submitted_by: AgentUpdateOneRequiredInput
}

input ClaimUpdateManyMutationInput {
  claim_text: String
  claim_timestamp: DateTime
  created: DateTime
}

input ClaimWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  claim_text: String
  claim_text_not: String
  claim_text_in: [String!]
  claim_text_not_in: [String!]
  claim_text_lt: String
  claim_text_lte: String
  claim_text_gt: String
  claim_text_gte: String
  claim_text_contains: String
  claim_text_not_contains: String
  claim_text_starts_with: String
  claim_text_not_starts_with: String
  claim_text_ends_with: String
  claim_text_not_ends_with: String
  claim_timestamp: DateTime
  claim_timestamp_not: DateTime
  claim_timestamp_in: [DateTime!]
  claim_timestamp_not_in: [DateTime!]
  claim_timestamp_lt: DateTime
  claim_timestamp_lte: DateTime
  claim_timestamp_gt: DateTime
  claim_timestamp_gte: DateTime
  support: ClaimSupportWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [ClaimWhereInput!]
  OR: [ClaimWhereInput!]
  NOT: [ClaimWhereInput!]
}

input ClaimWhereUniqueInput {
  id: ID
}

type Content {
  hash: String
  mime_type: String
  data: String
  created: DateTime!
  submitted_by: Agent!
}

type ContentConnection {
  pageInfo: PageInfo!
  edges: [ContentEdge]!
  aggregate: AggregateContent!
}

input ContentCreateInput {
  hash: String
  mime_type: String
  data: String
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

input ContentCreateOneInput {
  create: ContentCreateInput
}

type ContentEdge {
  node: Content!
  cursor: String!
}

enum ContentOrderByInput {
  hash_ASC
  hash_DESC
  mime_type_ASC
  mime_type_DESC
  data_ASC
  data_DESC
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContentPreviousValues {
  hash: String
  mime_type: String
  data: String
  created: DateTime!
}

type ContentSubscriptionPayload {
  mutation: MutationType!
  node: Content
  updatedFields: [String!]
  previousValues: ContentPreviousValues
}

input ContentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContentWhereInput
  AND: [ContentSubscriptionWhereInput!]
  OR: [ContentSubscriptionWhereInput!]
  NOT: [ContentSubscriptionWhereInput!]
}

input ContentUpdateManyMutationInput {
  hash: String
  mime_type: String
  data: String
  created: DateTime
}

input ContentWhereInput {
  hash: String
  hash_not: String
  hash_in: [String!]
  hash_not_in: [String!]
  hash_lt: String
  hash_lte: String
  hash_gt: String
  hash_gte: String
  hash_contains: String
  hash_not_contains: String
  hash_starts_with: String
  hash_not_starts_with: String
  hash_ends_with: String
  hash_not_ends_with: String
  mime_type: String
  mime_type_not: String
  mime_type_in: [String!]
  mime_type_not_in: [String!]
  mime_type_lt: String
  mime_type_lte: String
  mime_type_gt: String
  mime_type_gte: String
  mime_type_contains: String
  mime_type_not_contains: String
  mime_type_starts_with: String
  mime_type_not_starts_with: String
  mime_type_ends_with: String
  mime_type_not_ends_with: String
  data: String
  data_not: String
  data_in: [String!]
  data_not_in: [String!]
  data_lt: String
  data_lte: String
  data_gt: String
  data_gte: String
  data_contains: String
  data_not_contains: String
  data_starts_with: String
  data_not_starts_with: String
  data_ends_with: String
  data_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [ContentWhereInput!]
  OR: [ContentWhereInput!]
  NOT: [ContentWhereInput!]
}

scalar DateTime

scalar Long

type Mutation {
  createAgent(data: AgentCreateInput!): Agent!
  updateAgent(data: AgentUpdateInput!, where: AgentWhereUniqueInput!): Agent
  updateManyAgents(data: AgentUpdateManyMutationInput!, where: AgentWhereInput): BatchPayload!
  upsertAgent(where: AgentWhereUniqueInput!, create: AgentCreateInput!, update: AgentUpdateInput!): Agent!
  deleteAgent(where: AgentWhereUniqueInput!): Agent
  deleteManyAgents(where: AgentWhereInput): BatchPayload!
  createAnnotation(data: AnnotationCreateInput!): Annotation!
  updateManyAnnotations(data: AnnotationUpdateManyMutationInput!, where: AnnotationWhereInput): BatchPayload!
  deleteManyAnnotations(where: AnnotationWhereInput): BatchPayload!
  createAttribution(data: AttributionCreateInput!): Attribution!
  updateManyAttributions(data: AttributionUpdateManyMutationInput!, where: AttributionWhereInput): BatchPayload!
  deleteManyAttributions(where: AttributionWhereInput): BatchPayload!
  createCheckWorthy(data: CheckWorthyCreateInput!): CheckWorthy!
  updateManyCheckWorthies(data: CheckWorthyUpdateManyMutationInput!, where: CheckWorthyWhereInput): BatchPayload!
  deleteManyCheckWorthies(where: CheckWorthyWhereInput): BatchPayload!
  createClaim(data: ClaimCreateInput!): Claim!
  updateClaim(data: ClaimUpdateInput!, where: ClaimWhereUniqueInput!): Claim
  updateManyClaims(data: ClaimUpdateManyMutationInput!, where: ClaimWhereInput): BatchPayload!
  upsertClaim(where: ClaimWhereUniqueInput!, create: ClaimCreateInput!, update: ClaimUpdateInput!): Claim!
  deleteClaim(where: ClaimWhereUniqueInput!): Claim
  deleteManyClaims(where: ClaimWhereInput): BatchPayload!
  createClaimSupport(data: ClaimSupportCreateInput!): ClaimSupport!
  deleteManyClaimSupports(where: ClaimSupportWhereInput): BatchPayload!
  createContent(data: ContentCreateInput!): Content!
  updateManyContents(data: ContentUpdateManyMutationInput!, where: ContentWhereInput): BatchPayload!
  deleteManyContents(where: ContentWhereInput): BatchPayload!
  createResponse(data: ResponseCreateInput!): Response!
  updateManyResponses(data: ResponseUpdateManyMutationInput!, where: ResponseWhereInput): BatchPayload!
  deleteManyResponses(where: ResponseWhereInput): BatchPayload!
  createTruthRating(data: TruthRatingCreateInput!): TruthRating!
  updateManyTruthRatings(data: TruthRatingUpdateManyMutationInput!, where: TruthRatingWhereInput): BatchPayload!
  deleteManyTruthRatings(where: TruthRatingWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  agent(where: AgentWhereUniqueInput!): Agent
  agents(where: AgentWhereInput, orderBy: AgentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Agent]!
  agentsConnection(where: AgentWhereInput, orderBy: AgentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AgentConnection!
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation]!
  annotationsConnection(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationConnection!
  attributions(where: AttributionWhereInput, orderBy: AttributionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribution]!
  attributionsConnection(where: AttributionWhereInput, orderBy: AttributionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttributionConnection!
  checkWorthies(where: CheckWorthyWhereInput, orderBy: CheckWorthyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckWorthy]!
  checkWorthiesConnection(where: CheckWorthyWhereInput, orderBy: CheckWorthyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckWorthyConnection!
  claim(where: ClaimWhereUniqueInput!): Claim
  claims(where: ClaimWhereInput, orderBy: ClaimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Claim]!
  claimsConnection(where: ClaimWhereInput, orderBy: ClaimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClaimConnection!
  claimSupports(where: ClaimSupportWhereInput, orderBy: ClaimSupportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClaimSupport]!
  claimSupportsConnection(where: ClaimSupportWhereInput, orderBy: ClaimSupportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClaimSupportConnection!
  contents(where: ContentWhereInput, orderBy: ContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Content]!
  contentsConnection(where: ContentWhereInput, orderBy: ContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContentConnection!
  responses(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Response]!
  responsesConnection(where: ResponseWhereInput, orderBy: ResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResponseConnection!
  truthRatings(where: TruthRatingWhereInput, orderBy: TruthRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TruthRating]!
  truthRatingsConnection(where: TruthRatingWhereInput, orderBy: TruthRatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TruthRatingConnection!
  node(id: ID!): Node
}

type Response {
  check_worthy: CheckWorthy
  truth_rating: TruthRating
  annotation(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  created: DateTime!
  submitted_by: Agent!
}

type ResponseConnection {
  pageInfo: PageInfo!
  edges: [ResponseEdge]!
  aggregate: AggregateResponse!
}

input ResponseCreateInput {
  check_worthy: CheckWorthyCreateOneInput
  truth_rating: TruthRatingCreateOneInput
  annotation: AnnotationCreateManyInput
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

type ResponseEdge {
  node: Response!
  cursor: String!
}

enum ResponseOrderByInput {
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ResponsePreviousValues {
  created: DateTime!
}

type ResponseSubscriptionPayload {
  mutation: MutationType!
  node: Response
  updatedFields: [String!]
  previousValues: ResponsePreviousValues
}

input ResponseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResponseWhereInput
  AND: [ResponseSubscriptionWhereInput!]
  OR: [ResponseSubscriptionWhereInput!]
  NOT: [ResponseSubscriptionWhereInput!]
}

input ResponseUpdateManyMutationInput {
  created: DateTime
}

input ResponseWhereInput {
  check_worthy: CheckWorthyWhereInput
  truth_rating: TruthRatingWhereInput
  annotation_every: AnnotationWhereInput
  annotation_some: AnnotationWhereInput
  annotation_none: AnnotationWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [ResponseWhereInput!]
  OR: [ResponseWhereInput!]
  NOT: [ResponseWhereInput!]
}

type Subscription {
  agent(where: AgentSubscriptionWhereInput): AgentSubscriptionPayload
  annotation(where: AnnotationSubscriptionWhereInput): AnnotationSubscriptionPayload
  attribution(where: AttributionSubscriptionWhereInput): AttributionSubscriptionPayload
  checkWorthy(where: CheckWorthySubscriptionWhereInput): CheckWorthySubscriptionPayload
  claim(where: ClaimSubscriptionWhereInput): ClaimSubscriptionPayload
  claimSupport(where: ClaimSupportSubscriptionWhereInput): ClaimSupportSubscriptionPayload
  content(where: ContentSubscriptionWhereInput): ContentSubscriptionPayload
  response(where: ResponseSubscriptionWhereInput): ResponseSubscriptionPayload
  truthRating(where: TruthRatingSubscriptionWhereInput): TruthRatingSubscriptionPayload
}

type TruthRating {
  call: Boolean!
  truthiness: Float
  support(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  created: DateTime!
  submitted_by: Agent!
}

type TruthRatingConnection {
  pageInfo: PageInfo!
  edges: [TruthRatingEdge]!
  aggregate: AggregateTruthRating!
}

input TruthRatingCreateInput {
  call: Boolean
  truthiness: Float
  support: AnnotationCreateManyInput
  created: DateTime!
  submitted_by: AgentCreateOneInput!
}

input TruthRatingCreateOneInput {
  create: TruthRatingCreateInput
}

type TruthRatingEdge {
  node: TruthRating!
  cursor: String!
}

enum TruthRatingOrderByInput {
  call_ASC
  call_DESC
  truthiness_ASC
  truthiness_DESC
  created_ASC
  created_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TruthRatingPreviousValues {
  call: Boolean!
  truthiness: Float
  created: DateTime!
}

type TruthRatingSubscriptionPayload {
  mutation: MutationType!
  node: TruthRating
  updatedFields: [String!]
  previousValues: TruthRatingPreviousValues
}

input TruthRatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TruthRatingWhereInput
  AND: [TruthRatingSubscriptionWhereInput!]
  OR: [TruthRatingSubscriptionWhereInput!]
  NOT: [TruthRatingSubscriptionWhereInput!]
}

input TruthRatingUpdateManyMutationInput {
  call: Boolean
  truthiness: Float
  created: DateTime
}

input TruthRatingWhereInput {
  call: Boolean
  call_not: Boolean
  truthiness: Float
  truthiness_not: Float
  truthiness_in: [Float!]
  truthiness_not_in: [Float!]
  truthiness_lt: Float
  truthiness_lte: Float
  truthiness_gt: Float
  truthiness_gte: Float
  support_every: AnnotationWhereInput
  support_some: AnnotationWhereInput
  support_none: AnnotationWhereInput
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  submitted_by: AgentWhereInput
  AND: [TruthRatingWhereInput!]
  OR: [TruthRatingWhereInput!]
  NOT: [TruthRatingWhereInput!]
}
`
      }
    