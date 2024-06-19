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

  const activeBorderStyles = {
    borderImage:
      "linear-gradient(0deg, rgba(111,170,229,1) 5%, rgba(36,55,74,1) 48%, rgba(111,170,229,1) 50%) 1",
    borderWidth: "4px",
    borderStyle: "solid",
    boxShadow: "rgba(255, 255, 255, 0.75) 0px 0px 10px 0px",
  };
  const inactiveBorderStyles = {
    borderImage:
      "linear-gradient(0deg, rgba(75,75,75,1) 5%, rgba(57,57,57,1) 48%, rgba(75,75,75,1) 50%) 1",
    borderWidth: "4px",
    borderStyle: "solid",
    boxShadow: "rgba(57, 57, 57, 0.75) 0px 0px 10px 0px",
  };

  return (
    <div className="flex flex-grow flex-col items-center lg:flex-row">
      <div
        onClick={handleTalentLeftClick}
        onContextMenu={(e) => {
          e.preventDefault();
          handleTalentRightClick();
        }}
        style={active ? activeBorderStyles : inactiveBorderStyles}
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
