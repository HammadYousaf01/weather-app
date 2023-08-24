import { createContext, useContext, useEffect, useState } from "react";

export const CoordinatesContext = createContext({ latitude: 0, longitude: 0 });

interface Props {
  children: React.ReactNode;
}

const CoordinatesContextProdiver: React.FC<Props> = ({ children }) => {
  const defaultCoordinates = useContext(CoordinatesContext);
  const [coordinates, setCoordinates] = useState(defaultCoordinates);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;
      setCoordinates({ latitude, longitude });
    });
  }, []);

  return (
    <CoordinatesContext.Provider value={coordinates}>
      {children}
    </CoordinatesContext.Provider>
  );
};

export default CoordinatesContextProdiver;
