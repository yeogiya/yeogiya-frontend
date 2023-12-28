export interface CheckDuplicationProps {
  status: string;
  body: {
    duplicated: boolean;
  };
}

export interface FindIdResProps {
  status: string;
  body: {
    id: string;
  };
}

export interface WithdrawalReasonsProps {
  reason: string;
  detailedReason?: string;
}

export interface GoogleRes {
  name: string;
  id: string;
  email: string;
  picture: string;
}
