const express= require('express')
const {getLoansDetails}= require('../controller/loans.controller')
const loansRoutes = express.Router()

loansRoutes.get('/',getLoansDetails)

module.exports=loansRoutes;
