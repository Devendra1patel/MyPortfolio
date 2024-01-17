

import express from 'express';
import Project_model from '../models/project.js'
const router = express.Router();


router.get('/getallproject',async (req,res)=>{
    try {
        const project = await Project_model.find();
        res.json(project);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
.post('/update',async (req, res) => {
    try {
        
      const project = await Project_model.findOneAndUpdate(
        { _id: req.body._id },
        { $set: req.body },
        { new: true }
      );
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
.post('/create', async (req, res) => {
    try {
      const project = await Project_model.create(req.body);
      console.log(req.body);
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
.delete('/delete/:id', async (req, res) => {
    await Project_model.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  })
.post('/find',async (req,res)=>{
  console.log(req.body);
    try {
        const project = await Project_model.findOne({_id:req.body._id});
        res.json(project);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

export default router;
