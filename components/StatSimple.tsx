import React from "react";

import { ArrowSmUpIcon, ArrowSmDownIcon } from "@heroicons/react/outline";

// Custom types
import type { Impact, Statistic } from "../modules/Stats";

// Custom modules
import { classNames } from "../modules/Utils";

interface IStatSimpleProps {
  statistic: Statistic;
}

function getStatisticColor(impact?: Impact) : string {
  if (!impact) {
    return "text-gray-900";
  }

  switch (impact) {
    case "GOOD":
      return "text-green-600";
    case "BAD":
      return "text-red-600";
    case "NEUTRAL":
      return "text-gray-900";
    default:
      throw new Error(`${impact} is not a valid Statistic impact.`);
  }
}

function renderArrowAndPercentageChange(statistic: Statistic) {
  if (!statistic.percentageChange) {
    console.log(`No arrow needed because percentage change = ${statistic.percentageChange}`);
    return null;
  }

  const color = getStatisticColor(statistic.percentageImpact);
  const arrowClasses = 'self-center flex-shrink-0 h-5 w-5';
  const arrow = statistic.percentageChange > 0 ? <ArrowSmUpIcon className={arrowClasses} aria-hidden="true" /> : <ArrowSmDownIcon className={arrowClasses} />;

  return (<div className={color + ' text-base flex'}>{arrow}{statistic.percentageChange + '%'}</div>);
}

const StatSimple: React.FunctionComponent<IStatSimpleProps> = ({ statistic }) => {
  return (
    <>
      <div key={statistic.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 border-2 border-transparent hover:border-gray-300">
        <dt className="text-sm font-medium text-gray-500 truncate">{statistic.name}</dt>
        <dd className='mt-1 text-3xl font-semibold flex items-center'><div>{statistic.stat}</div><div>{renderArrowAndPercentageChange(statistic)}</div></dd>
      </div>
    </>
  );
};

export default StatSimple;
