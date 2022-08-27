import { useState, useCallback, useEffect } from 'react';
import { useIsAlive } from './use-is-alive';
import { APIRoute } from '../../const';
import { api } from '../../services/api';
import { Comments } from '../../types/film';

export const useFetchFilmComments = (id: string | undefined) => {
  const [comments, setComments] = useState<Comments>([]);
  const isAlive = useIsAlive();

  const fetch = useCallback(async () => {
    if (id) {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);

      if (isAlive.current) {
        if (data) {
          setComments(data);
        }
      }
    }
  }, [isAlive, setComments, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [comments] as const;
};
