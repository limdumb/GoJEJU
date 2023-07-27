import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import StoreDetailView from "./pages/StoreDetailView";
import LoginView from "./pages/auth/LoginView";
import MainView from "./pages/MainView";
import MyPageView from "./pages/mypage/MyPageView";
import SignUpView from "./pages/auth/SignUpView";
import StoreSuggestView from "./pages/StoreSuggestView";
import StoreSearchView from "./pages/StoreSearchView";
import UserSignUpView from "./pages/auth/UserSignUpView";
import OwnerSignUpView from "./pages/auth/OwnerSignUpView";
import OwnerNormerSignUpView from "./pages/auth/OwnerNormelSignUpView";
import UserNormalSignUpView from "./pages/auth/UserNormalSignUpView";
import LEICodeView from "./pages/auth/LEICodeView";
import FavoritView from "./pages/mypage/FavoritView";
import MyReview from "./pages/mypage/MyReview";
import OwnerEditStoreView from "./pages/mypage/OwnerEditStoreView";
import OwnerAddStoreView from "./pages/mypage/OwnerAddStoreView";
import ReviewPostView from "./pages/ReviewPostView";
import ReviewEditView from "./pages/ReviewEditView";

export type RootStackParamList = {
  MainView: undefined;
  StoreDetailView: {
    storeId: number;
    name: string;
  };
  LoginView: undefined;
  SignUpView: undefined;
  RoleSelectionView: undefined;
  MyPageView: undefined;
  StoreSuggestView: undefined;
  StoreSearchView: undefined;
  UserSignUpView: { role: "일반 사용자" | "점주 사용자" };
  OwnerSignUpView: { role: "일반 사용자" | "점주 사용자" };
  OwnerNormalSignUpView: { role: "일반 사용자" | "점주 사용자" };
  UserNormalSignUpView: { role: "일반 사용자" | "점주 사용자" };
  LEICodeView: { email: string; password: string };
  FavoritView: undefined;
  MyReview: undefined;
  OwnerEditStoreView: undefined;
  OwnerAddStoreView: undefined;
  ReviewPostView: { storeId: number, name: string };
  ReviewEditView: {
    storeId: number;
    reviewText: string;
    images: string[];
    rating: number;
  };
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
        <Stack.Screen
          name="OwnerNormalSignUpView"
          component={OwnerNormerSignUpView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserNormalSignUpView"
          component={UserNormalSignUpView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LEICodeView"
          component={LEICodeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavoritView"
          component={FavoritView}
          options={{ title: "즐겨찾기 목록" }}
        />
        <Stack.Screen
          name="MyReview"
          component={MyReview}
          options={{ title: "내가 작성한 리뷰" }}
        />
        <Stack.Screen
          name="OwnerEditStoreView"
          component={OwnerEditStoreView}
          options={{ title: "사장님 수정 페이지" }}
        />
        <Stack.Screen
          name="OwnerAddStoreView"
          component={OwnerAddStoreView}
          options={{ title: "가계 등록 페이지" }}
        />
        <Stack.Screen
          name="ReviewPostView"
          component={ReviewPostView}
          options={{ title: "리뷰 등록" }}
        />
        <Stack.Screen
          name="ReviewEditView"
          component={ReviewEditView}
          options={{ title: "리뷰 수정" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
