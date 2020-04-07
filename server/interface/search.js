import Router from "koa-router"

import axios from "./utils/axios"
import Poi from "../dbs/models/poi"

const router = new Router({
  prefix: "/search"

})

router.get('/top',async (ctx) =>{
  

  const {status,data:{top}} = await axios.get('http://cp-tools.cn/search/top',{
    params:{
      input: ctx.query.input,
    }
  })
  ctx.body ={
    province:status === 200?province:[]
  }
})



export default router