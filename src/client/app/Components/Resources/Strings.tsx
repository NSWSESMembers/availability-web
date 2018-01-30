import LocalizedStrings from 'react-localization';

const portalTitle_en = "SES Availability";

const strings = new LocalizedStrings({
    en: {
        general_brand: portalTitle_en,
        header_link_groups: "Groups",
        header_link_requests: "Requests",
        header_link_reports: "Reports",
        dashboard_pageTitle: "Dashboard" + " | " + portalTitle_en,
        requests_pageTitle: "Requests" + " | " + portalTitle_en,
        requests_title: "Requests",
        requests_button_newRequest: "New Request",
        requests_tableHeader_name: "Name",
        requests_tableHeader_group: "Group",
        requests_tableHeader_capability: "Capability",
        requests_tableHeader_priority: "Priority",
        requests_tableHeader_startDate: "Start Date",
        requests_tableHeader_endDate: "End Date",
        editRequest_pageTitle: "Request Details" + " | " + portalTitle_en,
    }
});

export default strings;