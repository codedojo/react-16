import React from 'react';

import './Tabs.css';

export default class Tabs extends React.Component {
    state = {
        activeTabIndex: 0
    };

    handleTabClick = tabIndex => this.setState({ activeTabIndex: tabIndex });

    render() {
        return (
            <div className="tabs">
                <nav className="tab-bar">
                    {React.Children.map(this.props.children, (tab, index) =>
                        React.cloneElement(tab, {
                            index,
                            active: index === this.state.activeTabIndex,
                            onClick: this.handleTabClick
                        }))
                    }
                </nav>

                <div className="tab-panel">
                    {this.props.children[this.state.activeTabIndex].props.children}
                </div>
            </div>
        );
    }
}