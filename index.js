import { KeepAwake, registerRootComponent } from "expo";
// import { AppRegistry } from "react-native";
import * as firebase from "firebase";
import App from "./src/boot";
import { firebase as firebaseConfig } from "./app.json";

if (__DEV__) {
  KeepAwake.activate();
}

firebase.initializeApp(firebaseConfig);

// AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
