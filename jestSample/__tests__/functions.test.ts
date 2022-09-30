// todo: ここに単体テストを書いてみましょう！

import { asyncSumOfArray, sumOfArray } from "../functions"

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