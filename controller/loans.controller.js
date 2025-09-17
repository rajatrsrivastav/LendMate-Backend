const users = [
   {
  "loan_id": 201,
  "borrower": { "id": 1, "name": "Amit Sharma" },
  "amount": 50000,
  "funded": 35000,
  "status": "active",
  "investors": [
    { "lender_id": 501, "amount": 10000 },
    { "lender_id": 502, "amount": 25000 }
  ]
}

];
const getLoansDetails=async(req,res)=>{
    try{
        return res.status(200).json(users)
    }catch(err){
        console.error('getLoansDetails error:', err)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports={
    getLoansDetails
}