interface Props {
  active: boolean;
  handleTalentLeftClick: () => void;
  handleTalentRightClick: () => void;
  isLast: boolean;
}

const Talent: React.FC<Props> = ({
  active,
  handleTalentLeftClick,
  handleTalentRightClick,
  isLast,
}) => {
  return (
    <div className="flex flex-grow flex-col items-center lg:flex-row">
      <div
        onClick={handleTalentLeftClick}
        onContextMenu={(e) => {
          e.preventDefault();
          handleTalentRightClick();
        }}
        className={`h-10 w-10 cursor-pointer border border-white md:h-14 md:w-14 ${active ? "bg-red-500" : "hover:bg-red-200"} lg:h-10 lg:w-10`}
      ></div>
      <div
        hidden={isLast}
        className={`w-4 border-x-2 border-gray-400 bg-gray-500 ${active ? "opacity-60" : "opacity-30"} flex-grow lg:h-4 lg:w-20`}
      ></div>
    </div>
  );
};

export default Talent;
