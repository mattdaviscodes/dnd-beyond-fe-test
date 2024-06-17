interface Props {
  total: number;
  active: number;
}

const TalentCount: React.FC<Props> = ({ total, active }) => {
  return <p>Points Spent: {`${active} / ${total}`}</p>;
};

export default TalentCount;
