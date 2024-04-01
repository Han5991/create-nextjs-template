import type {Comment, Photo} from '@entities/photo/model';
import {Http} from '@shared/lib/http';

class PhotoService extends Http {
  async getPhotos() {
    const {data} = await this.get<Photo[]>('/photos');
    return data;
  }

  async getPhoto(photoId: number) {
    const {data} = await this.get<Photo>(`/photos/${photoId}`);
    return data;
  }

  async getComments(photoId: number) {
    const {data} = await this.get<Comment[]>(`/photos/${photoId}/comments`);
    return data;
  }
}

export const photoService = new PhotoService();
