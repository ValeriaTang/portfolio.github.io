export interface Identity {
  Name: string;
  Affiliation: string;
  birthyear: number;
  hobbies: string[];
  interests: string[];
}

export const identity: Identity = {
  Name: "Valeria",
  Affiliation: "OMUCT",
  birthyear: 2009,
  hobbies: ["ドラマ鑑賞", "スポーツ観戦"],
  interests: ["自然言語処理", "IoT", "VFX"],
};