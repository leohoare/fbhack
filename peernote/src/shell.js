import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { Container } from 'native-base';
import Footer from './components/Footer';

const mapState = state => ({
  ShowMonitor: state.tabs.ShowMonitor,
  ShowMap: state.tabs.ShowMap
});

function Shell(props) {
  return (
    <Container style={{ flex: 1 }}>
      <Header content={'PeerNote'} />
      <Container
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
      <Footer />
    </Container>
  );
}

export default connect(mapState)(Shell);
