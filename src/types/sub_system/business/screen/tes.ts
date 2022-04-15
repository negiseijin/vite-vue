export type Tes = {
  tesId: number;
  tesName: string;
  isTest: boolean;
  tesList: Array<TesList>;
};

type TesList = {
  tesId: number;
  tesName: string;
  isTest: boolean;
};
