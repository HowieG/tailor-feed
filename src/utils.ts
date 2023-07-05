import { DescriptionToken } from "~/types/TailorTypes";

function stringToDescriptionTokenArray(description: string) {
  const descriptionTokens: DescriptionToken[] = [];
  description.split(" ").forEach((token) => {
    descriptionTokens.push({ token });
  });

  return descriptionTokens;
}

export { stringToDescriptionTokenArray };
