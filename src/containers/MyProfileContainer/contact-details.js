import React, { Component } from "react";
import {
  Left, Right,
  Container, Header, Content, List, ListItem, View, Text, SwipeRow, Button, Icon } from "native-base";
// import styles from "./styles";

export default class ContactDetails extends Component {
  render() {
    const listItemStyle = { flex: 1, justifyContent: "space-between" };
    return (
      <View>
        <List>
          <ListItem style={listItemStyle}>
            <Text>Email</Text>
            <Text style={{ fontWeight: "bold" }}>liam.pitchford@ittf.com</Text>
          </ListItem>
          <ListItem style={listItemStyle}>
            <Text>Mobile</Text>
            <Text style={{ fontWeight: "bold" }}>079-76787215</Text>
          </ListItem>
          <ListItem style={listItemStyle}>
            <Text>Date of Birth</Text>
            <Text style={{ fontWeight: "bold" }}>04/09/1985</Text>
          </ListItem>
          <ListItem style={listItemStyle}>
            <Text>Postcode</Text>
            <Text style={{ fontWeight: "bold" }}>NW9 4ET</Text>
          </ListItem>
        </List>
      </View>
    );
  }
}
