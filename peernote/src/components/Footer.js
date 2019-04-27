import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

class FooterBar extends Component {
  render() {
    return (
      <Footer style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <FooterTab>
          <Button onPress={this.props.addUserComments}>
            <Text>Add User Comments</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterBar;
