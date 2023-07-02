export interface EmdType {
    name: string;
    adress: string;
}

export const emdNameArray = ():EmdType[] => {
  const emdArr = [
    { name: "한경면", adress: "제주 제주시 한경면 " },
    { name: "한림읍", adress: "제주 제주시 한림읍 " },
    { name: "애월읍", adress: "제주 제주시 애월읍 " },
    { name: "제주시", adress: "제주 제주시 " },
    { name: "조천읍", adress: "제주 제주시 조천읍 " },
    { name: "구좌읍", adress: "제주 제주시 구좌읍 " },
    { name: "성산읍", adress: "제주 서귀포시 성산읍 " },
    { name: "표선면", adress: "제주 서귀포시 표선면 " },
    { name: "남원읍", adress: "제주 서귀포시 남원읍 " },
    { name: "서귀포시", adress: "제주 서귀포시 " },
    { name: "중문", adress: "제주 서귀포시 중문 " },
    { name: "안덕면", adress: "제주 서귀포시 안덕면 " },
    { name: "대정읍", adress: "제주 서귀포시 대정읍 " },
    { name: "우도면", adress: "제주 제주시 우도면 " },
  ];

  return emdArr;
};
