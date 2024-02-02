import { Router } from "express";
import { addEducation, addProject, createPortfolio, deleteEducation, deleteProject, getPortfolioData, updateAbout, updateContact, updateEducation, updateIntro, updateProject } from "../controllers/portfolioControllers.js";


const router = Router();

router
  .get('/get-portfolio-data', getPortfolioData)
  .post('/create-portfolio',createPortfolio)
  .put('/update-intro',updateIntro)
  .put('/update-about',updateAbout)
  .post('/add-education',addEducation)
  .post('/add-project',addProject)
  .put('/update-education',updateEducation)
  .put('/update-project',updateProject)
  .put('/update-contact',updateContact)
  .delete('/delete-education/:id',deleteEducation)
  .delete('/delete-project/:id',deleteProject)

export default router;