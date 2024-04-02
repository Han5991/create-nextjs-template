import type {Comment, Photo} from '@entities/photo/model';

const enum PhotoQueryKeys {
  Photos = 'photos',
  Comments = 'comments',
}

export const photoQueryKeys = {
  all: [PhotoQueryKeys.Photos] as const,
  photos: (photoId: Photo['id']) => [...photoQueryKeys.all, photoId] as const,
  comments: (photoId: Comment['id']) =>
    [...photoQueryKeys.photos(photoId), PhotoQueryKeys.Comments] as const,
};
