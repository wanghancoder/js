const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()

router.get('/', async ctx => {
    ctx.body = 'axios'
})

app.use(router.routes())
app.listen(9999)