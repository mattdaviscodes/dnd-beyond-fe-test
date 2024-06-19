import Sprite from "./Sprite";
import spritesheetData from "../assets/talent-icons-sprite.json";

interface Props {
  active: boolean;
  handleTalentLeftClick: () => void;
  handleTalentRightClick: () => void;
  isLast: boolean;
  spriteFrame: string;
}

const Talent: React.FC<Props> = ({
  active,
  handleTalentLeftClick,
  handleTalentRightClick,
  isLast,
  spriteFrame,
}) => {
  const frameName = `${spriteFrame}_${active ? "active" : "inactive"}`;

  return (
    <div className="flex flex-grow flex-col items-center lg:flex-row">
      <div
        onClick={handleTalentLeftClick}
        onContextMenu={(e) => {
          e.preventDefault();
          handleTalentRightClick();
        }}
        className={`cursor-pointer`}
      >
        <Sprite
          active={active}
          spritesheet="/src/assets/talent-icons-sprite.png"
          data={spritesheetData}
          frame={frameName}
        />
      </div>
      <div
        hidden={isLast}
        className={`w-4 border-x-2 border-gray-400 bg-gray-500 ${active ? "opacity-60" : "opacity-30"} flex-grow lg:h-4 lg:w-20 lg:border-x-0 lg:border-y-2`}
      ></div>
    </div>
  );
};

export default Talent;
