interface Props {
  city: string;
}

const HistoryItem: React.FC<Props> = ({ city }) => {
  return (
    <div>
      <p>{city}</p>
    </div>
  );
};

export default HistoryItem;
