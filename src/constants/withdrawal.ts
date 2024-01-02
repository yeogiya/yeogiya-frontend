export const WITHDRAWAL_GUIDES = [
  { id: 0, text: "1. 탈퇴할 경우 계정 복구는 어렵습니다." },
  { id: 1, text: "2. 그 동안 작성된 일기는 모두 삭제됩니다." },
  { id: 2, text: "3. 회원탈퇴 후 3개월 동안 재가입이 불가능합니다." },
] as const;

export const WITHDRAWAL_REASONS = [
  { id: "privacy", text: "정보유출에 대한 불안함" },
  { id: "inconvenience", text: "사이트 디자인이 너무 불편함" },
  { id: "noNeed", text: "일기의 필요성을 느끼지 못해서" },
] as const;
