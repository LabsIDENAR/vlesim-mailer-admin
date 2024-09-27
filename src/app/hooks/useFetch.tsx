import {useEffect, useState} from "react";

interface BodyData {
  [key: string]: string | number | boolean | BodyData
}

interface UseFetchParams {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyData
}

export function useFetch<T>({path, method, body}: UseFetchParams) {
  const [data, setData] = useState<T | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<Error | null>();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(path, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && {Authorization: `Bearer ${token}`}),
        },
        ...(body && {body: JSON.stringify(body)}),
      });

      if (!response.ok) {
        setErrorMessage(new Error(`Failed to fetch data from ${path}`));
        throw new Error(`Failed to fetch data from ${path}`);
      }

      const data = await response.json();
      setData(data);
      setIsLoading(false);
      setErrorMessage(null);
    };

    fetchData();
  }, [body, method, path, token]);

  return {data, isLoading, errorMessage};
}