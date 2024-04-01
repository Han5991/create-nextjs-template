'use client';

import Image from 'next/image';

import {useComments, usePhoto} from '@entities/photo/hooks';

type PhotoProps = {
  photoId: number;
};

export const Photo = (props: NextPageProps<PhotoProps>) => {
  const {params} = props;
  const {photo} = usePhoto(params.photoId);
  const {comment} = useComments(params.photoId);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 10,
        }}>
        <Image src={photo.url} alt={photo.title} height={200} width={200} />
        <p>title : {photo.title}</p>
      </div>
      <div>
        {comment.map(c => (
          <div
            key={c.id}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderStyle: 'solid',
              borderRadius: 10,
              margin: 10,
              padding: 10,
            }}>
            <p>name : {c.name}</p>
            <p>email : {c.email}</p>
            <p>body : {c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
