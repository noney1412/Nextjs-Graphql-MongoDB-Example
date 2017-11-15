import { graphql } from "react-apollo";

import query from "../lib/queries";
import withData from "../lib/withData";
import Wrapper from "../components/wrapper";

// callName มากจากไหน ../lib/queries ไปดูที่นี่เลยพรี่ๆ

const index = ({ data: { callName = {} }}) => (
  <Wrapper>
    <ul>{callName.map((u, i) => <li key={i}> {u.name} </li>)}</ul>
  </Wrapper>
);

// ทำไม Wrapper --> จะมีตัวอย่าง Wrapper ตามมาทีหลังเนอะ

const queryComponent = graphql(query)(index);

export default withData(queryComponent);

/* 
  เขียนแบบดูมีคลาส แบบไม่ให้คนอื่นอ่าน ให้คนอื่นอ่านออกยากๆก็ตามด่านล่างเลยพรี่ๆ ฮรี่ๆ 
  ใช้ Shorthand if else เท่โครต เท่ชิปหาย 5555555555555 ล้อเล่นขำๆนะ อิอิ
  
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

  แต่เขียนแบบย่อเพราะผมขี้เกียจเขียน Return 55555 เหตุผลแค่นี้แหล่ะครับ
*/
