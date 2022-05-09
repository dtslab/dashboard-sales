import React from "react";

// Custom components
import StatSimple from "./StatSimple";

// Custom types
import type { Statistic } from "../modules/Stats";

interface IStatsSimpleProps {
  statistics: Statistic[];
}

const StatsSimple: React.FunctionComponent<IStatsSimpleProps> = ({ statistics }) => {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {statistics.map((stat) => (
            <StatSimple key={stat.name} statistic={stat}/>
          ))}
        </dl>
      </div>
    </>
  );
};

export default StatsSimple;
