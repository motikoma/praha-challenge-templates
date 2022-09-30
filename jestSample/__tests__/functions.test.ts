// todo: ここに単体テストを書いてみましょう！

import { asyncSumOfArray, asyncSumOfArraySometimesZero, sumOfArray } from "../functions"
import { DatabaseMock } from "../util";
describe('sumOfArray', () => {
    test('1,2を渡すと3が返る', () => {
        expect(sumOfArray([1,2])).toBe(3);
    })

    test('0を渡しても正常に計算される', () => {
        expect(sumOfArray([0,1])).toBe(1);
    })

    test('負の値を渡しても正常に計算される',() => {
        expect(sumOfArray([-1,0])).toBe(-1);
    })

    test('空配列を渡すと例外がthrowされる', () => {
        expect(() => sumOfArray([])).toThrow();
    })

    // 下記のテストはTypeScriptで担保されているので不要
    // test('string型の配列を渡すとビルドで怒られる', () => {
    //     expect(() => sumOfArray(["1"])).toThrow();
    // })
});

describe("asyncSumOfArray", () => {
    test("1,2を渡すと3が返る", async () => {
        return expect(asyncSumOfArray([1,2])).resolves.toBe(3)
    })

    test("0を渡しても正常に計算される", async () => {
        return expect(asyncSumOfArray([0,1])).resolves.toBe(1)
    })

    test("負の値を渡しても正常に計算される", async () => {
        return expect(asyncSumOfArray([-1,0])).resolves.toBe(-1)
    })

    test("空配列を渡すと例外がthrowされる", async () => {
        return expect(asyncSumOfArray([])).rejects.toThrow()
    })
});

describe("asyncSumOfArraySometimesZero", () => {
    // databaseが正常に処理を終えるパターン
    // databaseがエラーを返すパターン

    // const mockDatabase: DatabaseMock = jest.genMockFromModule("../util");
    // mockDatabase.save = jest.fn().mockImplementation(() => {});


    test("databaseのsaveに成功すると正常な計算結果を返す", async () => {
        const saveSpy = jest.spyOn(DatabaseMock.prototype, "save").mockImplementation(() => {});

        const mockDatabase = new DatabaseMock();
        return expect(asyncSumOfArraySometimesZero([1,2], mockDatabase)).resolves.toBe(3);
    })

    test("databaseのsaveに失敗すると0を返す", async () => {
        const saveSpy = jest.spyOn(DatabaseMock.prototype, "save").mockImplementation(() => {throw new Error("error")});

        const mockDatabase = new DatabaseMock();
        return expect(asyncSumOfArraySometimesZero([1,2], mockDatabase)).resolves.toBe(0);
    })
})