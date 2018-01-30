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
        request_button_newRequest: "New Request"
    }
});

export default strings;