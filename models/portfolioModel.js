import mongoose  from "mongoose";


const introSchema = new mongoose.Schema({
    welcomeText: {type:String,required:true},
    name:{type:String,required:true},
    caption:{type:String,required:true},
    description:{type:String,required:true}
})

const aboutSchema=new mongoose.Schema({
  lottie_url:{type:String, },
  description_1:{type:String, },
  description_2:{type:String},
  skills:{type:Array},

})

const educationSchema = new mongoose.Schema({
  title:{type:String,required:true},
  period:{type:String,required:true},
  percentage:{type:String,required:true},
  collage:{type:String},
  description:{type:String,},
})

const projectsSchema = new mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  image:{type:String},
  github_link:{type:String,required:true},
  deployed_link:{type:String,required:true},
  technologies:{type:Array,required:true}

})

const contactSchema = new mongoose.Schema({
  name:{type:String,required:true},
  gender:{type:String,required:true},
  email:{type:String,required:true},
  // age:{type:String, },
  mobile:{type:String,required:true},
  address:{type:String,required:true},
})
const Intro = mongoose.model('intro',introSchema) ;
const About = mongoose.model('about',aboutSchema) ;
const Education = mongoose.model('education',educationSchema);
const Projects = mongoose.model('project',projectsSchema)
const Contact = mongoose.model('contact',contactSchema)
export {
  Intro ,About,Education,Projects,Contact

}