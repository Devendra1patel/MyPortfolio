import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:String,
    name:String,
    description:String,
    tech:[],
    pic:[],
    video:String
});
const ProjectModel = mongoose.model('ProjectModel', projectSchema);
export default ProjectModel;
