import _ from "lodash";

type InfoData = {
  currentData: Object;
  fields: string[];
};

export const getInfoData = ({ currentData = {}, fields = [] }: InfoData) => {
  return _.pick(currentData, fields);
};
