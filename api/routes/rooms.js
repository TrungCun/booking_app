import  express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.send('testtt router')
})

export default router