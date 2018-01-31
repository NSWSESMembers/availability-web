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
        viewRequest_pageTitle: "Request Details" + " | " + portalTitle_en,
        requestDetails_add_pageTitle: "New Request" + " | " + portalTitle_en,
        requestDetails_edit_pageTitle: "Edit Request" + " | " + portalTitle_en,
        requestDetails_add_title: "New Request",
        requestDetails_label_name: "Name",
        requestDetails_hint_name: "Ex. John Smith",
        requestDetails_label_details: "Details",
        requestDetails_hint_details: "Request Details",
        requestDetails_label_group: "Group",
        requestDetails_label_hq: "Requesting HQ",
        requestDetails_label_priority: "Priority",
        requestDetails_label_type: "Type",
    }
});

export default strings;