const koa=require('koa');
const config=require('./config');
const mysql=require('mysql');
const co=require('co-mysql');
const body=require('koa-better-body');
const cors=require('@koa/cors');


const user=require('./router/user');
const profiles=require('./router/profiles');
let server=new koa();

//数据库
let conne=mysql.createPool({host:config.DB_HOST,user:'root',port:config.DB_PORT,password:config.DB_PASS,database:config.DB_USER});
let db=co(conne);
server.context.db=db;
//文件上传
server.use(body({
  uploadDir:'./static/upload'
}));


// server.use(async ctx=>{
//   ctx.body="aa";
  
// })
server.use(cors({
  origin: '*',    // 前端地址
  credentials: true
}))
server.use(user);
server.use(profiles);
server.listen(config.PORT,()=>{
  console.log(`server in runnning ${config.PORT}`);
});

