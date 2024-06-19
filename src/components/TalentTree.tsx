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
    <div className="flex flex-col p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <h2 className="mb-6 text-center text-2xl uppercase text-slate-400 md:mb-12 md:text-4xl lg:mb-0 lg:text-sm">
        {name}
      </h2>
      <div className="items-between flex flex-grow flex-col justify-between lg:flex-row">
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
