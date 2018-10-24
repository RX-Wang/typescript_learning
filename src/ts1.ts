let aBoolean: boolean = true;
let aNumber: number = 12;
let aString: string = 'String';

/** 1、数组 */
let aArray: number[] = [1, 2, 3];
let anotherArray: Array<number> = [1, 2, 3];

/** 2、元组 */
let x: [number, string] = [0, '1']; // 数组元素必须跟元组 类型,及长度 一一对应。
x[2] = '2';

// console.log(x);

/** 3、枚举，元素默认从0 开始。 */
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
console.log(Color);
console.log(colorName);

/** 4、any  让变量不进行类型检查，直接通过编译 */

let aAny: any = 'any';
aAny = 4;
aAny = false;

// 数组类型 any
let anyAray: any[] = [true, 1, '2', [1, 2, 3, 4], {name: 'Diana'}];
// console.log(anyAray);

// 泛型 any
let aAnyArray: Array<any> = [1, '2', true, {name: 'Diana'}];
// console.log(aAnyArray);

// 元组 any
let anotherAnyArray: [any] = [true];
anotherAnyArray[1] = 1;
// console.log(anotherAnyArray);

/** 5、Void  没有任何类型,或函数没有任何返回值 */

function aVoidFunc(): void {
  console.log('this is a void function');
}