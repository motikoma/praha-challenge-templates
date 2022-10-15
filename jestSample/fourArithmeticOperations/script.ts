export const multiply = (...args: number[]): number | string => {
  if (args.length === 0) throw Error("引数を1つ以上,30個以下指定してください");
  if (args.length > 30) throw Error("引数を1つ以上,30個以下指定してください");
  const result: number = args.reduce((acc, cur): number => acc * cur);
  if (result > 1000) return "big big number";
  return result;
};

export const add = (...args: number[]): number | string => {
  if (args.length === 0) throw Error("引数を1つ以上,30個以下指定してください");
  if (args.length > 30) throw Error("引数を1つ以上,30個以下指定してください");
  const result: number = args.reduce((acc, cur): number => acc + cur);
  if (result > 1000) return "too big";
  return result;
};

export const subtract = (...args: number[]): number | string => {
  if (args.length === 0) throw Error("引数を1つ以上,30個以下指定してください");
  if (args.length > 30) throw Error("引数を1つ以上,30個以下指定してください");
  const result: number = args.reduce((acc, cur): number => acc - cur);
  if (result < 0) return "negative number";
  return result;
};

export const divide = (...args: number[]): number | string => {
  if (args.length === 0) throw Error("引数を1つ以上,30個以下指定してください");
  if (args.length > 30) throw Error("引数を1つ以上,30個以下指定してください");
  const result: number = args.reduce((acc, cur): number => acc / cur);
  if (!Number.isInteger(result)) return "結果に小数点が含まれています";
  return result;
};
