import type { FC } from 'react';
import type { Color } from '@/foundation';

export interface RedBoxProps {
  color?: Color;
}

const RedBox: FC<RedBoxProps> = (props) => {
  const { color } = props;
  return (
    <div
      id="red-box"
      style={{ backgroundColor: color ?? 'teal-300', width: 500, height: 500 }}
    />
  );
};

export default RedBox;
