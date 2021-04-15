import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

import { axiosInstance } from '../../axios/axios-instance';

import { State } from './use-get.types';

export const useGet = <R = any>(url: string = '') => {
  const [requestUrl, setRequestUrl] = useState<string>(url);
  const [state, setState] = useState<State<R>>({
    results: null,
    hasError: false,
    isLoading: false,
  });

  const updateState = (newState: Partial<State<R>>) =>
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));

  useEffect(() => {
    let didCancel = false;

    const get = async () => {
      if (requestUrl) {
        updateState({
          isLoading: true,
          hasError: false,
        });

        try {
          const response: AxiosResponse<R> = await axiosInstance.get(requestUrl);

          if (!didCancel && response?.status === 200) {
            updateState({
              hasError: false,
              isLoading: false,
              results: response.data,
            });
          } else {
            throw new Error('Status not 200');
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
  }, [requestUrl]);

  return [{ state, setRequestUrl }];
};
