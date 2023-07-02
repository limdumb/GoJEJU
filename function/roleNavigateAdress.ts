// 7일 12시 14분 점심시간 => rold에 따라 Navigate되는 URL을 Return하는 함수

export default function roleNavigateAdress (role: '일반 사용자' | '점주 사용자') {
  return role === '일반 사용자'
    ? 'UserNormalSignUpView'
    : 'OwnerNormalSignUpView'
}
