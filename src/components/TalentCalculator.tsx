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

  // TODO: Remove as many custom css values as possible

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0A0F12]">
      <div className="h-[400px] w-[1000px] border-2 border-[#151D26] bg-[url('/src/assets/talent-calc-bg.png')] bg-cover bg-no-repeat p-4 text-slate-50">
        <div className="flex w-full items-center justify-center bg-gray-500/20 p-3 text-2xl">
          <h1>
            TitanStar Legends - Rune Master Loadout Talent Calculator 9000
          </h1>
        </div>
        <div className="flex h-full w-full flex-row items-center justify-evenly">
          <div className="flex flex-col gap-4">
            {trees.map((tree, index) => (
              <TalentTree
                key={`Talent Tree: ${index}`}
                talents={tree}
                index={index}
                handleTalentLeftClick={handleTalentLeftClick}
                handleTalentRightClick={handleTalentRightClick}
                name={`Talent Path ${index + 1}`}
              />
            ))}
          </div>
          <TalentCount total={MAX_POINTS} active={getActiveTalentCount()} />
        </div>
      </div>
    </div>
  );
};

export default TalentCalculator;
