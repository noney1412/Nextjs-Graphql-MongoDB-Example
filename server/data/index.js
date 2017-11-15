import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolver";
import typeDefs from "./schema";
import models from "./models";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema, models };
