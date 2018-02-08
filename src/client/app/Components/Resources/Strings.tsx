import LocalizedStrings from 'react-localization';

const portalTitle_en = "SES Availability";

const strings = new LocalizedStrings({
    en: {
        general_brand: portalTitle_en,
        general_weekday_monday: "Mon",
        general_weekday_tuesday: "Tue",
        general_weekday_wednesday: "Wed",
        general_weekday_thursday: "Thu",
        general_weekday_friday: "Fri",
        general_weekday_saturday: "Sat",
        general_weekday_sunday: "Sun",
        header_link_groups: "Groups",
        header_link_requests: "Requests",
        header_link_reports: "Reports",
        header_menuItem_signOut: "Sign Out",
        dashboard_pageTitle: "Dashboard" + " | " + portalTitle_en,
        requests_pageTitle: "Requests" + " | " + portalTitle_en,
        requests_title: "Requests",
        requests_button_newRequest: "New Request",
        requests_tableHeader_name: "Name",
        requests_tableHeader_type: "Type",
        requests_tableHeader_group: "Group",
        requests_tableHeader_capability: "Capability",
        requests_tableHeader_priority: "Priority",
        requests_tableHeader_startDate: "Start Date",
        requests_tableHeader_endDate: "End Date",
        requestDetails_add_pageTitle: "New Request" + " | " + portalTitle_en,
        requestDetails_edit_pageTitle: "Edit Request" + " | " + portalTitle_en,
        requestDetails_add_title: "New Request",
        requestDetails_label_name: "Name",
        requestDetails_hint_name: "e.g. Kiama GLR",
        requestDetails_label_details: "Details",
        requestDetails_hint_details: "Request Details",
        requestDetails_label_group: "Group",
        requestDetails_label_hq: "Requesting HQ",
        requestDetails_label_priority: "Priority",
        requestDetails_label_type: "Capability Type",
        requestDetails_label_capability: "Capability",
        requestDetails_label_startDate: "Start Date",
        requestDetails_label_endDate: "End Date",
        requestDetails_button_submit: "Submit Request",
        viewRequest_pageTitle: "Request Details" + " | " + portalTitle_en,
        viewRequest_link_addNewPerson: "Add New Person"
    }
});

export default strings;