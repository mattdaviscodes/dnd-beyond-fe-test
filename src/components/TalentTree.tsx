import Talent from "./Talent";

// TODO: Sort interfaces and prop desctrucures alpha

interface Props {
  talents: boolean[];
  index: number;
  handleTalentLeftClick: (treeIndex: number, talentIndex: number) => void;
  handleTalentRightClick: (treeIndex: number, talentIndex: number) => void;
  name: string;
}

const TalentTree: React.FC<Props> = ({
  talents,
  index,
  handleTalentLeftClick,
  handleTalentRightClick,
  name,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="uppercase text-slate-400">{name}</h2>
      <div className="flex">
        {talents.map((talentIsActive, talentIndex) => (
          <Talent
            key={`Talent Tree ${index}, Talent: ${talentIndex}`}
            active={talentIsActive}
            handleTalentLeftClick={() =>
              handleTalentLeftClick(index, talentIndex)
            }
            handleTalentRightClick={() =>
              handleTalentRightClick(index, talentIndex)
            }
            isLast={talentIndex === talents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentTree;
