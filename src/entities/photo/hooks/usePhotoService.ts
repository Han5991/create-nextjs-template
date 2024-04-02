import {useSuspenseQuery} from '@tanstack/react-query';

import {photoQueryKeys} from '@entities/photo/hooks/querykeys';
import type {Photo} from '@entities/photo/model';
import {photoService} from '@entities/photo/service';

export const usePhotos = () => {
  const {data} = useSuspenseQuery({
    queryKey: photoQueryKeys.all,
    queryFn: () => photoService.getPhotos(),
  });

  return {
    data: data.slice(0, 20),
  };
};

export const usePhoto = (photoId: Photo['id']) => {
  const {data} = useSuspenseQuery({
    queryKey: photoQueryKeys.photos(photoId),
    queryFn: () => photoService.getPhoto(photoId),
  });

  return {
    photo: data,
  };
};

export const useComments = (photoId: Photo['id']) => {
  const {data} = useSuspenseQuery({
    queryKey: photoQueryKeys.comments(photoId),
    queryFn: () => photoService.getComments(photoId),
  });

  return {
    comment: data,
  };
};
