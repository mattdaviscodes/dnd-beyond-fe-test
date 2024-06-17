import { useState } from "react";

import TalentCount from "./TalentCount";
import TalentTree from "./TalentTree";

const MAX_POINTS = 6;
const DEFAULT_TREES = [
  [false, false, false, false],
  [false, false, false, false],
];

interface Props {}

const TalentCalculator: React.FC<Props> = () => {
  const [trees, setTrees] = useState(DEFAULT_TREES);

  const handleTalentLeftClick = (treeIndex: number, talentIndex: number) => {
    const talentIsActive = trees[treeIndex][talentIndex];
    const precedingTalentsAreActive = trees[treeIndex]
      .slice(0, talentIndex)
      .every((talentIsActive) => talentIsActive);

    if (talentIsActive || !precedingTalentsAreActive) {
      return;
    }

    toggleTalent(treeIndex, talentIndex);
  };

  const handleTalentRightClick = (treeIndex: number, talentIndex: number) => {
    const talentIsActive = trees[treeIndex][talentIndex];
    const followingTalentsAreInactive = trees[treeIndex]
      .slice(talentIndex + 1)
      .every((talentIsActive) => !talentIsActive);

    if (!talentIsActive || !followingTalentsAreInactive) {
      return;
    }

    toggleTalent(treeIndex, talentIndex);
  };

  const toggleTalent = (treeIndex: number, talentIndex: number) => {
    const newTrees = trees.map((tree) => [...tree]);
    newTrees[treeIndex][talentIndex] = !newTrees[treeIndex][talentIndex];

    setTrees(newTrees);
  };

  const getActiveTalentCount = () => {
    let count = 0;

    trees.forEach((tree) =>
      tree.forEach((talentIsActive) => {
        if (talentIsActive) {
          count += 1;
        }
      }),
    );

    return count;
  };

  return (
    <div>
      <div>
        <h1>TitanStar Legends - Rune Master Loadout Talent Calculator 9000</h1>
      </div>
      <div>
        <div>
          {trees.map((tree, index) => (
            <TalentTree
              talents={tree}
              index={index}
              handleTalentLeftClick={handleTalentLeftClick}
              handleTalentRightClick={handleTalentRightClick}
            />
          ))}
        </div>
        <TalentCount total={MAX_POINTS} active={getActiveTalentCount()} />
      </div>
    </div>
  );
};

export default TalentCalculator;
