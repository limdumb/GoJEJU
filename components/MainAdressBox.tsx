import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

interface AdressBoxProps {
  name: string;
  adress: string;
  setAdressValue: React.Dispatch<React.SetStateAction<string>>;
  adressValue: string;
}

export default function MainAdressBox(props: AdressBoxProps) {
  const onAdressClicked = () => {
    props.setAdressValue(props.adress);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => onAdressClicked()}>
      <CustomText children={props.name} fontSize={"20px"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 85,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});