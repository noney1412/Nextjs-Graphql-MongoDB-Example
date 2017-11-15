export default {
  Query: {
    callName: async (parent, args, { models }) => {
      const alluser = await models.find();
      return alluser.map(x => {
        return x;
      });
    }
  },

  Mutation: {
    createUser: async (parent, args, { models }) => {
      const newuser = await new models(args).save();
      return newuser;
    }
  }
};
