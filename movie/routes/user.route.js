const {Router} = require('express')
const {Usignup, Udelete, Ulogin, Home,userss } = require('../controllers/user.controller')
const { signupmiddle, signinmiddle } = require('../middleware/user.middleware')
const userRouter = Router()

// user 
userRouter.get('/',Home)
userRouter.post('/user/signup',Usignup)
userRouter.post('/user/login',signinmiddle,Ulogin)
userRouter.delete('/user/delete/:id',Udelete)
userRouter.get('/user/',userss)

module.exports = {userRouter}