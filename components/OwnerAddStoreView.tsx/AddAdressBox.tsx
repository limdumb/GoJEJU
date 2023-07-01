import { StyleSheet, View } from "react-native";
import { EmdType } from "../../function/emdNameArray";
import AdressBox from "../AdressBox";
import CommonInput from "../CommonInput";
import CustomText from "../CustomText";

interface Props {
  emdArr: EmdType[];
  setAdressValue: React.Dispatch<React.SetStateAction<string>>;
  adressValue: string;
}

export default function AddAdressBox(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <CustomText marginLft="20px" fontWeight="bold" children="주소 등록" />
      </View>
      <View style={styles.adressBoxContainer}>
        {props.emdArr.map((el) => {
          return (
            <AdressBox
              name={el.name}
              adress={el.adress}
              adressValue={props.adressValue}
              setAdressValue={props.setAdressValue}
            />
          );
        })}
      </View>
      <View style={styles.adressInputContainer}>
        <CommonInput
          changeFunc={props.setAdressValue}
          type={"text"}
          width={"100%"}
          height={"40px"}
          value={props.adressValue}
          backgroundColor={"white"}
          border={"1px solid #CACACACA"}
          placeholder={"주소를 입력해주세요"}
          label={"상세주소를 입력해주세요"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
    paddingTop: 10,
    alignItems: "center",
  },
  titleSection:{alignItems:"flex-start",width:"100%"},
  adressBoxContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  adressInputContainer: {
    marginTop: 20,
    width: "90%",
  },
});
