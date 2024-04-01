'use client';

import Image from 'next/image';
import Link from 'next/link';

import {usePhotos} from '@entities/photo/hooks';

export const Photos = () => {
  const {data} = usePhotos();

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {data.map(({id, url, title, thumbnailUrl, albumId}) => (
        <div
          key={id}
          style={{
            padding: 10,
            width: 500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              borderRadius: 10,
            }}
            src={url}
            alt={title}
            blurDataURL={thumbnailUrl}
            width={200}
            height={200}
            loading="lazy"
          />
          <p>title : {title}</p>
          <p>albumId : {albumId}</p>
          <Link href={`photos/${id}`}>Go to detail</Link>
        </div>
      ))}
    </section>
  );
};
