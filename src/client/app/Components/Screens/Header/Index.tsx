import * as React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import strings from '../../Resources/Strings';
import { mapDispatchToProps } from '../../StoreDefinitions';
import { getLogoutUrl } from '../../Utilities/AuthService';

class Header extends React.Component<any, any> {
    componentWillReceiveProps(nextProps) {
        const { globalNavigation } = nextProps;
        const { history } = this.props;
        if (globalNavigation.currentRoute !== this.props.globalNavigation.currentRoute) {
            const newLocation = {
                pathname: globalNavigation.currentRoute.route,
                search: globalNavigation.currentRoute.search
              }
            history.replace(newLocation);
        }
    }

    signOut = () => {
        window.location.assign(getLogoutUrl());
    }

    render() {
        const { setRoute, userInfo } = this.props;
        const { userDetails } = userInfo;

        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="javascript:void(0);" onClick={() => setRoute("/")}>{strings.general_brand}</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/groups">{strings.header_link_groups}</Link></li>
                        <li><Link to="/requests">{strings.header_link_requests}</Link></li>
                        <li><Link to="/reports">{strings.header_link_reports}</Link></li>
                        <li className="dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{userDetails.userFullName} <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="javascript:void(0);" onClick={() => this.signOut()} >{strings.header_menuItem_signOut}</a></li>
                                {/* <li><a href="#">Action 2</a></li>
                                <li><a href="#">Action 3</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Action 4</a></li> */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}

const mapStateToProps = (state) => {
    return {
        globalNavigation: state.navigation,
        userInfo: state.userInfo
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);