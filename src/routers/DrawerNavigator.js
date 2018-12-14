import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import Settings from "../containers/SettingsContainer";
import Modal from "../containers/ModalContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
    Modal: { screen: Modal },
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
);
