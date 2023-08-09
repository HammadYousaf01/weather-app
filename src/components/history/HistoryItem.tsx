import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

import { formatDistance } from "date-fns";

interface Props {
  search: {
    city: string;
    searchedAt: string;
  };
}

const HistoryItem: React.FC<Props> = ({ search }) => {
  return (
    <ListItem>
      <ListItemText
        primary={search.city}
        secondary={formatDistance(new Date(search.searchedAt), new Date(), {
          addSuffix: true,
        })}
      />
    </ListItem>
  );
};

export default HistoryItem;
