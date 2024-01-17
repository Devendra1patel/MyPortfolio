import express from 'express';
// import userController from '../action/user';
import User from '../models/user.js';

const router = express.Router();

// Define user routes
// router.get('/users', userController.getAllUsers);
// router.get('/users/:userId', userController.getUserById);
// router.post('/users', userController.createUser);
// router.put('/users/:userId', userController.updateUser);
// router.delete('/users/:userId', userController.deleteUser);

router.get('/find',async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
.post('/update',async (req, res) => {
    try {
        
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body._id },
        { $set: req.body },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
.post('/create', async (req, res) => {
    try {
      const user = await User.create(req.body);
      console.log(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

export default router;
