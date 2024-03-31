import type {Comment, Photo} from '@entities/photo/model';
import {Http} from '@shared/lib/http';

class PhotoService extends Http {
  async getPhotos() {
    const {data} = await this.get<Photo[]>('/photos');
    return data;
  }

  async getPhoto(photoId: number) {
    const {data} = await this.get<Photo>(`/photo/${photoId}`);
    return data;
  }

  async getComments(photoId: number) {
    const {data} = await this.get<Comment[]>(`/photo/${photoId}/comments`);
    return data;
  }

  async getComment({photoId, commentId}: {photoId: number; commentId: number}) {
    const {data} = await this.get<Comment[]>(
      `/photo/${photoId}/comments/${commentId}`,
    );
    return data;
  }
}

export const photoService = new PhotoService();
