# Nextjs-Graphql-MongoDB-Example
ทำแบบคนขี้เกียจอ่ะ ไปอ่านโค้ดก็เก็ทเอง555
-- ตอนนี้ยังไม่เสร็จ --

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
    MONGO_URL=mongodb://localhost:27017/myproject
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
