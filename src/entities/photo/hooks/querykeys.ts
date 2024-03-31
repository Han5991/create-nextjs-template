import type {Comment, Photo} from '@entities/photo/model';

const enum PhotoQueryKeys {
  Photos = 'photos',
  Comments = 'comments',
}

type TDetailComment = {
  photoId: Photo['id'];
  commentId: Comment['id'];
};

export const photoQueryKeys = {
  all: [PhotoQueryKeys.Photos] as const,
  detail: (photoId: Photo['id']) => [...photoQueryKeys.all, photoId] as const,
  detailComments: (photoId: Comment['id']) =>
    [...photoQueryKeys.detail(photoId), PhotoQueryKeys.Comments] as const,
  detailComment: ({photoId, commentId}: TDetailComment) =>
    [...photoQueryKeys.detailComments(photoId), commentId] as const,
};
