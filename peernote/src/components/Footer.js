import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import {
  ShowMonitorTab,
  ShowAnalysisTab,
  ShowMapTab
} from '../actions/TabActions';

const mapState = state => ({
  ShowMonitor: state.tabs.ShowMonitor,
  ShowMap: state.tabs.ShowMap
});

const actions = {
  ShowMonitorTab,
  ShowMapTab
};

class FooterBar extends Component {
  render() {
    return (
      <Footer style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <FooterTab>
          <Button
            onPress={this.props.ShowMonitorTab}
            active={this.props.ShowMonitor}
          >
            <Text>Feature 1</Text>
          </Button>
          <Button onPress={this.props.ShowMapTab} active={this.props.ShowMap}>
            <Text>Feature 2</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default connect(
  mapState,
  actions
)(FooterBar);
