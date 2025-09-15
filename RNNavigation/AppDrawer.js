import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashBoardScreen from "./screens/DashBoard";
import SettingsScreen from "./screens/SettingsScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{
            title: "My DashBoard",
            drawerLabel: "DashBoard",
            drawerActiveTintColor: "blue",
            drawerActiveBackgroundColor: "lightgray",
            drawerContentStyle: { backgroundColor: "lightyellow" },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
