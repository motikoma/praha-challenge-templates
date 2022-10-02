// todo: ここに単体テストを書いてみましょう！

import { asyncSumOfArray, asyncSumOfArraySometimesZero, getFirstNameThrowIfLong, sumOfArray } from "../functions"
import { NameApiService } from "../nameApiService";
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

    test('空配列を渡すと0が返る', () => {
        expect(sumOfArray([])).toBe(0)
    })

    // 下記のテストはTypeScriptで担保されているので不要
    // test('string型の配列を渡すとビルドで怒られる', () => {
    //     expect(() => sumOfArray(["1"])).toThrow();
    // })
});

describe("asyncSumOfArray", () => {
    test("1,2を渡すと3が返る", () => {
        return expect(asyncSumOfArray([1,2])).resolves.toBe(3)
    })

    test("0を渡しても正常に計算される", () => {
        return expect(asyncSumOfArray([0,1])).resolves.toBe(1)
    })

    test("負の値を渡しても正常に計算される", () => {
        return expect(asyncSumOfArray([-1,0])).resolves.toBe(-1)
    })

    test("空配列を渡すと0が返る", () => {
        return expect(asyncSumOfArray([])).resolves.toBe(0);
    })
});

describe("asyncSumOfArraySometimesZero", () => {

    test("databaseのsaveに成功すると正常な計算結果を返す", () => {
        const spy = jest.spyOn(DatabaseMock.prototype, "save").mockImplementation(() => {});

        const mockDatabase = new DatabaseMock();
        expect(asyncSumOfArraySometimesZero([1,2], mockDatabase)).resolves.toBe(3);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    })

    test("databaseのsaveに失敗すると0を返す", () => {
        const spy = jest.spyOn(DatabaseMock.prototype, "save").mockImplementation(() => {throw new Error("error")});

        const mockDatabase = new DatabaseMock();
        expect(asyncSumOfArraySometimesZero([1,2], mockDatabase)).resolves.toBe(0);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    })
})

describe("getFirstNameThrowIfLong", () => {

    describe("NameApiServiceからfirstName取得に成功", () => {

        test("firstNameがmaxNameLengthより短い場合はfirstNameを返す", async () => {
            jest.spyOn(NameApiService.prototype, "getFirstName").mockImplementation(() => Promise.resolve("john"));

            const maxNameLength = 4;
            const mockNameApiService = new NameApiService();
            return expect(getFirstNameThrowIfLong(maxNameLength, mockNameApiService)).resolves.toBe("john");
        })

        test("firstNameがmaxNameLengthより長い場合に例外がthrowされる", async () => {
            jest.spyOn(NameApiService.prototype, "getFirstName").mockImplementation(() => Promise.resolve("john"));

            const maxNameLength = 3;
            const mockNameApiService = new NameApiService();
            return expect(getFirstNameThrowIfLong(maxNameLength, mockNameApiService)).rejects.toThrow("first_name too long");
        })
    })

    describe("NameApiServiceからfirstName取得に失敗", () => {
        test("firstNameがNameApiServiceで規定されているMAX_LENGTHよりも大きい場合に例外がthrowされる", async () => {
            jest.spyOn(NameApiService.prototype, "getFirstName").mockImplementation(() => Promise.reject(new Error("firstName is too long!")));

            const maxNameLength = 4;
            const mockNameApiService = new NameApiService();
            return expect(getFirstNameThrowIfLong(maxNameLength, mockNameApiService)).rejects.toThrow("firstName is too long!");
        })
    })
})