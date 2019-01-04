import React, { Component } from "react";
import Screen from "../../components/Screen";
import { Text } from "native-base";

export default class HomeContainer extends Component {
  render() {
    return (
      <Screen navigation={this.props.navigation} title="Home">
        <Text style={{ alignSelf: "center", marginTop: 10}}>Here goes the home screen</Text>
      </Screen>
    );
  }
}

