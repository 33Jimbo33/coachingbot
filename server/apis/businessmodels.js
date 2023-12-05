import { Router } from 'express';
import BusinessModel from '../models/BusinessModelmodel.js';

const router = Router();

router.get('/', async (req, res) => {
    const businessModels = await BusinessModel.find({}).sort({createdAt: -1});
    res.json(businessModels);
}
);

router.post('/', async (req, res) => {
    console.log(req.body);
    const {customerSegments, customerProblems, triggers, existingAlternatives, valueProposition, solution, channels, revenuePlan} = req.body;
    const newBusinessModel = new BusinessModel({
        customerSegments,
        customerProblems,
        triggers,
        existingAlternatives,
        valueProposition,
        solution,
        channels,
        revenuePlan
    });
    await newBusinessModel.save();
    res.json({message : "Success! Created new business model."});
});

export default router;