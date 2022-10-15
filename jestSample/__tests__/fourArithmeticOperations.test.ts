/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  multiply,
  add,
  subtract,
  divide,
} from "../fourArithmeticOperations/script";

// TODO
// [-] multiply 3 10 3 // 90を返す
// [-] 1個〜30個までの引数を受け取る
// [-] かけ算の場合、計算結果が1000を越える場合は「big big number」と文字列が返る
// 0個の引数を指定するとエラーが発生する
// 1個の引数を指定する場合は正常に計算が行われる
// 30個の引数を指定する場合は正常に計算が行われる
// 31個の引数を指定するとエラーが発生する

// [-] add 3 10 3 // 16を返す
// [-] 1個〜30個までの引数を受け取る
// [-] 足し算の場合、計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る
// 0個の引数を指定するとエラーが発生する
// 1個の引数を指定する場合は正常に計算が行われる
// 30個の引数を指定する場合は正常に計算が行われる
// 31個の引数を指定するとエラーが発生する

// [-] subtract 3 10 3 // -10を返す
// [-] 1個〜30個までの引数を受け取る
// [-] 引き算の場合、計算結果がマイナスの場合は「negative number」と文字列が返る
// 0個の引数を指定するとエラーが発生する
// 1個の引数を指定する場合は正常に計算が行われる
// 30個の引数を指定する場合は正常に計算が行われる
// 31個の引数を指定するとエラーが発生する

// [-] divide 100 10 // 10を返す
// [-] 1個〜30個までの引数を受け取る
// [-] 割り算の場合、計算結果を小数点何桁まで考慮するかは特に指定がありません。お任せします！
// 0個の引数を指定するとエラーが発生する
// 1個の引数を指定する場合は正常に計算が行われる
// 30個の引数を指定する場合は正常に計算が行われる
// 31個の引数を指定するとエラーが発生する

describe("multiply", () => {
  describe("正常系", () => {
    test("引数に1個の数値を渡す場合、引数を返す", () => {
      expect(multiply(3)).toBe(3);
    });

    test("引数に1個以上30個以下の数値を渡す場合、引数を返す", () => {
      expect(multiply(3, 10, 3)).toBe(90);
    });

    test("引数に30個の数値を渡す場合、引数を返す", () => {
      const args = Array(30).fill(Number(1));
      expect(multiply(...args)).toBe(1);
    });

    test("計算結果が1000を越える場合は「big big number」と文字列が返る", () => {
      expect(multiply(1001, 1)).toBe("big big number");
    });
  });

  describe("準正常系", () => {
    test("引数に何も渡さない場合、エラーを返す", () => {
      expect(() => multiply()).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });

    test("引数に31個以上の数値を渡す場合、エラーを返す", () => {
      const args = Array(31).fill(Number(2));
      expect(() => multiply(...args)).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });
  });
});

describe("add", () => {
  describe("正常系", () => {
    test("引数に1個の数値を渡す場合、引数を返す", () => {
      expect(add(3)).toBe(3);
    });

    test("引数に1個以上30個以下の数値を渡す場合、引数を返す", () => {
      expect(add(3, 10, 3)).toBe(16);
    });

    test("引数に30個の数値を渡す場合、引数を返す", () => {
      const args = Array(30).fill(Number(1));
      expect(add(...args)).toBe(30);
    });

    test("計算結果が1000を越える場合は「too big」と文字列が返る", () => {
      expect(() => add(1001, 1)).toThrow("too big");
    });
  });

  describe("準正常系", () => {
    test("引数に何も渡さない場合、エラーを返す", () => {
      expect(() => add()).toThrow("引数を1つ以上,30個以下指定してください");
    });

    test("引数に31個以上の数値を渡す場合、エラーを返す", () => {
      const args = Array(31).fill(Number(2));
      expect(() => add(...args)).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });
  });
});

describe("subtract", () => {
  describe("正常系", () => {
    test("引数に1個の数値を渡す場合、引数を返す", () => {
      expect(subtract(3)).toBe(3);
    });

    test("引数に1個以上30個以下の数値を渡す場合、引数を返す", () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test("引数に30個の数値を渡す場合、引数を返す", () => {
      const args = Array(29).fill(Number(1));
      expect(subtract(30, ...args)).toBe(1);
    });

    test("計算結果がマイナスの場合は「negative number」と文字列が返る", () => {
      expect(() => subtract(1, 2)).toThrow("negative number");
    });
  });

  describe("準正常系", () => {
    test("引数に何も渡さない場合、エラーを返す", () => {
      expect(() => subtract()).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });

    test("引数に31個以上の数値を渡す場合、エラーを返す", () => {
      const args = Array(31).fill(Number(2));
      expect(() => subtract(...args)).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });
  });
});

describe("divide", () => {
  describe("正常系", () => {
    test("引数に1個の数値を渡す場合、引数を返す", () => {
      expect(divide(3)).toBe(3);
    });

    test("引数に1個以上30個以下の数値を渡す場合、引数を返す", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("引数に30個の数値を渡す場合、引数を返す", () => {
      const args = Array(30).fill(Number(1));
      expect(divide(...args)).toBe(1);
    });

    test("計算結果の小数点が一桁を越える場合は「結果に小数点が含まれています」と文字列が返る", () => {
      expect(() => divide(10, 3)).toThrow("結果に小数点が含まれています");
    });
  });

  describe("準正常系", () => {
    test("引数に何も渡さない場合、エラーを返す", () => {
      expect(() => divide()).toThrow("引数を1つ以上,30個以下指定してください");
    });

    test("引数に31個以上の数値を渡す場合、エラーを返す", () => {
      const args = Array(31).fill(Number(2));
      expect(() => divide(...args)).toThrow(
        "引数を1つ以上,30個以下指定してください"
      );
    });
  });
});
