import React, { Component } from "react";
import Screen from "../../components/Screen";
import ContactDetails from "./contact-details";
import PlayerRanking from "./player-ranking";
import MyTeams from "./my-teams";
import { Thumbnail, Text, Body, Tab, Tabs } from "native-base";
// import styles from "./styles";

export default class MyProfileContainer extends Component {
  render() {
    const uri = "https://butterflyonline.com/wp-content/uploads/2017/11/pitchford-liam.jpg";
    return (
      <Screen navigation={this.props.navigation} title="My Profile">
        <Body>
          <Thumbnail source={{uri: uri}} style={{ alignSelf: "center", marginTop: 10, width: 150, height: 150 }}/>
          <Text>Liam Pitchford</Text>
        </Body>
        <Tabs>
          <Tab heading="Tab1">
            <ContactDetails />
          </Tab>
          <Tab heading="Tab2">
            <PlayerRanking />
          </Tab>
          <Tab heading="Tab3">
            <MyTeams />
          </Tab>
        </Tabs>
      </Screen>
    );
  }
}
