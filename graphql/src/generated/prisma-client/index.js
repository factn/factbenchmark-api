"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Agent",
    embedded: false
  },
  {
    name: "Annotation",
    embedded: false
  },
  {
    name: "Attribution",
    embedded: false
  },
  {
    name: "CheckWorthy",
    embedded: false
  },
  {
    name: "Claim",
    embedded: false
  },
  {
    name: "ClaimSupport",
    embedded: false
  },
  {
    name: "Content",
    embedded: false
  },
  {
    name: "Response",
    embedded: false
  },
  {
    name: "TruthRating",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/miles-thompson-761e5b/factapi/dev`
});
exports.prisma = new exports.Prisma();
