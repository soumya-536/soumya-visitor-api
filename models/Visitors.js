const mongoose = require('mongoose')

const VisitorSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        unique: true 
    },
    name: String
}, { timestamps: true });

VisitorSchema.pre('save', async function (next) {
    if (!this.id) {
        const lastVisitor = await Visitor.findOne().sort('id');
        this.id = lastVisitor ? lastVisitor.id + 1 : 1;
    }
    next();
});
const Visitor = mongoose.model('Visitor', VisitorSchema);