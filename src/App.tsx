import Nav from "components/nav";
import Result from "components/result";

import { useAppSelector } from "store/hooks";

const App: React.FC = () => {
  const showResult = useAppSelector((state) => state.result.showResult);

  return (
    <div>
      <Nav />
      {showResult && <Result />}
    </div>
  );
};

export default App;
