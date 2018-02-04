import uuidv4 from 'uuid/v4';

const requests = [
    {
        details: {
            key: '930127C2-BD1D-44B8-9FBA-7CFFAC88797B',
            name: "Kiama Storm Event",
            groupTitle: "Kiama",
            capabilityTitle: "Food Rescue 1",
            priorityTitle: "High",
            startDate: "2018-01-26T00:00:00+10:00",
            endDate: "2018-01-28T00:00:00+10:00"
        },
        people: [
            {
                key: "0DC1211F-EE20-4347-B2A4-83A3F2A98A99",
                name: "ClarK Kent",
                availability: [
                    {
                        dayIndex: 1,
                        schedule: null
                    },
                    {
                        dayIndex: 2,
                        schedule: null
                    },
                    {
                        dayIndex: 3,
                        schedule: null
                    },
                    {
                        dayIndex: 4,
                        schedule: null
                    },
                    {
                        dayIndex: 5,
                        schedule: [
                            { time: "ALL_DAY", flag: "0" }
                        ]
                    },
                    {
                        dayIndex: 6,
                        schedule: [
                            { time: "09:00AM - 05:00PM", flag: "0" }
                        ]
                    },
                    {
                        dayIndex: 7,
                        schedule: [
                            { time: "ALL_DAY", flag: "0" }
                        ]
                    }
                ]
            },
            {
                key: "64352395-A31A-499D-B737-96C7278C7F70",
                name: "Lois Lane",
                availability: [
                    {
                        dayIndex: 1,
                        schedule: null
                    },
                    {
                        dayIndex: 2,
                        schedule: null
                    },
                    {
                        dayIndex: 3,
                        schedule: null
                    },
                    {
                        dayIndex: 4,
                        schedule: null
                    },
                    {
                        dayIndex: 5,
                        schedule: [
                            { time: "ALL_DAY", flag: "1" }
                        ]
                    },
                    {
                        dayIndex: 6,
                        schedule: [
                            { time: "ALL_DAY", flag: "1" }
                        ]
                    },
                    {
                        dayIndex: 7,
                        schedule: null
                    }
                ]
            },
            {
                key: "D9FCF2AD-0FAA-45F0-BEC3-4C4505311EBA",
                name: "Bruce Wayne",
                availability: [
                    {
                        dayIndex: 1,
                        schedule: null
                    },
                    {
                        dayIndex: 2,
                        schedule: null
                    },
                    {
                        dayIndex: 3,
                        schedule: null
                    },
                    {
                        dayIndex: 4,
                        schedule: null
                    },
                    {
                        dayIndex: 5,
                        schedule: [
                            { time: "ALL_DAY", flag: "1" }
                        ]
                    },
                    {
                        dayIndex: 6,
                        schedule: [
                            { time: "09:00AM - 12:00PM", flag: "2" }
                        ]
                    },
                    {
                        dayIndex: 7,
                        schedule: [
                            { time: "12:00AM - 05:00AM", flag: "2" },
                            { time: "09:00PM - 12:00PM", flag: "2" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        details: {
            key: 'F0166023-3BC0-450A-BC20-A99C821EEAD4',
            name: "Kiama RCR",
            groupTitle: "Kiama",
            capabilityTitle: "Firsd Aid, Chainsaw",
            priorityTitle: "Medium",
            startDate: "2018-01-28T00:00:00+10:00",
            endDate: "2018-02-28T00:00:00+10:00"
        },
        people: []
    },
    {
        details: {
            key: '65A38C47-7229-4298-81C9-996907EA44FA',
            name: "Kiama Training",
            groupTitle: "Kiama",
            capabilityTitle: "",
            priorityTitle: "Low",
            startDate: "2018-01-15T00:00:00+10:00",
            endDate: "2018-01-17T00:00:00+10:00"
        },
        people: []
    }
]

export default requests;