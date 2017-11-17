# Nextjs-Graphql-MongoDB-Example
ทำแบบคนขี้เกียจอ่ะ ไปอ่านโค้ดก็เก็ทเอง555 Repo นี้จะสอน Nextjs GraphQL เบื่องต้นที่โค้ดอ่านง่าย แต่อธิบายไม่ละเอียด
ซึ่งโปรเจ็คนี้จะแนะนำแนวทางให้คนที่เพิ่งมาเริ่มใช้ Nextjs Graphql Apollo 
และในทุกๆ วันผมจะแบ่งเวลาวันละชั่วโมงมาต่อเติม Repo นี้ให้มันสามารถเป็น Guide ที่ดีในอนาคต :) 
* -- ซึงตอนนี้ยังไม่เสร็จ --
จะพาทำไรมั่ง
1. Basic Graphql + MongoDB
   1. ลองเขียน Schema -> 
   2. หัดใช้ MongoDB + Save Data ลงไปผ่าน Graphql 
   3. Apollo Client เอา Data มาโชว์ที่ Fontend
2. Authen -> OAuth (facebook) ** ไว้ค่อยมาต่อหลังจบอันบน
3. Deploy + Test **  ไว้ค่อยมาต่อ
4. @decorator ลองใช้กานเถอะ
5. Golang ก็มา มาทำไมวะ 5555 ที่นี้มันถิ่น JS
6. Rxjs รอไปก่อน
7. นึกไม่ออกละรออันบนให้จบก่อน

* --- Medium จะลงเป็นตอนๆ ไว้วันละตอน ---  

      ตอนที่ 0 จะพาไปดู editor ของผมก่อนว่าตั้งค่าอะไรบ้างบลาๆ เขียนเป็น Eng นะครับแต่อ่านไม่ยาก 
0. https://medium.com/@panchanom/ep-0-my-cutie-vscode-382a11bbc18e

## Start

ลองทดสอบ -- 
สำหรับใครที่ใช้ window : ลง npm install -g win-node-env ก่อนนะครับสำหรับคนที่รันไม่ได้
``` 
yarn install 
yarn dev 
```
ที่ http://localhost:3000/graphiql  : พิมพ์ตามรูปเลยครับ
![Mockup for feature A](https://scontent.fbkk5-1.fna.fbcdn.net/v/t31.0-8/23550943_334423193691650_5383170537327400636_o.jpg?oh=685efebe6da49757cd116da17e905e70&oe=5AAB64E0)

และทีนี้เปิด http://localhost:3000 : ดูผลลัพท์
![Mockup for feature A](https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/23473072_334425010358135_4050715665839760465_n.jpg?oh=bf7c40fd01387c332a6f2552aab7c385&oe=5AA7A9CF)

ต่อที่ Medium.com ที่ตอนนี้ผมยังไม่ได้เขียนนน... กำลังจะเริ่มเขียนวันนี้แหล่ะ ทยอยๆ ไป

### สำหรับคนที่จะแก้ไปใช้ในโปรเจ็คตัวเอง หรือจะลองเทสเล่น ๆ สำหรับคนเพิ่งเริ่ม
อันดับแรก
--> ที่ไฟล์ .env.example ให้คุณลบเหลือแค่ .env 
นี้ข้างในไฟล์

``` .env
MONGO_URL= //MongoDB แนะนำฝากไว้ที่ MongoDB Atlas 
DEBUG=TRUE // อันนี้ผมลืมว่ามันอยู่ตรงไหน ตัดมาจากโปรเจ็คหลักอีกทีไม่กล้าลบ 5555
CONNECT_NGROK= // https ของ ngrok ไว้เทสส่งเจ้านายของคุณ
CONNECT_LOCAL= // อันนี้ใช้ทำไรวะลืม 5555
CONNECT_NOW= // อันนี้ผม deploy ขึ้น now อ่ะ 
GRAPHQL_URI= // graphql uri ของคุณ
```

   
   สนใจที่ MONGO_URL ก่อน...

คุณสามารถใช้เป็น : 
1. mongodb://localhost:27017/myproject || แบบ local 
2. https://www.mongodb.com/cloud/atlas  || แบบ Online* แนะนำให้ใช้แบบ online เหตุผลเดียวคือผมขี้เกียจเปิด mongod 

```
    MONGO_URL=mongodb://cntest:1234@ds233895.mlab.com:33895/kittenkat ---> อันนี้ผมทำไว้ให้เทสเฉยๆ
    DEBUG=TRUE ---> อันนี้จะเป็น debug ของ Mongoose ไม่ใช้ก็ปิดไม่มีอะไร
```
แปป กำลังเขียน 55555 เดี๋ยวมาต่อหลังเลิกเรียนครับ 

```
This is a code block
```

To add syntax highlighting to a code block, add the name of the language immediately
after the backticks: 

```javascript
var oldUnload = window.onbeforeunload;
window.onbeforeunload = function() {
    saveCoverage();
    if (oldUnload) {
        return oldUnload.apply(this, arguments);
    }
};
```
Introducing my quote:

> Neque porro quisquam est qui 
> dolorem ipsum quia dolor sit amet, 
> consectetur, adipisci velit...
