import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import MyProfile from "../containers/MyProfileContainer";
import Settings from "../containers/SettingsContainer";
import Modal from "../containers/ModalContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
    MyProfile: { screen: MyProfile },
    Modal: { screen: Modal },
  },
  {
    initialRouteName: "MyProfile", // Change to Home
    contentComponent: props => <SideBar {...props} />
  }
);
