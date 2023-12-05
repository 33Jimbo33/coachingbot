import mongoose from "mongoose";
const {Schema} = mongoose;

const BusinessModelSchema = new Schema({
    customerSegments: String,
    customerProblems: String,
    triggers: String,
    existingAlternatives: String,
    valueProposition: String,
    solution: String,
    channels: String,
    revenuePlan: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("BusinessModel", BusinessModelSchema);