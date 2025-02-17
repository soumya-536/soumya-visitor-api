const mongoose = require('mongoose')

const VisitSchema = new mongoose.Schema({
    visitId: {
         type: Number,
          unique: true 
        },
    startDateTime: {
        type: Number
    },
    endDateTime: {
        type: Number
    },
    visitorId: {
        type: Number
}, 
},{ timestamps: true });

VisitSchema.pre('save', async function (next) {
    if (!this.visitId) {
        const lastVisit = await Visit.findOne().sort('id');
        this.visitId = lastVisit ? lastVisit.visitId + 1 : 1;
    }
    next();
});

const Visit = mongoose.model('Visit', VisitSchema);