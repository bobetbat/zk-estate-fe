import type { Hash } from '../types';
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export type UseContractHook = [
  write: (() => void) | undefined,
  hash: Hash | undefined,
  success: boolean,
  loading: boolean,
  error: string | undefined,
];

export const useContractFunction = (
  functionConfig: any,
): UseContractHook => {
  // const [contract, setContract] = useState<ethers.Contract | undefined>();
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | undefined>(undefined);

  const { config } = usePrepareContractWrite(functionConfig)

  //Call contract hook
  const {
    data,
    write,
    isLoading: loading,
    isSuccess: success,
    error,
  } = useContractWrite(config);

  return [write, data?.hash, success, loading, error?.message];
}

