# Key Operation Memos

> Listing 2.1

1. Create `proto` as parent, `child` as child object;
2. Import utility module `util` via ESM module specs;



> Listing 2.2

1. Create `transaction` as parent, `moneyTransaction` as child object;

2. Add `funds` property & `addFunds` method for `moneyTransaction`;



> Listing 2.3

1. 测试1：（沿用 `listing2.2` 代码）继承关系已建立（`Object.getPrototypeOf(child) === parent`）
2. 测试2：父类属性可访问；
3. 子类属性也可访问。



> Listing 2.3a

- 在 `Listing 2.3` 的基础上，测试 `Object.create(proto, properties)` 的第二个参数，重新定义 `funds` 属性。



> Listing 2.4 Creating hashTransaction with basic hashing calculation

1. 使用 `Object.create` 定义 `hashTransaction` 对象及哈希值计算方法；
2. 使用 `Object.setPrototypeOf(child, parent)` 重新定义子类对象 `moneyTransaction`，并调用父类方法计算哈希值成功。
3. 新增【添加分割线】方法 `splitline()`



> Listing2.5 Building and linking objects using the constructor functions pattern

1. 实测 `function` 的构造函数模式创建父子关系；
2. 实测 `target.new` 的用法。

