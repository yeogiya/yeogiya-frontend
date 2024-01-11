import { postWithdraw } from "@/apis/user";
import { WithdrawalReasonsProps } from "@/types/users";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export const useWithdraw = (
  options?: UseMutationOptions<
    unknown,
    unknown,
    WithdrawalReasonsProps,
    unknown
  >
) => {
  return useMutation({
    mutationFn: ({ reason, detailedReason }: WithdrawalReasonsProps) =>
      postWithdraw({ reason, detailedReason }),
    ...options,
  });
};
