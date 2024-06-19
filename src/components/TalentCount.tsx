interface Props {
  total: number;
  active: number;
}

const TalentCount: React.FC<Props> = ({ total, active }) => {
  return (
    <div className="flex flex-col items-center justify-center border-t-2 border-gray-700/30 bg-black/30 px-6 py-4 text-2xl md:py-8 md:text-4xl lg:h-fit lg:border-2 lg:px-6 lg:py-4 lg:text-lg">
      <p>{`${active} / ${total}`}</p>
      <p className="text-slate-600">Points Spent</p>
    </div>
  );
};

export default TalentCount;
