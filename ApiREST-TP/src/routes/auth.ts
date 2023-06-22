import { getCases, getCaseById, addCase, updateCase, updateVirus, deleteCase, getCasesByVirus, getCasesByAge, virusHasVaccine } from "../index";
import { Router } from 'express';
import { signup, signin, profile, testing } from '../controllers/auth'
import { TokenValidation } from '../libs/verifyToken'


const router: Router = Router()

router.get("/infection", getCases)

router.get("/infection/:id", getCaseById)

router.post("/infection", addCase)

router.put("/infection/:id", updateCase)

router.patch("/infection/:id", updateVirus)

router.delete("/infection/:id", deleteCase)

router.get("/infection/virus/:sciName", getCasesByVirus)

router.get("/infection/case/:age",getCasesByAge)

router.get("/infection/virus/:sciName/vaccine", virusHasVaccine)

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation, profile)
router.get('testing', TokenValidation, testing)


export default router;
