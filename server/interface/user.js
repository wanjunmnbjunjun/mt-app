import Router from "koa-router"
import Redis from "koa-redis"
import nodeMailer from "nodemailer"

import User from "../dbs/models/user"
import Passport from "./utils/passport"
import Email from "../dbs/config"
import axios from "./utils/axios"

const router = new Router({
  prefix: "/users"

})
let Store = new Redis().client

router.post("/sinup", async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, "code")
    const saveExprice = await Store.hget(`nodemail:${username}`, "exprice")
    if (code === saveCode) {
      if (new Date().getTime() - saveExprice > 0) {
        ctx.body = {
          code: "-1",
          msy: "验证码已过期,请重新尝试"
        }
        return false
      }
    } else {
      ctx.body = {
        code: "-1",
        msy: "请填写正确的验证码"
      }
      return false
    }
  } else {
    ctx.body = {
      code: "-1",
      msy: "请填写验证码"
    }
    return false
  }
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body({
      code: "-1",
      msg: "已被注册"
    })
    return false
  }
  let nuser = await User.create({
    email,
    username,
    email
  })
  if (nuser) {
    let res = await axios.post('/user/signin', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功",
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "err"
      }

    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    }

  }

})
router.post("/verify", async (ctx, next) => {
  let username = ctx.request.body.username
  const saveExprice = await Store.hget(`nodemail:${username}`, "expire")
  if (saveExprice && new Date().getTime - saveExprice < 0) {
    ctx.body = {
      code: -1,
      msg: "验证请求过于频繁，一分钟一次"
    }
    return false
  }
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    username: ctx.request.body.username
  }
  let mailOptions = {
    from:`"认证邮件"<${Email.smtp.user}>`,
    to:ko.email,
    subject:"《高仿美团网全栈实战》注册码",
    html: `您在《高仿美团网全栈实战》课程中注册，您的邀请码是${ko.code}`

  }
  await transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log('err')
    }else{
      Store.hmsetset(`nodemail:${ko.user}`,"code",ko.code,"expire",ko.expire,"email",ko.email)
    }
  })
  ctx.body={
    code:0,
    msg:"验证码已发送，可能会有延时，有效期1分钟"
  }

})
router.get("/exit",async (ctx)=>{
  ctx.logout()
  if(!ctx.isAuthenticated()){
    ctx.body={
      code: 0
    }
  }else{
    ctx.body={
      code: -1
    }
  }
})
router.get('getUser',async (ctx) =>{
  if(ctx.isAuthenticated()){
    const {username,email} = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  }else{
    ctx.body = {
      user: '',
      email: ""
    }
  }

})
export default router

