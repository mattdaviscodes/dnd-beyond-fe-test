interface SpritesheetFrame {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface SpritesheetData {
  frames: {
    [key: string]: SpritesheetFrame;
  };
}

interface Props {
  active: boolean;
  spritesheet: string;
  data: SpritesheetData;
  frame: string;
}

// TODO: If spritesheet size doesn't have to be dynamic, just hardcode spritesheet path and data

const Sprite: React.FC<Props> = ({ active, spritesheet, data, frame }) => {
  const frameData = data.frames[frame];

  if (!frameData) {
    return;
  }

  return (
    <div
      style={{
        backgroundPositionX: frameData.x,
        backgroundPositionY: frameData.y,
        // backgroundSize: `${ORIGINAL_W * scaleX}px ${ORIGINAL_H * scaleY}px`,
        backgroundImage: `url(${spritesheet})`,
        backgroundRepeat: "no-repeat",
        height: frameData.h,
        width: frameData.w,
      }}
    ></div>
  );
};

export default Sprite;
