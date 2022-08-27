import { useState, useCallback, useEffect } from 'react';
import { useIsAlive } from './use-is-alive';
import { APIRoute } from '../../const';
import { api } from '../../services/api';
import { Films } from '../../types/film';

export const useFetchSimilarFilms = (id: string | undefined) => {
  const [similarFilms, setSimilarFilms] = useState<Films>([]);
  const isAlive = useIsAlive();

  const fetch = useCallback(async () => {
    if (id) {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);

      if (isAlive.current) {
        if (data) {
          setSimilarFilms(data);
        }
      }
    }
  }, [isAlive, setSimilarFilms, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [similarFilms] as const;
};
