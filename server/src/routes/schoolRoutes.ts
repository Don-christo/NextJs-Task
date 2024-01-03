import { Router } from "express";
import { addSchool, showSchools } from "../controllers/schoolsController";

const router = Router();

router.post("/addSchool", addSchool);
router.get("/showSchools", showSchools);

export default router;