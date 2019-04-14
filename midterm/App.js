import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>YASIR</Title>
          </Left>
          <Body>
           
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            experience: Fresh
            Education:
            Matric: The Karachi Boys Academy
            College: SM science College
            University : Maju
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>email: M.YASIR SHAKIL</Text>
              <Text>PHONENO: 03343015140</Text>
              
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}