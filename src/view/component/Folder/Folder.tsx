import { FC } from 'react';
import { Bookmark } from '../Bookmark/Bookmark';

type FolderProps = {
  id: string;
  title: string;
  contents?: Content[];
};

export const Folder: FC<FolderProps> = ({ id, title, contents }) => (
  <li key={id}>
    <div>{title}</div>
    <ul>
      {contents.map((content) => {
        if (content.type === 'Bookmark') {
          return (
            <Bookmark
              key={content.id}
              id={content.id}
              title={content.title}
              icon={content.icon}
            />
          );
        }
        return (
          <Folder
            key={content.id}
            id={content.id}
            title={content.title}
            contents={content.contents}
          />
        );
      })}
    </ul>
  </li>
);
