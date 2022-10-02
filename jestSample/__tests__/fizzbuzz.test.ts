import { toFizzBuzz } from "../fizzbuzz/fizzbuzz";

describe("FizzBuzzのテスト", () => {
  test("引数が整数でないときにエラーを出力する", () => {
    expect(() => toFizzBuzz(0.1)).toThrow(
      "引数には1以上の整数の値を入力してください"
    );
  });

  test("引数が0のときにエラーを出力する", () => {
    expect(() => toFizzBuzz(0)).toThrow(
      "引数には1以上の整数の値を入力してください"
    );
  });

  test("引数が負の値のときにエラーを出力する", () => {
    expect(() => toFizzBuzz(-1)).toThrow(
      "引数には1以上の整数の値を入力してください"
    );
  });

  test("引数が15で割り切れる場合、FizzBuzzを返す", () => {
    expect(toFizzBuzz(15)).toBe("FizzBuzz");
  });

  test("引数が５で割り切れる場合、Buzzを返す", () => {
    expect(toFizzBuzz(5)).toBe("Buzz");
  });

  test("引数が3で割り切れる場合、Fizzを返す", () => {
    expect(toFizzBuzz(3)).toBe("Fizz");
  });

  test("引数が15,3,5で割り切れないときに引数をそのまま返す", () => {
    expect(toFizzBuzz(1)).toBe(1);
  });
});