import React from 'react';
import Header from './components/Header';
import { Container } from 'native-base';
import Footer from './components/Footer';
import Textbox from './components/Textbox';

function Shell(props) {
  return (
    <Container style={{ flex: 1 }}>
      <Header content={'PeerNote'} />
      <Textbox word={'Keyword Input'} />
      <Footer />
    </Container>
  );
}

export default Shell;
