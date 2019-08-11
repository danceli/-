const Router=require('koa-router');
const crypto=require('crypto');
const gravatar=require('gravatar');
const jwt=require('jsonwebtoken');
const {SECRETKRY}=require('../config.js');
let router=new Router();

router.post('/register',async ctx=>{
  console.log('aaaaaaa');
  //得到前台的数据
  // console.log(ctx.request.fields);
  let {email}=ctx.request.fields;
  //查询数据库中的数据对比注册过没有
  let data=await ctx.db.query(`SELECT email FROM user WHERE email='${email}'`);
  console.log(data);
  if(data.length>0){
    //console.log('用户已注册')
    ctx.throw(400,"邮箱已被注册");
  }else{
    let avatar = gravatar.url(email, {s: '200', r: 'pg', d: 'mm'});
    let {name,pass,identity}=ctx.request.fields;
    let md5=crypto.createHash('md5');
    pass=md5.update(pass).digest('hex');
    let date=new Date();
    let time=date.toUTCString();
    try{
      await ctx.db.query(`INSERT INTO user VALUES(0,'${name}','${email}','${pass}','${avatar}','${time}','${identity}')`);
    }catch(e){
      console.log(e);
    }
    ctx.body="success";
  }
});
//登录

router.post('/login',async ctx=>{
  //获取数据
  let {email,pass}=ctx.request.fields;
  let md5=crypto.createHash('md5');
  pass=md5.update(pass).digest('hex');
  let datas=await ctx.db.query(`SELECT * FROM user WHERE email='${email}'`);
  if(datas.length<=0){
    ctx.throw(400,'用户未注册');
  }else{
    if(pass!=datas[0].pass){
      ctx.throw(400,'密码输入错误');
    }else{
      let mytoken=await jwt.sign({id:datas[0].ID,email},SECRETKRY);
      console.log(mytoken);
      ctx.body={"name":datas[0].name,"token":mytoken,"identity":datas[0].identity,avatar:datas[0].avatar};
    }
  }
})

module.exports=router.routes();