import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import HistoryItem from "./HistoryItem";
import { useAppSelector } from "store/hooks";

const History: React.FC = () => {
  const previousCities = useAppSelector((state) => state.city.previousCities);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {previousCities.map(
        (cityData: { city: string; searchedAt: string }, index) => (
          <div key={index}>
            <HistoryItem search={cityData} />
            <Divider variant="middle" component="li" />
          </div>
        )
      )}
    </List>
  );
};

export default History;
