import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
import usersRoute from "./api/routes/users.js"

const app = express();
dotenv.config();

const connect = async () => {
  try {
      console.log("conn to db");
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};
app.get('/', (req, res) => {
  res.send("hello")
})

//middleware
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/users', usersRoute)


app.listen(3000, () => {
  connect();
  console.log("conn to backend");
});
