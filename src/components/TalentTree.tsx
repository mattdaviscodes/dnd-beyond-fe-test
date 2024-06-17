import Talent from "./Talent";

interface Props {
  talents: boolean[];
  index: number;
  handleTalentLeftClick: (treeIndex: number, talentIndex: number) => void;
  handleTalentRightClick: (treeIndex: number, talentIndex: number) => void;
}

const TalentTree: React.FC<Props> = ({
  talents,
  index,
  handleTalentLeftClick,
  handleTalentRightClick,
}) => {
  return (
    <div className="mb-4 flex gap-4">
      {talents.map((talentIsActive, talentIndex) => (
        <Talent
          active={talentIsActive}
          handleTalentLeftClick={() =>
            handleTalentLeftClick(index, talentIndex)
          }
          handleTalentRightClick={() =>
            handleTalentRightClick(index, talentIndex)
          }
        />
      ))}
    </div>
  );
};

export default TalentTree;
