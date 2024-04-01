import {useSuspenseQuery} from '@tanstack/react-query';

import {photoQueryKeys} from '@entities/photo/hooks/querykeys';
import type {Comment, Photo} from '@entities/photo/model';
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
    queryKey: photoQueryKeys.detail(photoId),
    queryFn: () => photoService.getPhoto(photoId),
  });

  return {
    photo: data,
  };
};

export const useComments = (photoId: Photo['id']) => {
  const {data} = useSuspenseQuery({
    queryKey: photoQueryKeys.detailComments(photoId),
    queryFn: () => photoService.getComments(photoId),
  });

  return {
    comment: data,
  };
};

export const useComment = ({
  photoId,
  commentId,
}: {
  photoId: Photo['id'];
  commentId: Comment['id'];
}) => {
  const {data} = useSuspenseQuery({
    queryKey: photoQueryKeys.detailComment({photoId, commentId}),
    queryFn: () => photoService.getComment({photoId, commentId}),
  });

  return {
    data,
  };
};
