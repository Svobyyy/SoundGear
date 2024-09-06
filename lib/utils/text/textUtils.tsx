// makes a new line for each feature where the new line is a \n character in provided data

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
