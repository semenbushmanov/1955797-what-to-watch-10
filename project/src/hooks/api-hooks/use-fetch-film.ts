import { useState, useCallback, useEffect } from 'react';
import { useIsAlive } from './use-is-alive';
import { RequestStatus, APIRoute } from '../../const';
import { api } from '../../services/api';
import { Film } from '../../types/film';

export const useFetchFilm = (id: string | undefined) => {
  const [film, setFilm] = useState<Film | undefined>();
  const [status, setStatus] = useState(RequestStatus.NotStarted);
  const isAlive = useIsAlive();

  const fetch = useCallback(async () => {
    if (id) {
      setStatus(RequestStatus.Loading);

      const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);

      if (isAlive.current) {
        if (data) {
          setFilm(data);
          setStatus(RequestStatus.Success);
        } else {
          setStatus(RequestStatus.Error);
        }
      }
    }
  }, [isAlive, setFilm, setStatus, id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [film, status] as const;
};
