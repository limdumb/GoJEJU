import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

interface AuthButtonProps {
  children: string;
  pressFunction: () => void;
}

export default function AuthButton(props: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => { props.pressFunction}}
    >
      <CustomText children={props.children} color={"#569576"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#56C38D",
    borderRadius: 10,
  },
});
