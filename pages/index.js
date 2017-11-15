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

  // ทำไม Wrapper --> 

const queryComponent = graphql(query)(index);

export default withData(queryComponent);

/* 
  จากข้างบนมันก็คือ const index = ({data}) => {
    if(data.loading) return <div> loading </div>

    else return <div> data.name </div> 
  }

  แต่เขียนแบบย่อเพราะผมขี้เกียจเขียน Return 55555 เหตุผลแค่นี้แหล่ะครับ
*/
