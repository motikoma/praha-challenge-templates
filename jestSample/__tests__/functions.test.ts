/* eslint-disable @typescript-eslint/explicit-function-return-type */
// todo: ここに単体テストを書いてみましょう！

import { expect, jest, test } from "@jest/globals";
import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { NameApiService } from "../nameApiService";
import { DatabaseMock } from "../util";
describe("sumOfArray", () => {
  test("1,2を渡すと3が返る", () => {
    expect(sumOfArray([1, 2])).toBe(3);
  });

  test("0を渡しても正常に計算される", () => {
    expect(sumOfArray([0, 1])).toBe(1);
  });

  test("負の値を渡しても正常に計算される", () => {
    expect(sumOfArray([-1, 0])).toBe(-1);
  });

  test("空配列を渡すと0が返る", () => {
    expect(sumOfArray([])).toBe(0);
  });

  // 下記のテストはTypeScriptで担保されているので不要
  // test('string型の配列を渡すとビルドで怒られる', () => {
  //     expect(() => sumOfArray(["1"])).toThrow();
  // })
});

describe("asyncSumOfArray", () => {
  test("1,2を渡すと3が返る", () => {
    return expect(asyncSumOfArray([1, 2])).resolves.toBe(3);
  });

  test("0を渡しても正常に計算される", () => {
    return expect(asyncSumOfArray([0, 1])).resolves.toBe(1);
  });

  test("負の値を渡しても正常に計算される", () => {
    return expect(asyncSumOfArray([-1, 0])).resolves.toBe(-1);
  });

  test("空配列を渡すと0が返る", () => {
    return expect(asyncSumOfArray([])).resolves.toBe(0);
  });
});

describe("asyncSumOfArraySometimesZero", () => {
  test("databaseのsaveに成功すると正常な計算結果を返す", async () => {
    // MEMO: おそらく下記のように書いても動くが設定でエラーになっているっぽい
    // jest.mock("../util");
    // const mockMethod = DatabaseMock.prototype.save as jest.MockedFunction<typeof DatabaseMock.prototype.save>;
    // mockMethod.mockImplementation(() => ());

    const mockDatabase = new DatabaseMock();
    jest.spyOn(mockDatabase, "save").mockImplementation(() => {});

    await expect(
      asyncSumOfArraySometimesZero([1, 2], mockDatabase)
    ).resolves.toBe(3);
    expect(mockDatabase.save).toHaveBeenCalled();
  });

  test("databaseのsaveに失敗すると0を返す", async () => {
    const mockDatabase = new DatabaseMock();
    jest.spyOn(mockDatabase, "save").mockImplementation(() => {
      throw new Error("error");
    });

    await expect(
      asyncSumOfArraySometimesZero([1, 2], mockDatabase)
    ).resolves.toBe(0);
    expect(mockDatabase.save).toHaveBeenCalled();
  });
});

describe("getFirstNameThrowIfLong", () => {
  describe("NameApiServiceからfirstName取得に成功", () => {
    test("firstNameがmaxNameLengthより短い場合はfirstNameを返す", async () => {
      const mockNameApiService = new NameApiService();
      jest.spyOn(mockNameApiService, "getFirstName").mockResolvedValue("john");

      const maxNameLength = 4;

      await expect(
        getFirstNameThrowIfLong(maxNameLength, mockNameApiService)
      ).resolves.toBe("john");
      expect(mockNameApiService.getFirstName).toHaveBeenCalled();
    });

    test("firstNameがmaxNameLengthより長い場合に例外がthrowされる", async () => {
      const mockNameApiService = new NameApiService();
      jest.spyOn(mockNameApiService, "getFirstName").mockResolvedValue("john");

      const maxNameLength = 3;

      await expect(
        getFirstNameThrowIfLong(maxNameLength, mockNameApiService)
      ).rejects.toThrow("first_name too long");
      expect(mockNameApiService.getFirstName).toHaveBeenCalled();
    });
  });

  describe("NameApiServiceからfirstName取得に失敗", () => {
    test("firstNameがNameApiServiceで規定されているMAX_LENGTHよりも大きい場合に例外がthrowされる", async () => {
      const mockNameApiService = new NameApiService();
      jest
        .spyOn(mockNameApiService, "getFirstName")
        .mockRejectedValue(new Error("firstName is too long!"));

      const maxNameLength = 4;

      await expect(
        getFirstNameThrowIfLong(maxNameLength, mockNameApiService)
      ).rejects.toThrow("firstName is too long!");
    });
  });
});
