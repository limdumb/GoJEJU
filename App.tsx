import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import CafeDetailView from "./pages/CafeDetailView";
import LoginView from "./pages/LoginView";
import MainView from "./pages/MainView";
import MyPageView from "./pages/MyPageView";
import RoleSelectionView from "./pages/RoleSelectionView";
import SignUpView from "./pages/SignUpView";
import CafeSuggestView from "./pages/CafeSuggestView";
import CafeSearchView from "./pages/CafeSearchView";

export type RootStackParamList = {
  MainView: undefined;
  CafeDetailView: { cafeName: string };
  LoginView: undefined;
  SignUpView: undefined;
  RoleSelectionView: undefined;
  MyPageView: undefined;
  CafeSuggestView: undefined;
  CafeSearchView: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CafeDetailView"
          component={CafeDetailView}
          options={({ route }) => ({ title: route.params.cafeName })}
        />
        <Stack.Screen
          name="LoginView"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpView"
          component={SignUpView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoleSelectionView"
          component={RoleSelectionView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyPageView"
          component={MyPageView}
          options={{ title: "마이 페이지" }}
        />
        <Stack.Screen
          name="CafeSuggestView"
          component={CafeSuggestView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CafeSearchView"
          component={CafeSearchView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
