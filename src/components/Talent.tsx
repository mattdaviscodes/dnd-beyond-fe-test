interface Props {
  active: boolean;
  handleTalentLeftClick: () => void;
  handleTalentRightClick: () => void;
}

const Talent: React.FC<Props> = ({
  active,
  handleTalentLeftClick,
  handleTalentRightClick,
}) => {
  return (
    <div
      onClick={handleTalentLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        handleTalentRightClick();
      }}
      className={`h-10 w-10 cursor-pointer border border-black ${active ? "bg-red-500" : "hover:bg-red-200"}`}
    ></div>
  );
};

export default Talent;
