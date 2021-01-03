const express = require("express")
const router = express.Router()
const auth = require('../helper/auth')
const PatientProfile = require("../models/PatientProfile")
const { check, validationResult } = require("express-validator")


//create new patient profile
//post profile api: /newpatient
router.post("/newpatient", [auth, [
    check("firstName", 'First Name is required').not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("dateOfBirth", "Date of birth is required").not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { firstName, lastName, dateOfBirth, pharmacy,
        insurance, policyId, medicineHistory, surgicalHistory } = req.body

    try {


        let newProfile = new PatientProfile({
            user: req.user.id,
            firstName,
            lastName,
            dateOfBirth,
            pharmacy,
            insurance,
            policyId,
            medicineHistory,
            surgicalHistory
        })
        await newProfile.save()
        res.json(newProfile)
    } catch (error) {
        console.log(error)
    }
})
//get all pts' profiles
router.get("/patients", auth, async (req, res) => {
    try {
        const allPatients = await PatientProfile.find({}, null, { sort: { lastName: 1 } })
     const patients = allPatients.filter(pt =>pt.user.toString()===req.user.id)
        res.json(patients)
    } catch (error) {
        console.log(error)
    }
}
)
//get single pt's profile
router.get("/patients/:id", auth, async (req, res) => {
    try {
        const patient = await PatientProfile.findById(req.params.id)
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" })
        }

        res.json(patient)
    } catch (error) {
        console.log(error)
    }
})
//delete pt's profile
router.delete("/patients/:id", auth, async (req, res) => {
    try {
        const post = await PatientProfile.findById(req.params.id)
        if (!post) {
            return res.json({ message: "Post not found" })
        }
        post.remove()
        res.json({ message: "Post Removed" })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router 