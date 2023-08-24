import { ResizableBox } from "react-resizable";

import "./resizable.css";

interface Props {
  height?: number;
  width?: number;
  children: React.ReactNode;
}

const Resizable: React.FC<Props> = ({
  height = 400,
  width = 800,
  children,
}) => {
  return (
    <ResizableBox height={height} width={width}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
