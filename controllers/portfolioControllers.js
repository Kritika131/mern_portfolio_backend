import { Intro ,About,Projects , Education ,Contact } from "../models/portfolioModel.js";
import { about, contacts, education, intro, projects } from "../../server/staticData.js";



export const getPortfolioData=async(req,res)=>{
  try{
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Projects.find();
    const contacts = await Contact.find();
    const educations = await Education.find();
    // console.log("intros ",intros);
    // console.log("abouts ",abouts);
    // console.log("projects ",projects);
    // console.log("contacts ",contacts);
    // console.log("educations ",educations);
    if(intros && abouts && projects && contacts && educations){
      res.status(200).json({intro:intros[0],about:abouts[0],projects:projects,contact:contacts[0],educations:educations})

    }
    else {
      res.status(401).json({success:false,msg:"data no be their!!"})
    }

  } catch(err){
       res.status(500).json({err,msg:"No data found!"})
       console.log("err ",err)
  }
}
export const createPortfolio= async (req,res)=>{
  try{
    const dbDoc = await About.find({})
    if(dbDoc) res.status(200).json({msg:"Data already added!!"})
    else if(intro && about && education && contacts && projects){
      const introDoc = await Intro.insertMany(intro)
      const aboutDoc = await About.insertMany(about)
      const educationDoc = await Education.insertMany(education)
      const contactDoc = await Contact.insertMany(contacts)
      const projectDoc =await Projects.insertMany(projects)
     //  const introDoc = await introData.save();
      console.log("introD ",introDoc)
      console.log("aboutDo ",aboutDoc)
      console.log("education ",educationDoc);
      console.log("contact ",contactDoc);
      console.log("project ",projectDoc);
      res.status(200).json({success:true,msg:"Data inserted successfully!"})
      
    } else{
      console.log("error");
    }
     
     
    } catch(err){
      // console.log("errintro ",err);
    res.status(400).json({success:false,msg:"data is already inserted!"})
    
  }
}

export const updateIntro = async(req,res)=>{
  try{
    const introDoc = await Intro.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.status(200).json({
      data:introDoc,
      success:true,
      msg:"Intro updated successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while updating!",error})
    }
}
export const updateAbout = async(req,res)=>{
  try{
    const aboutDoc = await About.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.status(200).json({
      data:aboutDoc,
      success:true,
      msg:"About updated successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while updating!",error})
    }
}

export const addEducation = async(req,res)=>{
  try{
    const education = await new Education(req.body)
    const educationDoc = await education.save() 
    res.status(200).json({
      data:educationDoc,
      success:true,
      msg:"Education added successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while adding!",error})
    }
}

export const updateEducation = async(req,res)=>{
  try{
    const educationDoc = await Education.findOneAndUpdate(
    {_id:req.body._id},
    req.body,
    {new:true}
    );
    
    res.status(200).json({
      data:educationDoc,
      success:true,
      msg:"Education updated successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while updating!",error})
    }
}
export const deleteEducation = async(req,res)=>{
  const {id} = req.params;
  // console.log("req.body ",id);
  try{
    const educationDoc = await Education.findByIdAndDelete(
    id,
    {new:true}
    );
    
    if(educationDoc){
      res.status(200).json({ 
        data:educationDoc,
        success:true,
        msg:"Education deleted successfully!🙂"
      })

    } else {
      res.status(500).json({status:false,msg:"some error occurs while deleting! from db",error})
      
    }
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while deleting!",error})
  }
}

export const addProject = async(req,res)=>{
  try{
    const project = await new Projects(req.body)
    const projectDoc = await project.save() 
    res.status(200).json({
      data:projectDoc,
      success:true,
      msg:"Project added successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while adding!",error})
    }
}
export const updateProject = async(req,res)=>{
  try{
    const projectDoc = await Projects.findOneAndUpdate(
    {_id:req.body._id},
    req.body,
    {new:true}
    );
    
    res.status(200).json({
      data:projectDoc,
      success:true,
      msg:"Project updated successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while updating!",error})
    }
}
export const deleteProject = async(req,res)=>{
  const {id} = req.params;
  try{
    const projectDoc = await Projects.findByIdAndDelete(
    id,
        {new:true}
    );
    
    res.status(200).json({
      data:projectDoc,
      success:true,
      msg:"Project deleted successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while deleting!",error})
    }
}

export const updateContact = async(req,res)=>{
  try{
    const contactDoc = await Contact.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.status(200).json({
      data:contactDoc,
      success:true,
      msg:"Contact updated successfully!🙂"
    })
    
  }catch(error){
    
    res.status(500).json({status:false,msg:"some error occurs while updating!",error})
    }
}