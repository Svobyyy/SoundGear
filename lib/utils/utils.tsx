// Makes a new line for each feature, the new line is a \n character in provided data by backend

export const checkNewLinesFeatures = (features: string) => {
  return features
    .split("\n")
    .filter((feature) => feature.trim() !== "") // Issue with splitting the string: it returned array with ['text', "\n", 'text'] creating unnecessary children with empty string. Therefore I filter out empty strings
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

// Removes unnecessary words to make a cleaner name, for example YX1 Wireless Earphones -> YX1

import { REMOVE_FROM_NAME } from "@/lib/constants";

export const removeUnnecessaryName = (name: string) => {
  let words = name.split(" ");
  words = words.filter((word) => !REMOVE_FROM_NAME.includes(word));

  return words.join(" ");
};
