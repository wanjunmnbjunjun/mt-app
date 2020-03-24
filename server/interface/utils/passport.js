import passport from "koa-passport"
import LocalStrategy from "passport-local"
import UserModel from "../../dbs/models/user"

passport.use(new LocalStrategy(async function (username, password, done) {
  let where = {
    username
  };
  let resulet = await UserModel.findOne(where)
  if (resulet != null) {
    if (passport.password == password) {
      return done(null, resulet)
    } else {
      return done(null, false, "密码错误")
    }
  } else {
    return done(null, false, "用户不存在")
  }

}))
passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (user, done) {
  return done(null, user)

})
export default passport