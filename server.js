const express = require('express')
const cors = require('cors')
const authRoutes=require('./routes/auth.routes')
const userRoutes=require('./routes/user.routes')
const loansRoutes = require('./routes/loans.routes')

const PORT = process.env.PORT || 3000;
const app= express()

app.use(express.json());
// Enable CORS for local development
app.use(cors({ origin: ['http://localhost:5173'], credentials: false }));

app.get('/',(req,res)=>{
    res.status(200).json({"Message":"Sever is running"});
})
app.use('/api/v1/auth',authRoutes)

app.use('/api/v1/users',userRoutes)

app.use('/api/v1/loans',loansRoutes)


app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})