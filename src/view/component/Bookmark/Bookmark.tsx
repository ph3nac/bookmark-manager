import { FC } from 'react';

type Props = {
  id: string;
  title: string;
  icon: string;
};

export const Bookmark: FC<Props> = ({ id, title, icon }) => (
  <li key={id}>
    <img alt="icon" src={icon} />
    {title}
  </li>
);
