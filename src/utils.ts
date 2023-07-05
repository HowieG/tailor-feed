import type { DescriptionToken, SentimentRangeType } from "~/types/TailorTypes";

function stringToDescriptionTokenArray(description: string) {
  const descriptionTokens: DescriptionToken[] = [];
  description.split(" ").forEach((token) => {
    descriptionTokens.push({ token });
  });

  return descriptionTokens;
}

const mapSentimentToColor = (sentiment: SentimentRangeType): string => {
  const colorMap: Record<SentimentRangeType, string> = {
    "-1": "rgb(229, 167, 165, 1)",
    "-0.75": "rgb(229, 167, 165, .75)",
    "-0.5": "rgb(229, 167, 165, .5)",
    "-0.25": "rgb(229, 167, 165, .25)",
    "0": "#ffffff",
    "0.25": "rgba(188, 212, 189, 0.25)",
    "0.5": "rgba(188, 212, 189, 0.5)",
    "0.75": "rgba(188, 212, 189, 0.75)",
    "1": "rgba(188, 212, 189, 1)",
  };

  return colorMap[sentiment];
};

export { stringToDescriptionTokenArray, mapSentimentToColor };
