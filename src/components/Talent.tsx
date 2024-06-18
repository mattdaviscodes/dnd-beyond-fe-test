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
    <div className="flex items-center">
      <div
        onClick={handleTalentLeftClick}
        onContextMenu={(e) => {
          e.preventDefault();
          handleTalentRightClick();
        }}
        className={`h-10 w-10 cursor-pointer border border-white ${active ? "bg-red-500" : "hover:bg-red-200"}`}
      ></div>
      <div
        hidden={isLast}
        className={`h-4 w-20 border-y-2 border-gray-400 bg-gray-500 ${active ? "opacity-60" : "opacity-30"}`}
      ></div>
    </div>
  );
};

export default Talent;
