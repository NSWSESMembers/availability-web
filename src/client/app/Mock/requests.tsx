import uuidv4 from 'uuid/v4';

const requests = [
    {
        key: uuidv4(),
        name: "Kiama Storm Event",
        groupTitle: "Kiama",
        capabilityTitle: "Food Rescue 1",
        priorityTitle: "High",
        startDate: "22 Jan 2018",
        endDate: "28 Jan 2018"
    },
    {
        key: uuidv4(),
        name: "Kiama RCR",
        groupTitle: "Kiama",
        capabilityTitle: "Firsd Aid, Chainsaw",
        priorityTitle: "Medium",
        startDate: "28 Jan 2018",
        endDate: "28 Feb 2018"
    },
    {
        key: uuidv4(),
        name: "Kiama Training",
        groupTitle: "Kiama",
        capabilityTitle: "",
        priorityTitle: "Low",
        startDate: "04 Feb 2018",
        endDate: "06 Feb 2018"
    }
]

export default requests;