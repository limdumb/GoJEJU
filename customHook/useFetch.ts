import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { baseInstance } from "../API/instance";

interface FetchResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

function useFetch<T>(endPoint: string): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result: AxiosResponse<T> = await baseInstance.get(endPoint);
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
      }
      setIsLoading(false);
    };

    fetchData();
  }, [endPoint]);

  return { data, error, isLoading };
}

export default useFetch;
