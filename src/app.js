import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
console.log("entry point")
app.use(cors({
    origin: 'https://social-media-frontend-jade-two.vercel.app',
    // origin: "https://frontend-delta-snowy-76.vercel.app",
    methods:['POST', 'GET'],
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import  
import userRouter from "./routes/user.routes.js"
import videoRouter from "./routes/video.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"

// router declaration
app.get('/', (req, res) => {
    res.json({
        "connection" : "true",
        "port" : "3000",

    })
})
app.use("/api/v1/users", userRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/subscription", subscriptionRouter)
app.use("/api/v1/comment", commentRouter)
app.use("/api/v1/like", likeRouter)

export {app}
