import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import StoreDetailView from "./pages/StoreDetailView";
import LoginView from "./pages/LoginView";
import MainView from "./pages/MainView";
import MyPageView from "./pages/MyPageView";
import RoleSelectionView from "./pages/RoleSelectionView";
import SignUpView from "./pages/SignUpView";
import StoreSuggestView from "./pages/StoreSuggestView";
import StoreSearchView from "./pages/StoreSearchView";
import UserSignUpView from "./pages/UserSignUpView";
import OwnerSignUpView from "./pages/OwnerSignUpView";

export type RootStackParamList = {
  MainView: undefined;
  StoreDetailView: {
    name: string;
  };
  LoginView: undefined;
  SignUpView: undefined;
  RoleSelectionView: undefined;
  MyPageView: undefined;
  StoreSuggestView: undefined;
  StoreSearchView: undefined;
  UserSignUpView: undefined;
  OwnerSignUpView: undefined;
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
          name="StoreDetailView"
          component={StoreDetailView}
          options={({ route }) => ({ title: route.params.name })}
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
          name="StoreSuggestView"
          component={StoreSuggestView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StoreSearchView"
          component={StoreSearchView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserSignUpView"
          component={UserSignUpView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OwnerSignUpView"
          component={OwnerSignUpView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
