import { checkNewLinesFeatures } from "@/lib/utils/utils";
import React from "react";

type Props = {
  features: string;
};

export default function Features({ features }: Props) {
  return (
    <div className="flex-1">
      <h3 className="mb-8">FEATURES</h3>
      <ul className="flex flex-col gap-8 opacity-75 tab:max-w-[635px]">
        {checkNewLinesFeatures(features)}
      </ul>
    </div>
  );
}
