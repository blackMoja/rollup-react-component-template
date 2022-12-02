import type { FC } from 'react';

export interface YellowBoxProps {
  width?: number;
  height?: number;
}

const YellowBox: FC<YellowBoxProps> = (props) => {
  const { width = 500, height = 500 } = props;

  return (
    <div id="yellow-box" style={{ backgroundColor: 'yellow', width, height }} />
  );
};

export default YellowBox;
