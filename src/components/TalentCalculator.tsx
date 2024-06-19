import { useState } from "react";

import TalentCount from "./TalentCount";
import TalentTree from "./TalentTree";

import backgroundImage from "../assets/talent-calc-bg.png";

const MAX_POINTS = 6;
const DEFAULT_TREES = [
  [
    { active: false, spriteFrame: "stack" },
    { active: false, spriteFrame: "utensils" },
    { active: false, spriteFrame: "cake" },
    { active: false, spriteFrame: "crown" },
  ],
  [
    { active: false, spriteFrame: "ship" },
    { active: false, spriteFrame: "scuba" },
    { active: false, spriteFrame: "lightning" },
    { active: false, spriteFrame: "skull" },
  ],
];

interface Props {}

const TalentCalculator: React.FC<Props> = () => {
  const [trees, setTrees] = useState(DEFAULT_TREES);

  const handleTalentLeftClick = (treeIndex: number, talentIndex: number) => {
    const talent = trees[treeIndex][talentIndex];
    const precedingTalentsAreActive = trees[treeIndex]
      .slice(0, talentIndex)
      .every((talent) => talent.active);

    if (talent.active || !precedingTalentsAreActive) {
      return;
    }

    toggleTalent(treeIndex, talentIndex);
  };

  const handleTalentRightClick = (treeIndex: number, talentIndex: number) => {
    const talent = trees[treeIndex][talentIndex];
    const followingTalentsAreInactive = trees[treeIndex]
      .slice(talentIndex + 1)
      .every((talent) => !talent.active);

    if (!talent.active || !followingTalentsAreInactive) {
      return;
    }

    toggleTalent(treeIndex, talentIndex);
  };

  const toggleTalent = (treeIndex: number, talentIndex: number) => {
    const newTrees = trees.map((tree) => [...tree]);
    newTrees[treeIndex][talentIndex].active =
      !newTrees[treeIndex][talentIndex].active;

    setTrees(newTrees);
  };

  const getActiveTalentCount = () => {
    let count = 0;

    trees.forEach((tree) =>
      tree.forEach((talent) => {
        if (talent.active) {
          count += 1;
        }
      }),
    );

    return count;
  };

  return (
    <div className="h-full w-full items-center justify-center bg-zinc-950 lg:flex lg:overflow-hidden">
      <div
        style={{ background: `url(${backgroundImage})` }} // Tailwind doesn't like building dynamic rules, so use style here
        className="flex h-full w-full flex-col justify-between bg-cover bg-no-repeat text-slate-50 lg:h-fit lg:w-3/4 lg:max-w-4xl lg:border-2 lg:border-gray-900 lg:p-4"
      >
        <div className="w-full items-center bg-gray-500/20 p-4 text-center lg:flex lg:items-center lg:justify-center">
          <h1 className="mb-2 text-4xl md:text-6xl lg:mb-0 lg:text-2xl">
            TitanStar Legends
          </h1>
          <span className="hidden lg:mx-2 lg:block lg:text-2xl">-</span>
          <h2 className="text-2xl md:text-3xl lg:text-2xl">
            Rune Master Loadout Talent Calculator 9000
          </h2>
        </div>
        <div className="flex flex-grow flex-col justify-between lg:flex-row lg:items-center lg:justify-around">
          <div className="flex flex-grow justify-around lg:my-8 lg:flex-col lg:justify-center lg:gap-y-4">
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
