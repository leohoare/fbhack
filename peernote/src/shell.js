import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { Container, ScrollView } from 'native-base';
import Footer from './components/Footer';
import Textbox from './components/Textbox';

const mapState = state => ({
  ShowMonitor: state.tabs.ShowMonitor,
  ShowMap: state.tabs.ShowMap
});

function Shell(props) {
  return (
    <Container style={{ flex: 1 }}>
      <Header content={'PeerNote'} />
      <ScrollView>
        {props.ShowMonitor && <Textbox word={'Keyword Input'} />}
      </ScrollView>
      <Footer />
    </Container>
  );
}

export default connect(mapState)(Shell);
