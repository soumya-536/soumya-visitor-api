const Visitors = require('../models/Visitors')
const Visits = require('../models/Visits')


// Get the Visitors list api and visits list
const getVisitors = () => {
    return [
        { id: 1, name: 'Name1' },
        { id: 2, name: 'Name2' },
        { id: 3, name: 'Name3' }
    ];
}

const getVisits = () => {
    return [
        { visitId: 1, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 1 },
        { visitId: 2, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 2 },
        { visitId: 3, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 3 },
        { visitId: 4, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 1 },
        { visitId: 5, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 2 },
        { visitId: 6, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 3 },
        { visitId: 7, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 1 },
        { visitId: 8, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 2 },
        { visitId: 9, startDateTime: 1663405200000, endDateTime: 1663408800000, visitorId: 3 }
    ];
}
// Get All Visitors Info API
const getAllVisits = (req, res) => {
    try {
        const visitors = getVisitors();
        const visits = getVisits();

        const visitsOfVisitors = [];

        for (let i = 0; i < visits.length; i++) {
            const visit = visits[i];
            let visitor = null;
            for (let j = 0; j < visitors.length; j++) {
                if (visitors[j].id === visit.visitorId) {
                    visitor = visitors[j];
                    break; 
                }
            }

            const visitorName = visitor.name;

            const duration = (visit.endDateTime - visit.startDateTime) / 60000;

            visitsOfVisitors.push({
                visitId: visit.visitId,
                startDateTime: visit.startDateTime,
                endDateTime: visit.endDateTime,
                visitorId: visit.visitorId,
                name: visitorName,
                duration: duration
            });
        }
        visitsOfVisitors.sort((a, b) => a.startDateTime - b.startDateTime);

        console.log(visitsOfVisitors)
        return res.json(visitsOfVisitors);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

getAllVisits(null, {
    json: (data) => console.log(data)
});


module.exports = { getAllVisits, getVisitors, getVisits};
