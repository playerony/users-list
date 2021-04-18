import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

import { axiosInstance } from '../../axios/axios-instance';

import { State } from './use-get.types';

export const useGet = <ResultsType>(url: string = ''): State<ResultsType> => {
  const [state, setState] = useState<State<ResultsType>>({
    results: null,
    hasError: false,
    isLoading: false,
  });

  const updateState = (newState: Partial<State<ResultsType>>): void =>
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));

  useEffect(() => {
    let didCancel = false;

    const get = async () => {
      if (url) {
        updateState({
          isLoading: true,
          hasError: false,
        });

        try {
          const response: AxiosResponse<ResultsType> = await axiosInstance.get(url);

          if (!didCancel && response?.status === 200) {
            updateState({
              hasError: false,
              isLoading: false,
              results: response.data,
            });
          } else {
            throw new Error('Status is not 200');
          }
        } catch (error) {
          if (!didCancel) {
            updateState({
              hasError: true,
              isLoading: false,
            });
          }
        }
      }
    };

    get();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
};
