import data from "../assets/talent-icons-sprite.json";

const SPRITESHEET_ASSET_PATH = "/src/assets/talent-icons-sprite.png";

interface SpritesheetData {
  frames: {
    [key: string]: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
}

interface Props {
  frameName: string;
}

const Sprite: React.FC<Props> = ({ frameName }) => {
  const spritesheet: SpritesheetData = data;
  const frame = spritesheet.frames[frameName];

  if (!frame) {
    return;
  }

  return (
    <div
      style={{
        backgroundPositionX: frame.x,
        backgroundPositionY: frame.y,
        backgroundImage: `url(${SPRITESHEET_ASSET_PATH})`,
        backgroundRepeat: "no-repeat",
        height: frame.h,
        width: frame.w,
      }}
    ></div>
  );
};

export default Sprite;
