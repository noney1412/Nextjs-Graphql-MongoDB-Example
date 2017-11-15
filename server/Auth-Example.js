/* ไว้ค่อยทำ ขก. โค้ดเยอะไว้ว่างๆมาทำต่อให้ 555 
ประมาณว่ามันจะมีสองแบบอ่ะ ไม่รู้คนอื่นเค้าเขียนแบบผมป่าวนะ 5555 
1. auth แบบ passport แล้วเซฟเข้า Mongoose ก่อน แล้วผูก graphql ใช้กับ OAuth 
แยก graphQl กับ Login 
2. JWT ผ่าน Graphql ไปเลยแบบส่ง token กลับไป

--> หน้าตาประมาณด้านล่างคร่าวๆ ใครเคยทำจาก MEAN Stack จะเก็ทเพราะมันคล้ายๆกัน 
-> ดูตัวอย่างเพิ่มใน NextExample Apollo-Auth นะครับ 
*/

{
  type: new GraphQLNonNull(GraphQLString),
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(LoginUserInputType)
    }
  },
  resolve: async (root, { data: { email, password } }, { SECRET }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('ไม่มีชื่อนี้ในระบบ');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('พาสเวิร์ดไม่ถูกต้อง');
    }
    const token = signToken(_.pick(user, ['id', 'firstname', 'lastname']), SECRET);
    return token;
  }
};

