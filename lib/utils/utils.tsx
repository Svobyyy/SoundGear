// makes a new line for each feature, the new line is a \n character in provided data

export const checkNewLinesFeatures = (features: string) => {
  return features
    .split("\n")
    .filter((feature) => feature.trim() !== "")
    .map((feature, index) => (
      <li key={index}>
        <p className="opacity-50">{feature}</p>
      </li>
    ));
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const setVisibility = (show: boolean) => {
  return show ? "visible" : "invisible opacity-0";
};

// removes unnecessary words to make a cleaner name, for example YX1 Wireless Earphones -> YX1

import { REMOVE_FROM_NAME } from "@/lib/constants";

export const removeUnnecessaryName = (name: string) => {
  let words = name.split(" ");
  words = words.filter((word) => !REMOVE_FROM_NAME.includes(word));

  return words.join(" ");
};
