import { LogBox } from "react-native";


export const IgnoreWaring = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
}
