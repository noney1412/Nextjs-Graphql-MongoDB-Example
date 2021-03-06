import {} from "dotenv/config";

//
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import next from "next";

import { schema, models } from "./data/index";
import mongoose from "./config/mongoose";

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dev });
const handle = appNext.getRequestHandler();

/* ------------ cors -> mongoose -> express -> graphql */

const port = parseInt(process.env.PORT, 10) || 3000;
var corsOptions = {
  origin:
    process.env.CONNECT_NOW ||
    process.env.CONNECT_LOCAL ||
    "http://localhost:3000",
  credentials: true
};

// cors ใช้ตอนเขียน Server แยก || produciton ตอนเทสต้องเป็น https นะใช้ ngrok ช่วย
/* ในที่นี้ผมแยกไว้สามอันเพราะเทสสาม Server มี now , local(https) , localhost แล้วแต่จะใช้ตัวไหน 
1. now คือ deploy ขึ้นโฮส , ใช้ deploy เล่นๆ Production เรียบร้อย ผมใช้ now deploy
2. https แค่ไว้ทดสอบว่ามันส่งมาป่าว ส่งช้าไหมไรงี้แต่ยังไม่ production แค่กึ่งๆ นึกออกปะ Test แบบ DevEnv 
3. localhost คือไว้ใช้ตอนเขียนโค้ดแล้วรันแบบ babel-node ทำนองนี 
** ในนี้ comment CORS ออกก็ได้เพราะมัน http:// ที่เดียวกัน .com <--- 
*/

/* ------------ Connection */
mongoose.set("debug", process.env.DEBUG);
mongoose.connect(
  process.env.MONGO_URL ||
    "mongodb://cntest:1234@ds233895.mlab.com:33895/kittenkat",
  {
    useMongoClient: true
  }
);

appNext
  .prepare()
  .then(() => {
    const server = express();

    /* ------------ MiddleWare */

    server.use(cors(corsOptions));
    server.use(compression());

    server.use(
      "/graphql",
      bodyParser.json(),
      graphqlExpress({ schema, context: { models } })
    );

    if (dev)
      server.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(
        `Server http://localhost:${port}/graphiql \n Index http://localhost:${port}`
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
