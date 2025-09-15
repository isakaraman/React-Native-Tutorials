import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoardScreen from "./screens/DashBoard";
import SettingsScreen from "./screens/SettingsScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
          //tabBarLabelPosition: "beside-icon",
          tabBarStyle: { backgroundColor: "#fff4f4ff" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{
            title: "My DashBoard",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={CourseListScreen}
          options={{
            title: "My Courses",
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "My Settings",
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
            tabBarBadge: 3,
            tabBarBadgeStyle: { backgroundColor: "purple", color: "white" },
          }}
        />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            title: "About Stack",
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
