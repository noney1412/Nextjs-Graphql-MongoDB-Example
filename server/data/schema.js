export default `

type users {
    name: String
}

type Query {
    callName:[users]
}

type Mutation {
    createUser(name:String): users
}
    


`;
