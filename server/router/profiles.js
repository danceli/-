const Router=require('koa-router');

let router=new Router();
//添加
router.post('/add',async ctx=>{
  if(ctx.request.fields){
    let {type,describe,income,extend,cash,remark}=ctx.request.fields;
    let date=new Date().toUTCString();
    try{
      let datas=await ctx.db.query(`INSERT INTO profiles VALUES(0,'${type}','${describe}','${income}','${extend}','${cash}','${remark}','${date}');`);
      ctx.body=datas
    }catch(e){
      console.log(e);
    }
  }
});
//编辑
router.post('/edit/:id',async ctx=>{
  if(ctx.request.fields){
    let {id,date,type,describe,income,extend,cash,remark}=ctx.request.fields;
    try{
      await ctx.db.query('UPDATE profiles SET ID=?,type=?,describe=?,income=?,extend=?,cash=?,remark=?,date=? WHERE ID=?;',[id,type,describe,income,extend,cash,remark,date,id]);
      ctx.body="success";
    }catch(e){
      console.log(e);
    }
    
    
  }
});
//删除
router.post('/delete/:id',async ctx=>{
  let {id}=ctx.params;
  console.log(id);
  await ctx.db.query(`DELETE FROM profiles WHERE ID=${id}`);
  let datas=await ctx.db.query(`SELECT * FROM profiles`);
  ctx.body=datas;
})
//获取全部的数据
router.get('/getfields',async ctx=>{

  try{
    let datas=await ctx.db.query(`SELECT * FROM profiles`);
    if(datas.length<=0){
      ctx.throw(400,"没有任何内容");
    }else{
      ctx.body=datas;
    }
  }catch(e){
    console.log(e);
  }
});
//获取单个数据
router.get('/getfields/:id',async ctx=>{

  let {id}=ctx.params;
  let datas=await ctx.db.query(`SELECT * FROM profiles WHERE ID=${id}`);
  if(datas.length==0){
    ctx.throw(400,"没有任何内容");
  }else{
    ctx.body=datas;
  }

})

module.exports=router.routes();