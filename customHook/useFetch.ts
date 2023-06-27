import { useEffect, useState } from 'react';

type FetchResponse<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
};

type FetchFunction<T> = () => Promise<T>;
// 데이터를 Fetch하는 함수를 받아서 useFetch에서 비동기 작업을 수행하고 반환함
// 타입은 외부에서 타입을 할당받아서 할당받은 타입에 맞춰서 데이터가 할당타입이거나 null인 유니온타입을 가지게됨 
function useFetch<T>(fetchFunction: FetchFunction<T>): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await fetchFunction();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, [fetchFunction]);

  return { data, error, isLoading };
}

export default useFetch;