let aBoolean: boolean = true;
let aNumber: number = 12;
let aString: string = 'String';

// 数组
let aArray: number[] = [1, 2, 3];
let anotherArray: Array<number> = [1, 2, 3];

// 元组
let x: [number, string] = [0, '1']; // 数组元素必须跟元组 类型一一对应。
x[2] = '2';

console.log(x);
