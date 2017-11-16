import { graphql } from "react-apollo";

import query from "../lib/queries";
import withData from "../lib/withData";
import Wrapper from "../components/wrapper";

const index = ({ data: { callName = {} }, loading, error }) =>
  loading ? (
    <div> loading... </div>
  ) : error ? (
    <div> error </div>
  ) : (
    <Wrapper>
      <ul>{callName.map((u, i) => <li key={i}> {u.name} </li>)}</ul>
    </Wrapper>
  );
//starts
const queryComponent = graphql(query)(index);

export default withData(queryComponent);

/* ------------------------------------------------------------------------- */
