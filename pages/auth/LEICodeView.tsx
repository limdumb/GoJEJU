import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import AuthLogo from "../../components/AuthLogo";

type RouteType = NativeStackScreenProps<RootStackParamList, "LEICodeView">;

export default function LEICodeView({route}:RouteType){

  return(<View>
    <AuthLogo/>
    
  </View>)
}