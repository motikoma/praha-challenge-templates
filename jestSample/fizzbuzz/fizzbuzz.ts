// fizzbuzz
// 1から100までの数字を画面に表示する。ただし、3の倍数のときは数字の代わりにFizzと表示し、5の倍数のときは数字の代わりにBuzzと表示し、15の倍数のときは数字の代わりにFizzBuzzと表示する

// 15で割り切れるかどうか判定
export const isFizzBuzz = (num: number): boolean => {
    return num % 15 === 0;
  };
  
  // 5で割り切れるかどうか判定
  export const isBuzz = (num: number): boolean => {
    return num % 5 === 0;
  };
  
  // 3で割り切れるかどうか判定
  export const isFizz = (num: number): boolean => {
    return num % 3 === 0;
  };
  
  // error判定処理
  export const isError = (num: number): boolean => {
    if (!(typeof num === "number")) return true;
    if (!Number.isInteger(num)) return true;
    if (num < 1) return true;
  
    return false;
  };
  
  // FizzBuzz判定
  export const toFizzBuzz = (num: number): number | string => {
    if (isError(num))
      throw new Error("引数には1以上の整数の値を入力してください");
    if (isFizzBuzz(num)) return "FizzBuzz";
    if (isBuzz(num)) return "Buzz";
    if (isFizz(num)) return "Fizz";
    return num;
  };
  