/** 1、布尔值 */
let aBoolean: boolean = true;
/** 2、数字 */
let aNumber: number = 12;
/** 3、字符串 */
// 3.1、 普通字符串
let aname: string = 'Diana';
// 3.2、 模板字符串
let saySth: string = `I\`m ${aname}!`;

/** 4、数组 */
// 4.1、普通式：一个元素为number的数组
let aArray: number[] = [1, 2, 3];
// 4.2、泛型式：一个元素为number的数组
let anotherArray: Array<number> = [1, 2, 3];


/** 5、元组 Tuple */
let x: [number, string] = [0, '1']; // 数组元素必须跟元组 类型,及长度 一一对应。
// 访问数组越界的 元素时，会使用 【联合类型】 替代。
x[2] = '2';

// console.log(x);

/** 6、枚举，元素默认从0 开始。 */
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
console.log(Color);
console.log(colorName);

/** 7、any  让变量不进行类型检查，直接通过编译 */

let aAny: any = 'any';
aAny = 4;
aAny = false;

// 数组类型 any
let anyAray: any[] = [true, 1, '2', [1, 2, 3, 4], {myName: 'Diana'}];
// console.log(anyAray);

// 泛型 any
let aAnyArray: Array<any> = [1, '2', true, {myName: 'Diana'}];
// console.log(aAnyArray);

// 元组 any
let anotherAnyArray: [any] = [true];
anotherAnyArray[1] = 1;
// console.log(anotherAnyArray);

/** 5、Void  没有任何类型,或函数没有任何返回值 */

function aVoidFunc(): void {
  console.log('this is a void function');
}