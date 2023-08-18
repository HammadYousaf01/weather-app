import { ResizableBox } from "react-resizable";

import "./resizable.css";

interface Props {
  children: React.ReactNode;
}

const Resizable: React.FC<Props> = ({ children }) => {
  return (
    <ResizableBox height={400} width={800}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
