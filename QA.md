####一、Html&&Css

Q：doctype的作用

<details>
  <summary>点击查看</summary>
  <pre>
  标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式。
<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。
<br/>
document.compatMode：
BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。
<br/>
这个属性会被浏览器识别并使用，但是如果你的页面没有DOCTYPE的声明，那么compatMode默认就是BackCompat，
浏览器按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式。
如果你的页面添加了DOCTYPE，那么就等同于开启了标准模式
那么浏览器就得老老实实的按照W3C的标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
  </pre>
</details>




Q：link和@import的区别有哪些

<details>
  <summary>点击查看</summary>
  <pre>
  1、从属关系区别
  	@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
  2、加载顺序区别
  	加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。
  3、兼容性区别
  	@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。
  4、DOM可控性区别
  	可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。
  </pre>
</details>



Q：水平垂直居中？兼容性？不知道宽高情况下？

[CSS实现水平垂直居中的1010种方式（史上最全）](https://segmentfault.com/a/1190000016389031)



Q：BFC概念？作用？常用场景？

<details>
  <summary>点击查看</summary>
  <pre>
  BFC(Block formatting context)直译为"<b>块级格式化上下文</b>"。它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。 简单来说，BFC就是用来格式化块级盒子的。
  <br/>
  作用：简单来说BFC就是一个独立不受外界干扰也不干扰外界的盒子.是web页面中盒模型布局的css渲染模式，一个隔离的独立容器
  <br/>
  满足下列条件之一就可触发BFC:
  <b>根元素，即HTML元素</b>
  <b>float的值不为none</b>
  <b>overflow的值不为visible</b>
  <b>display的值为inline-block、table-cell、table-caption</b>
  <b>position的值为absolute或fixed</b>
  <br/>
  应用场景：
  <b>防止margin发生重叠</b>
  <b>自适应2栏布局</b>
  <b>清除浮动</b>
  </pre>
</details>
[BFC的概念与应用场景](https://juejin.cn/post/6844903753074606094)



Q：Flex？注意flex：1的含义，一般会给你个场景题

<details>
  <summary>点击查看</summary>
  <pre>
  CSS属性 flex 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，默认值为0 1 auto。后两个属性可选。
  所以，<b>flex:1</b>其实就是设置了三个属性：
  <b>flex-grow: 1;</b>
  <b>flex-shrink: 1;</b>
  <b>flex-basis: 0%;</b>
  <br/>
  <b>flex-grow（0）</b>
  flex-grow定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。若flex中没有指定flex-grow,则相当于设置了flex-grow:1;
	<b>flex-shrink（1）</b>
  flex-shrink定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。若flex中没有指定flex-shrink,则等同于设置了flex-shrink:1;
	<b>flex-basis（auto）</b>
  flex-basis定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。如果flex中省略了该属性，则相当于设置了flex-basis:0%。
  <br/>
  当flex为none时,等同于flex: 0 0 auto;
  当flex为auto时，等同于flex: 1 1 auto;
  当flex取值为一个数字，则该数字是设置的flex-grow值，其它两个属性用初始值，如flex:1时，等同于flex: 1 1 0%;
  当flex取值为2个数字时，相当于设置的flex-grow和flex-shrink值，flex-basis取值为初始值，如flex:1 0时，等同于flex: 1 0 0%;
  当flex取值为1个数字和1个长度或百分比时，设置的是flex-grow和flex-basis的值，flex-shrink值时初始值，如flex:1 20%,等同于flex: 1 1 20%。
  </pre>
</details>


Q：盒模型概念，如何切换盒模型？

<details>
  <summary>点击查看</summary>
  <pre>
  CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。
  <br/>
  （1）有两种， IE 盒子模型、W3C 盒子模型；
  （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
  （3）区 别： IE的content部分把 border 和 padding计算了进去;
  <br/>
  切换盒模型：
  box-sizing: content-box 是W3C盒子模型;（默认）
  box-sizing: border-box 是IE盒子模型。
  </pre>
</details>
[css的两种盒模型](https://www.jianshu.com/p/6640ef99ebff)



Q：移动端1px解决方案

[移动端1px解决方案](https://juejin.cn/post/6844903877947424782)



Q：伪类和伪元素区别？使用场景？

[伪类与伪元素的区别及实战](https://juejin.cn/post/6844903761891213320)

[CSS中伪类与伪元素，你弄懂了吗？](https://zhuanlan.zhihu.com/p/46909886)



#### 二、JavaScript

Q：讲讲js数据类型？基本和引用的区别？Symbol和BigInt讲一讲应用场景？

<details>
<summary>点击查看</summary>
  <pre>
  Javascript 中的数据类型包括<b>原始类型</b>和<b>引用类型</b>。
  其中原始类型包括 <b>Null、Undefined、Boolean、String、Number、Symbol、BigInt</b>。
  引用类型指的是 <b>Object（子类型Array、Date、Function、RegExp、Global、Math）</b>。
   <br/>
   <b>基本类型：</b>
   1. 基本数据类型的值是不可变的
   2. 基本数据类型不可以添加属性和方法
   3. 基本数据类型的赋值是简单赋值
   4. 基本数据类型的比较是值的比较
   5. 基本数据类型是存放在栈区的
   <b>引用类型：</b>
   1. 引用类型的值是可以改变的
   2. 引用类型可以添加属性和方法
   3. 引用类型的赋值是对象引用
   4. 引用类型的比较是引用的比较
   5. 引用类型是同时保存在栈区和堆区中的
   <br/>
  <b>null表示"没有对象"，即该处不应该有值。</b>
   1.作为函数的参数，表示该函数的参数不是对象。
	 2.作为对象原型链的终点。
  <b>undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。</b>
   1.变量被声明了，但没有赋值时，就等于 undefined。
   2.调用函数时，应该提供的参数没有提供，该参数等于undefined。
   3.对象没有赋值的属性，该属性的值为 undefined。
   4.函数没有返回值时，默认返回 undefined。
   <br/>
   <b>判断数组的方法：isArray > Object.prototype.toString.call() > instanceof > constructor</b>   
   <br/>
   <b>Symbol</b>实例是唯一且不可改变的。也就是说，Symbol 生成一个全局唯一的值可以保证不会与其他属性名产生冲突。
   Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
   <b>BigInt</b>是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。
  </pre>
</details>

[一文说透 JS 中的数据类型](https://juejin.cn/post/6904593734168477710)

[基本数据类型和引用类型的区别详解](https://segmentfault.com/a/1190000008472264)



Q：判断数据类型的方法？instanceof原理?判断空对象？typof null？typeof NaN？

<details>
<summary>点击查看</summary>
  <pre>
  <b>1. typeof(可用来判断基本数据类型和函数，不可以对引用数据类型进行具体的判断)</b>
  typeof操作符返回一个字符串，可以用来判断数据所属的基本类型（null除外），但引用类型的判断结果都为object（function除外）。
  在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。
  <b>注意 typeof NaN === 'number'</b>
  <br/>
  <b>2. instanceof</b>
  instanceof 运算符用于判断构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
  也就是说当使用instanceof进行类型判断时，会在fn的原型链中向上查找，直到找到构造函数.prototype，如果找到了，就会返回true，否则返回false。
  <b>Boolean,String,Number这三个特殊的引用类型为基本包装类型，也叫包装对象.</b>
也就是说当读取string,boolean和number这三个基本数据类型的时候，后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据.
  <br/>
  <b>3. constructor</b>
  判断原理： 通过constructor属性
  prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。因此，正常情况下，所有对象实例都有一个constructor属性，属性值指向构造此对象实例的构造函数。
  <br/>
  <b>4. Object.prototype.toString.call(obj)</b>
  判断原理： toString是Object的一个方法，会返回反映这个对象的字符串。
JS中所有的构造器Number,Array,Function等都会继承并重写这个方法。
 <br/>
  <b>5. 其他方法</b>
  Array.isArray(obj)：判断是否为数组
  isNaN：判断是否非数值
  </pre>
</details>

[JS的5种数据类型判断方法及原理超详解](https://blog.csdn.net/jian_zi/article/details/102650279)

[JavaScript 用七种方式教你判断一个变量是否为数组类型](https://lpyexplore.gitee.io/blog/blogs/frontend/js/sevenThisIsArray.html)



Q：var/let/const 区别？暂时性死区？块级作用域？const a = {}; a.x = 1 能不能修改？

<details>
<summary>点击查看</summary>
  <pre>
  var和let/const的区别
  1、不可重复声明
  2、不存在变量提升
  3、暂时性死区
  4、块级作用域
  5、let、const声明的全局变量不会挂在顶层对象下面
  <br/>
  const命令两个注意点:
  1、const 声明之后必须马上赋值，否则会报错
  2、const 简单类型一旦声明就不能再更改，复杂类型(数组、对象等)指针指向的地址不能更改，内部数据可以更改。
  <br/>
  暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，<b>只有等到声明变量的那一行代码出现，才可以获取和使用该变量</b>
  ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
  块级作用域：块级作用域其实就是立即执行函数(function(){})()
  <br/>
  变量的赋值可以分为三个阶段：
  1、创建变量，在内存中开辟空间
  2、初始化变量，将变量初始化为undefined
  3、真正赋值
  <br/>
  关于let、var和function：
  1、let的「创建」过程被提升了，但是初始化没有提升。
  2、var的「创建」和「初始化」都被提升了。
  3、function的「创建」「初始化」和「赋值」都被提升了。
  </pre>
</details>



Q：new操作符具体做了什么事情

<details>
  <summary>点击查看</summary>
  <pre>
  <b>new操作符做了4件事情：</b>
    1、创建了一个空的js对象（即{}）
    2、将空对象的原型prototype指向构造函数的原型
    3、将空对象作为构造函数的上下文（改变this指向）
    4、对构造函数有返回值的判断
  </pre>
</details>


Q：箭头函数与普通函数的区别

[箭头函数与普通函数的区别](https://lpyexplore.gitee.io/blog/blogs/frontend/js/twoTypeFunc.html)



Q：什么是作用域链

<details>
  <summary>点击查看</summary>
  <pre>
  作用域链式是一个对象列表。他保证了变量对象的有序访问。首先要了解作用域链，当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止。而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。
  </pre>
</details>



Q：说说你对函数式编程的理解？函数柯里化的理解？平时的使用场景？

<details>
  <summary>点击查看</summary>
  <pre>
  我们常见的编程范式有两种：<b>命令式和声明式</b>，比如我们熟悉的面向对象思想就属于命令式，而函数式编程属于声明式。而且顺带说一句，函数式编程里面提到的“函数”不是我们理解的编程中的“function”概念，而是数学中的函数，即变量之间的映射。
  <b>函数式编程关心数据的映射，命令式编程关心解决问题的步骤</b>
  纯函数是函数式编程中一个很重要的概念，它的定义是：<b>纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，且不依赖外部环境。</b>
  <br/>
  柯里化（curry）的理念很简单：<b>只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。</b>
  <b>柯里化在日常编程中的使用主要体现在“预加载函数”，即提前缓存一部分参数，以便在未来使用。</b>
  </pre>
</details>

[浅析函数式编程与前端](https://zhuanlan.zhihu.com/p/158884990)



Q：call、apply、bind区别？bind实现？bind之后还能修改this指向吗？为什么？

<details>
  <summary>点击查看</summary>
  <pre>
  1、<b>call(object,arg1,arg2)</b> ，call方法的第一个参数是函数中this重新指向的对象，剩下的参数是传入该函数的形参
  不传，或者传null,undefined， 函数中的 this 指向 window 对象，传递另一个函数的函数名，函数中的 this 指向这个函数的引用，传递字符串、数值或布尔类型等基础类型，函数中的 this 指向其对应的包装对象，如 String、Number、Boolean，传递一个对象，函数中的 this 指向这个对象。
  2、<b>apply(object,[arg1,arg2])</b>，apply方法的第一个参数是函数中this重新指向的对象，第二个参数数组是传入该函数的形参；<b>和call方法唯一区别是第二参数的传递形式是数组。</b>
  3、<b>bind(object,arg1,arg2)</b>，bind方法是ES5 新增的一个方法，传参和call方法一致。<b>与call、apply方法的区别是，call和apply方法会对目标函数进行自动执行，会返回一个新的函数。call和apply无法在事件绑定函数中使用。而bind弥补了这个缺陷，在实现改变函数 this 的同时又不会自动执行目标函数，因此可以完美的解决上述问题，</b>
  <br/>
  <b>注意：一旦函数通过bind绑定了有效的this对象，那么在函数执行过程中this会指向该对象，即使使用call、apply也不能改变this的指向</b>
  </pre>
</details>

[深入理解call、apply、bind（改变函数中的this指向）](https://blog.csdn.net/zhouzuoluo/article/details/84935106)



Q：闭包概念，最主要的还是问闭包的场景？

<details>
  <summary>点击查看</summary>
  <pre>
  <b>闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。</b>理解闭包的关键在于：外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象，这就是闭包的重要概念。
  <br/>
  优点（闭包的作用）：
  ① 在函数执行完后，函数内部的变量一直存在于内存中，不会在调用结束后被垃圾回收机制回收；
  ② 函数外部也可以读取到函数内部的变量；
  缺点：
  由于闭包会使用函数中的变量存在在内存中，内存消耗很大，所以不能滥用闭包；
  解决的办法是：退出函数之前，将不使用的局部变量删除；
  <br/>
  <b>应用场景：</b>
　　保护函数内的变量安全：如迭代器、生成器。
　　在内存中维持变量：如果缓存数据、柯里化。
　　给对象设置私有属性并利用特权(Privileged)方法访问私有属性。
  </pre>
</details>
[JavaScript 里的闭包是什么？应用场景有哪些？](https://www.zhihu.com/question/19554716)



Q：各种继承

<details>
  <summary>点击查看</summary>
  <pre>
  ES5的继承是通过prototype或构造函数机制来实现。<b>ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。</b>
ES6的继承机制完全不同，<b>实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。</b>
<br/>
具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。
<br/>
ps：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。
  </pre>
</details>

[做完这48道题彻底弄懂JS继承](https://juejin.cn/post/6844904098941108232)



Q：深拷贝与浅拷贝？常用方法？手写一个深拷贝函数？

[浅拷贝 VS 深拷贝，并且手写一个深拷贝（深克隆）](https://blog.csdn.net/XH_jing/article/details/106933368)

[Javascript 经典面试之深拷贝VS浅拷贝](https://segmentfault.com/a/1190000023751381)



Q：说说你知道的JavaScript设计模式？观察者和发布订阅的区别？手写一个发布订阅？

<details>
  <summary>点击查看</summary>
  <pre>
  首先，这两个模式都是为了维护一系列观察者，当被观察者状态发生变更时，通知这一系列观察者去进行相应更新；然而也有一些区别，那就是发布订阅模式在发布者与订阅者之间多了一个消息管理器，使得发布者与订阅者解耦
  	<img src='https://segmentfault.com/img/bVbL8hq'/>
  	<img src='https://segmentfault.com/img/remote/1460000021272625'/>
  	<img src='https://segmentfault.com/img/remote/1460000021272626'/>
  </pre>
</details>
[JavaScript设计模式es6（23种)](https://juejin.cn/post/6844904032826294286)

[JavaScript设计模式——观察者模式 vs 发布订阅模式](https://segmentfault.com/a/1190000023825602)

[从一道面试题简单谈谈发布订阅和观察者模式](https://segmentfault.com/a/1190000021272622)



Q：说说对你对JavaScript异步编程的理解？

<details>
  <summary>点击查看</summary>
  <pre>
  <b>第一个阶段 - 回调函数</b>，但会导致两个问题:
    1、缺乏顺序性： 回调地狱导致的调试困难，和大脑的思维方式不符
    2、缺乏可信任性： 控制反转导致的一系列信任问题
  <b>第二个阶段 - Promise</b>，Promise是基于PromiseA+规范的实现，它很好的解决了控制反转导致的信任问题，将代码执行的主动权重新拿了回来。
  <b>第三个阶段 - 生成器函数Generator</b>，使用Generator，可以让我们用同步的方式来书写代码，解决了顺序性的问题，但是需要手动去控制next(...)，将回调成功返回的数据送回JavaScript主流程中。
  <b>第四个阶段 - Async/Await</b>，Async/Await结合了Promise和Generator，在await后面跟一个Promise，它会自动等待Promise的决议值，解决了Generator需要手动控制next(...)执行的问题，真正实现了用同步的方式书写异步代码。
  </pre>
</details>

[JavaScript异步编程](https://segmentfault.com/a/1190000015711829)



Q：ES Module与 CommonJS 模块的差异？两者互相加载的方式？一般会扯到AMD

<details>
  <summary>点击查看</summary>
  <pre>
  <b>IIFE</b>：使用自执行函数来编写模块化，特点：<b>在一个单独的函数作用域中执行代码，避免变量冲突。</b>
    (function(){
    return {
      data:[]
    }
  })()
  <b>AMD</b>：使用requireJS 来编写模块化，特点：<b>依赖必须提前声明好。</b>
  define('./index.js',function(code){
    // code 就是index.js 返回的内容
  })
  <b>CMD</b>：使用seaJS 来编写模块化，特点：<b>支持动态引入依赖文件。</b>
  define(function(require, exports, module) {  
    var indexCode = require('./index.js');
  })
  <b>CommonJS</b>：nodejs 中自带的模块化。
  var fs = require('fs');
  <b>ES Modules</b>：ES6 引入的模块化，支持import 来引入另一个 js 。
  import a from 'a';
  <b>UMD</b>：兼容AMD，CommonJS 模块化语法。
<b>webpack(require.ensure)</b>：webpack 2.x 版本中的代码分割。
  <br/>
  <b>commonjs与ES6的module还是有很大区别的：</b>
  1、两者的模块导入导出语法不同：commonjs是module.exports，exports导出，require导入；ES6则是export导出，import导入。
  2、commonjs是运行时加载模块，ES6是在静态编译期间就确定模块的依赖。
  3、ES6在编译期间会将所有import提升到顶部，commonjs不会提升require。
  4、commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。ES6是导出的一个引用，内部修改可以同步到外部。
  5、两者的循环导入的实现原理不同，commonjs是当模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
  6、commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。
  7、CommonJs 是单个值导出，ES6 Module可以导出多个
  </pre>
</details>

[再次梳理AMD、CMD、CommonJS、ES6 Module的区别](https://juejin.cn/post/6844903983987834888)



Q：defer和async的区别

[defer和async的区别](https://segmentfault.com/q/1010000000640869)



Q：Object.defineProperty和Proxy区别

[Object.defineProperty和Proxy区别](https://blog.csdn.net/qwe435541908/article/details/107360849)



Q：Map和Set的用法，WeakMap和WeakSet区别

[Map和Set的用法，WeakMap和WeakSet区别](https://juejin.cn/post/6844903897409011720)



Q：class 的protected、 pravila和public

<details>
  <summary>点击查看</summary>
  <pre>
  1、public 修饰的属性可以在任意位置进行访问修改，默认值，作用范围是全局
  2、private 修饰的属性只能在类的内部进行访问修改，私有属性，作用范围是类的内部。通过在类中添加set get存取器可以在类的外部访问私有属性
  3、protected 修饰的属性只能在当前类和当前类的子类中进行访问修改，受保护的属性，作用范围是当前类和子类的范围内
  </pre>
</details>



#### 三、[React](https://segmentfault.com/a/1190000018604138)

Q：谈谈React

<details>
  <summary>点击查看</summary>
  <pre>
  React 是一个网页 UI 框架，通过组件化的方式解决视图层开发复用的问题，本质是一个组件化框架。
  它的核心设计思路有三点，分别是<b>声明式、组件化、通用性</b>。
  1、声明式的优势在于直观与组合。
  2、组件化的优势在于视图的拆分与模块复用，可以更容易做到高内聚低耦合。
  3、通用性在于一次学习，随处编写。比如 React Native，React 360 等， 这里主要靠虚拟 DOM 来保证实现。
  这使得 React 的适用范围变得足够广，无论是 Web、Native、VR，甚至 Shell 应用都可以进行开发。这也是 React 的优势。
  但作为一个视图层的框架，React 的劣势也十分明显。它并没有提供完整的一揽子解决方案，在开发大型前端应用时，需要向社区寻找并整合解决方案。虽然一定程度上促进了社区的繁荣，但也为开发者在技术选型和学习适用上造成了一定的成本。
  </pre>
</details>


Q：为什么React要用JSX？

<details>
  <summary>点击查看</summary>
  <pre>
  <b>JSX 是一个 JavaScript 的语法扩展，结构类似 XML。</b>
  JSX 主要用于声明 React 元素，但 React 中并不强制使用 JSX。即使使用了 JSX，也会在构建过程中，通过 Babel 插件编译为 React.createElement。所以 JSX 更像是 React.createElement 的一种语法糖。
  所以从这里可以看出，React 团队并不想引入 JavaScript 本身以外的开发体系。而是希望通过合理的关注点分离保持组件开发的纯粹性。
	接下来与 JSX 以外的三种技术方案进行对比。
	首先是<b>模板</b>，React 团队认为模板不应该是开发过程中的关注点，因为引入了模板语法、模板指令等概念，是一种不佳的实现方案。
	其次是<b>模板字符串</b>，模板字符串编写的结构会造成多次内部嵌套，使整个结构变得复杂，并且优化代码提示也会变得困难重重。
	最后是<b>JXON</b>，同样因为代码提示困难的原因而被放弃。
	所以 React 最后选用了 JSX，因为 JSX 与其设计思想贴合，不需要引入过多新的概念，对编辑器的代码提示也极为友好。
  </pre>
  <img src='https://s0.lgstatic.com/i/image/M00/73/A4/Ciqc1F_GJSSAU6odAAFLeX8UyTo307.png'/>
</details>


Q：生命周期详细描述一下？官方为什么改变？如何避免生命周期中的坑？

<details>
  <summary>点击查看</summary>
  <pre>
  	<img src='https://pic3.zhimg.com/80/v2-570de4eac482631a59ec29611d03ade6_1440w.jpg'/>
  	避免生命周期中的坑需要做好两件事：
    <b>不在恰当的时候调用了不该调用的代码；</b>
    <b>在需要调用时，不要忘了调用。</b>
    那么主要有这么 7 种情况容易造成生命周期的坑:
    1、<b>getDerivedStateFromProps</b> 容易编写反模式代码，使受控组件与非受控组件区分模糊。
    2、<b>componentWillMount</b> 在 React 中已被标记弃用，不推荐使用，主要原因是新的异步渲染架构会导致它被多次调用。所以网络请求及事件绑定代码应移至 componentDidMount 中。
    3、<b>componentWillReceiveProps</b> 同样被标记弃用，被 getDerivedStateFromProps 所取代，主要原因是性能问题。
    4、<b>shouldComponentUpdate</b> 通过返回 true 或者 false 来确定是否需要触发新的渲染。主要用于性能优化。
    5、<b>componentWillUpdate</b> 同样是由于新的异步渲染机制，而被标记废弃，不推荐使用，原先的逻辑可结合 getSnapshotBeforeUpdate 与 componentDidUpdate 改造使用。
    6、如果在 <b>componentWillUnmount</b> 函数中忘记解除事件绑定，取消定时器等清理操作，容易引发 bug。
    7、如果没有添加错误边界处理，当渲染发生异常时，用户将会看到一个无法操作的白屏，所以一定要添加。
  </pre>
</details>
[React v16.3之后的组件生命周期函数](https://zhuanlan.zhihu.com/p/38030418)

[我对 React V16.4 生命周期的理解](https://zhuanlan.zhihu.com/p/150929928)



Q：调用 setState 之后发生了什么？

<details>  
	<summary>点击查看</summary>
  <pre>
  在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
  1、在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。
  2、然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树， Fiber 算法的最大特点是可以做到异步可中断的执行。
  3、然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法。
  4、在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag。
  5、当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程。
  6、当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段。
  7、在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素。</pre>
</details>



Q：如何设计React组件？

<details>
  <summary>点击查看</summary>
  <pre>
  <b>从设计上而言，社区主流分类的方案是展示组件与灵巧组件。</b>
  <b>展示组件内部没有状态管理，仅仅用于最简单的展示表达。</b>展示组件中最基础的一类组件称作代理组件。代理组件常用于封装常用属性、减少重复代码。很经典的场景就是引入 Antd 的 Button 时，你再自己封一层。如果未来需要替换掉 Antd 或者需要在所有的 Button 上添加一个属性，都会非常方便。基于代理组件的思想还可以继续分类，分为样式组件与布局组件两种，分别是将样式与布局内聚在自己组件内部。
  <b>灵巧组件由于面向业务，其功能更为丰富，复杂性更高，复用度低于展示组件。</b>最经典的灵巧组件是容器组件。在开发中，我们经常会将网络请求与事件处理放在容器组件中进行。容器组件也为组合其他组件预留了一个恰当的空间。还有一类灵巧组件是高阶组件。高阶组件被 React 官方称为 React 中复用组件逻辑的高级技术，它常用于抽取公共业务逻辑或者提供某些公用能力。常用的场景包括检查登录态，或者为埋点提供封装，减少样板代码量。高阶组件可以组合完成链式调用，如果基于装饰器使用，就更为方便了。高阶组件中还有一个经典用法就是反向劫持，通过重写渲染函数的方式实现某些功能，比如场景的页面加载圈等。但高阶组件也有两个缺陷，第一个是静态方法不能被外部直接调用，需要通过向上层组件复制的方式调用，社区有提供解决方案，使用 hoist-non-react-statics 可以解决；第二个是 refs 不能透传，使用 React.forwardRef API 可以解决。
  <br/>
  从工程实践而言，通过文件夹划分的方式切分代码。我初步常用的分割方式是将页面单独建立一个目录，将复用性略高的 components 建立一个目录，在下面分别建立 basic、container 和 hoc 三类。这样可以保证无法复用的业务逻辑代码尽量留在 Page 中，而可以抽象复用的部分放入 components 中。其中 basic 文件夹放展示组件，由于展示组件本身与业务关联性较低，所以可以使用 Storybook 进行组件的开发管理，提升项目的工程化管理能力。
  </pre>
</details>


Q：说说你对虚拟DOM的理解？直接全量更新和diff哪个快（这个问题要分情况）？

<details>
  <summary>点击查看</summary>
  <pre>
  虚拟 DOM 的<b>工作原理</b>是通过 JS 对象模拟 DOM 的节点。在 Facebook 构建 React 初期时，考虑到要提升代码抽象能力、避免人为的 DOM 操作、降低代码整体风险等因素，所以引入了虚拟 DOM。
  <br/>
  虚拟 DOM 在<b>实现上</b>通常是 Plain Object，以 React 为例，在 render 函数中写的 JSX 会在 Babel 插件的作用下，编译为 React.createElement 执行 JSX 中的属性参数。
  React.createElement 执行后会返回一个 Plain Object，它会描述自己的 tag 类型、props 属性以及 children 情况等。这些 Plain Object 通过树形结构组成一棵虚拟 DOM 树。当状态发生变更时，将变更前后的虚拟 DOM 树进行差异比较，这个过程称为 diff，生成的结果称为 patch。计算之后，会渲染 Patch 完成对真实 DOM 的操作。
  <br/>
  虚拟 DOM 的<b>优点</b>主要有三点：改善大规模 DOM 操作的性能、规避 XSS 风险、能以较低的成本实现跨平台开发。
  <br/>
  虚拟 DOM 的<b>缺点</b>在社区中主要有两点:
  1、内存占用较高，因为需要模拟整个网页的真实 DOM。
  2、高性能应用场景存在难以优化的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React。
  <img src='https://s0.lgstatic.com/i/image/M00/8C/05/Ciqc1F_kXCaAJS7GAACbWvarErs717.png'/>
  </pre>
</details>


[网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？](https://www.zhihu.com/question/31809713)



Q：与其他框架相比，React 的 diff 算法有何不同？

<details>
  <summary>点击查看</summary>
  <pre>
  在回答有何不同之前，首先需要说明下什么是 diff 算法。
	diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。
	React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks 调用之后。此时触发虚拟 DOM 树变更遍历，采用了深度优先遍历算法。但传统的遍历方式，效率较低。为了优化效率，使用了分治的方式。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。
	<b>树比对</b>：由于网页视图中较少有跨层级节点移动，两株虚拟 DOM 树只对同一层次的节点进行比较。
	<b>组件比对</b>：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中。
	<b>元素比对</b>：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 DOM 剪裁操作。
  以上是经典的 React diff 算法内容。自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。
  整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。
  然后拿 Vue 和 Preact 与 React 的 diff 算法进行对比。
  Preact 的 Diff 算法相较于 React，整体设计思路相似，但最底层的元素采用了真实 DOM 对比操作，也没有采用 Fiber 设计。Vue 的 Diff 算法整体也与 React 相似，同样未实现 Fiber 设计。
  然后进行横向比较，React 拥有完整的 Diff 算法策略，且拥有随时中断更新的时间切片能力，在大批量节点更新的极端情况下，拥有更友好的交互体验。
  Preact 可以在一些对性能要求不高，仅需要渲染框架的简单场景下应用。
  Vue 的整体 diff 策略与 React 对齐，虽然缺乏时间切片能力，但这并不意味着 Vue 的性能更差，因为在 Vue 3 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 Vue 中其他的场景几乎都可以使用防抖和节流去提高响应性能。
  </pre>
</details>


Q：什么是HOC？React里面用过哪些？

<details>
  <summary>点击查看</summary>
  <pre>
  高阶组件是重用组件逻辑的高级方法，是一种源于 React 的组件模式。 HOC 是自定义组件，在它之内包含另一个组件。它们可以接受子组件提供的任何动态，但不会修改或复制其输入组件中的任何行为。你可以认为 HOC 是“纯（Pure）”组件。
  HOC可用于许多任务，例如：
	代码重用，逻辑和引导抽象
	渲染劫持
	状态抽象和控制
	Props 控制
  </pre>
</details>


Q：如何面向组件跨层级通信？

<details>
  <summary>点击查看</summary>
  <pre>
  在跨层级通信中，主要分为一层或多层的情况。
  如果只有一层，那么按照 React 的树形结构进行分类的话，主要有以下三种情况：<b>父组件向子组件通信</b>，<b>子组件向父组件通信</b>以及<b>平级的兄弟组件间互相通信</b>。
  1、在父与子的情况下，因为 React 的设计实际上就是传递 Props 即可。那么场景体现在容器组件与展示组件之间，通过 Props 传递 state，让展示组件受控。
  2、在子与父的情况下，有两种方式，分别是回调函数与实例函数。回调函数，比如输入框向父级组件返回输入内容，按钮向父级组件传递点击事件等。实例函数的情况有些特别，主要是在父组件中通过 React 的 ref API 获取子组件的实例，然后是通过实例调用子组件的实例函数。这种方式在过去常见于 Modal 框的显示与隐藏。这样的代码风格有着明显的 jQuery 时代特征，在现在的 React 社区中已经很少见了，因为流行的做法是希望组件的所有能力都可以通过 Props 控制。
  3、兄弟组件通过父组件中转。
  多层级间的数据通信，有两种情况。<b>第一种是一个容器中包含了多层子组件，需要最底部的子组件与顶部组件进行通信。</b>在这种情况下，如果不断透传 Props 或回调函数，不仅代码层级太深，后续也很不好维护。<b>第二种是两个组件不相关，在整个 React 的组件树的两侧，完全不相交。</b>
  那么基于多层级间的通信一般有三个方案。
  1、第一个是使用 React 的 Context API，最常见的用途是做语言包国际化。
  2、第二个是使用全局变量与事件。全局变量通过在 Windows 上挂载新对象的方式实现，这种方式一般用于临时存储值，这种值用于计算或者上报，缺点是渲染显示时容易引发错误。全局事件就是使用 document 的自定义事件，因为绑定事件的操作一般会放在组件的 componentDidMount 中，所以一般要求两个组件都已经在页面中加载显示，这就导致了一定的时序依赖。如果加载时机存在差异，那么很有可能导致两者都没能对应响应事件。
  3、第三个是使用状态管理框架，比如 Flux、Redux 及 Mobx。优点是由于引入了状态管理，使得项目的开发模式与代码结构得以约束，缺点是学习成本相对较高。
  <img src='https://s0.lgstatic.com/i/image/M00/8A/F2/Ciqc1F_bAvqAGCQcAAC9M-t_bsw991.png'/>
  </pre>
</details>


Q：列举一种你了解的 React 状态管理框架

<details>
  <summary>点击查看</summary>
  <pre>
  首先介绍 Flux，Flux 是一种使用单向数据流的形式来组合 React 组件的应用架构。
	Flux 包含了 4 个部分，分别是 Dispatcher、 Store、View、Action。Store 存储了视图层所有的数据，当 Store 变化后会引起 View 层的更新。如果在视图层触发一个 Action，就会使当前的页面数据值发生变化。Action 会被 Dispatcher 进行统一的收发处理，传递给 Store 层，Store 层已经注册过相关 Action 的处理逻辑，处理对应的内部状态变化后，触发 View 层更新。
	Flux 的优点是单向数据流，解决了 MVC 中数据流向不清的问题，使开发者可以快速了解应用行为。从项目结构上简化了视图层设计，明确了分工，数据与业务逻辑也统一存放管理，使在大型架构的项目中更容易管理、维护代码。
<br/>
	其次是 Redux，Redux 本身是一个 JavaScript 状态容器，提供可预测化状态的管理。社区通常认为 Redux 是 Flux 的一个简化设计版本，但它吸收了 Elm 的架构思想，更像一个混合产物。它提供的状态管理，简化了一些高级特性的实现成本，比如撤销、重做、实时编辑、时间旅行、服务端同构等。
	Redux 的核心设计包含了三大原则：<b>单一数据源</b>、<b>纯函数 Reducer</b>、<b>State</b> 是只读的。
	Redux 中整个数据流的方案与 Flux 大同小异。
	Redux 中的另一大核心点是处理“副作用”，AJAX 请求等异步工作，或不是纯函数产生的第三方的交互都被认为是 “副作用”。这就造成在纯函数设计的 Redux 中，处理副作用变成了一件至关重要的事情。社区通常有两种解决方案：
	第一类是在 Dispatch 的时候会有一个 middleware 中间件层，拦截分发的 Action 并添加额外的复杂行为，还可以添加副作用。第一类方案的流行框架有 Redux-thunk、Redux-Promise、Redux-Observable、Redux-Saga 等。
	第二类是允许 Reducer 层中直接处理副作用，采取该方案的有 React Loop，React Loop 在实现中采用了 Elm 中分形的思想，使代码具备更强的组合能力。
	除此以外，社区还提供了更为工程化的方案，比如 rematch 或 dva，提供了更详细的模块架构能力，提供了拓展插件以支持更多功能。
	Redux 的优点很多：结果可预测；代码结构严格易维护；模块分离清晰且小函数结构容易编写单元测试；Action 触发的方式，可以在调试器中使用时间回溯，定位问题更简单快捷；单一数据源使服务端同构变得更为容易；社区方案多，生态也更为繁荣。
<br/>
	最后是 Mobx，Mobx 通过监听数据的属性变化，可以直接在数据上更改触发UI 的渲染。在使用上更接近 Vue，比起 Flux 与 Redux 的手动挡的体验，更像开自动挡的汽车。Mobx 的响应式实现原理与 Vue 相同，以 Mobx 5 为分界点，5 以前采用 Object.defineProperty 的方案，5 及以后使用 Proxy 的方案。它的优点是样板代码少、简单粗暴、用户学习快、响应式自动更新数据让开发者的心智负担更低。
	<img src='https://s0.lgstatic.com/i/image2/M01/03/A7/CgpVE1_gUQiAAvzrAAOW0evXtuI496.png'/>
  </pre>
</details>


Q：如何解释 React 的渲染流程？

<details>
  <summary>点击查看</summary>
  <pre>
  React 的渲染过程大致一致，但协调并不相同，以 React 16 为分界线，分为 Stack Reconciler 和 Fiber Reconciler。这里的协调从狭义上来讲，特指 React 的 diff 算法，广义上来讲，有时候也指 React 的 reconciler 模块，它通常包含了 diff 算法和一些公共逻辑。
<br/>
  回到 Stack Reconciler 中，Stack Reconciler 的核心调度方式是递归。调度的基本处理单位是事务，它的事务基类是 Transaction，这里的事务是 React 团队从后端开发中加入的概念。在 React 16 以前，挂载主要通过 ReactMount 模块完成，更新通过 ReactUpdate 模块完成，模块之间相互分离，落脚执行点也是事务。
<br/>
  在 React 16 及以后，协调改为了 Fiber Reconciler。它的调度方式主要有两个特点，第一个是协作式多任务模式，在这个模式下，线程会定时放弃自己的运行权利，交还给主线程，通过requestIdleCallback 实现。第二个特点是策略优先级，调度任务通过标记 tag 的方式分优先级执行，比如动画，或者标记为 high 的任务可以优先执行。Fiber Reconciler的基本单位是 Fiber，Fiber 基于过去的 React Element 提供了二次封装，提供了指向父、子、兄弟节点的引用，为 diff 工作的双链表实现提供了基础。
<br/>
  在新的架构下，整个生命周期被划分为 Render 和 Commit 两个阶段。Render 阶段的执行特点是可中断、可停止、无副作用，主要是通过构造 workInProgress 树计算出 diff。以 current 树为基础，将每个 Fiber 作为一个基本单位，自下而上逐个节点检查并构造 workInProgress 树。这个过程不再是递归，而是基于循环来完成。
<br/>
  在执行上通过 requestIdleCallback 来调度执行每组任务，每组中的每个计算任务被称为 work，每个 work 完成后确认是否有优先级更高的 work 需要插入，如果有就让位，没有就继续。优先级通常是标记为动画或者 high 的会先处理。每完成一组后，将调度权交回主线程，直到下一次 requestIdleCallback 调用，再继续构建 workInProgress 树。
<br/>
  在 commit 阶段需要处理 effect 列表，这里的 effect 列表包含了根据 diff 更新 DOM 树、回调生命周期、响应 ref 等。
  但一定要注意，这个阶段是同步执行的，不可中断暂停，所以不要在 componentDidMount、componentDidUpdate、componentWiilUnmount 中去执行重度消耗算力的任务。
<br/>
  如果只是一般的应用场景，比如管理后台、H5 展示页等，两者性能差距并不大，但在动画、画布及手势等场景下，Stack Reconciler 的设计会占用占主线程，造成卡顿，而 fiber reconciler 的设计则能带来高性能的表现。
  <img src='https://s0.lgstatic.com/i/image/M00/8C/83/CgqCHl_tm5OAarlJAAJVi8u3-KU747.png'/>
  </pre>
</details>


Q：React 的渲染异常会造成什么后果？

<details>
  <summary>点击查看</summary>
  <pre>
  React 渲染异常的时候，在没有做任何拦截的情况下，会出现整个页面白屏的现象。它的成型原因是在渲染层出现了 JavaScript 的错误，导致整个应用崩溃。这种错误通常是在 render 中没有控制好空安全，使值取到了空值。
  <br/>
  所以在治理上，我的方案是这样的，从<b>预防</b>与<b>兜底</b>两个角度去处理。
  在预防策略上，引入空安全相关的方案，在做技术选型时，我主要考虑了三个方案：第一个是引入外部函数，比如 Facebook 的 idx 或者 Lodash.get；第二个是引入 Babel 插件，使用 ES 2020 的标准——可选链操作符；第三个是 TypeScript，它在 3.7 版本以后可以直接使用可选链操作符。最后我选择了引入 Babel 插件的方案，因为这个方案外部依赖少，侵入性小，而且团队内没有 TS 的项目。
  在兜底策略上，因为考虑到团队内部和我存在一样的问题，就抽取了兜底的公共高阶组件，封装成了 NPM 包供团队内部使用。 
  <br/>
  从最终的数据来看，预防与治理方案覆盖了团队内 100% 的 React 项目，头三个月兜底组件统计到了日均 10 次的报警信息，其中有 10% 是公司关键业务。那么经过分析与统计，首先是为关键的 UI 组件添加兜底组件进行拦截，然后就是做内部培训，对易错点的代码进行指导，加强 Code Review。后续到现在，线上只收到过 1 次报警。
  <img src='https://s0.lgstatic.com/i/image/M00/8C/C6/CgqCHl_0BcmAdxv4AAGsUAUv0QQ275.png'/>
  </pre>
</details>


Q：Fiber干了什么事情？requestIdleCallback了解多少？

[React Fiber是什么](https://zhuanlan.zhihu.com/p/26027085)

[React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127)

[你应该知道的requestIdleCallback](https://juejin.cn/post/6844903592831238157)



Q：react性能优化？

[React性能优化的8种方式了解一下？](https://juejin.cn/post/6844903924302888973)



Q：如何避免重复渲染？

<details>
  <summary>点击查看</summary>
  <pre>
  如何避免重复渲染分为三个步骤：<b>选择优化时机</b>、<b>定位重复渲染的问题</b>、<b>引入解决方案</b>。
  优化时机需要根据当前业务标准与页面性能数据分析，来决定是否有必要。如果卡顿的情况在业务要求范围外，那确实没有必要做；如果有需要，那就进入下一步——定位。
  定位问题首先需要复现问题，通常采用还原用户使用环境的方式进行复现，然后使用 Performance 与 React Profiler 工具进行分析，对照卡顿点与组件重复渲染次数及耗时排查性能问题。
  通常的解决方案是加 PureComponent 或者使用 React.memo 等组件缓存 API，减少重新渲染。但错误的使用方式会使其完全无效，比如在 JSX 的属性中使用箭头函数，或者每次都生成新的对象，那基本就破防了。
  针对这样的情况有三个解决方案：
  1、缓存，通常使用 reselect 缓存函数执行结果，来避免产生新的对象；
  2、不可变数据，使用数据 ImmutableJS 或者 immerjs 转换数据结构；
  3、手动控制，自己实现 shouldComponentUpdate 函数，但这类方案一般不推荐，因为容易带来意想不到的 Bug，可以作为保底手段使用。
  <img src='https://s0.lgstatic.com/i/image2/M01/04/F6/CgpVE1_4LHOAYmuIAADInUKQ548136.png'/>
  </pre>
</details>


Q：如何提升 React 代码可维护性？

<details>
  <summary>点击查看</summary>
  <pre>
  如何提升 React 代码的可维护性，究其根本是考虑如何提升 React 项目的可维护性。从软件工程的角度出发，可维护性包含了可分析性、可改变性、稳定性、易测试性与可维护性的依从性，接下来我从这五个方面对相关工作进行梳理。
  可分析性的目标在于快速定位线上问题，可以从预防与兜底两个维度展开工作，预防主要依靠 Lint 工具与团队内部的 Code Review。Lint 工具重在执行代码规划，力图减少不合规的代码；而 Code Review 的重心在于增强团队内部的透明度，做好业务逻辑层的潜在风险排查。兜底主要是在流水线中加入 sourcemap，能够通过线上报错快速定位源码。
  可改变性的目标在于使代码易于拓展，业务易于迭代。工作主要从设计模式与架构设计展开。设计模式主要指组件设计模式，通过容器组件与展示组件划分模块边界，隔绝业务逻辑。整体架构设计，采用了 rematch 方案，rematch 中可以设计的 model 概念可以很好地收敛 action、reducer 及副作用，同时支持动态引入 model，保障业务横向拓展的能力。Rematch 的插件机制非常利于做性能优化，这方面后续可以展开聊一下。
  接下来是稳定性，目标在于避免修改代码引起不必要的线上问题。在这方面，主要通过提升核心业务代码的测试覆盖率来完成。因为业务发展速度快、UI 变化大，所以基于 UI 的测试整体很不划算，但背后沉淀的业务逻辑，比如购物车计算价格等需要长期复用，不时修改，那么就得加测试。举个个人案例，在我自己的项目中，核心业务测试覆盖率核算是 91%，虽然没完全覆盖，但基本解决了团队内部恐惧线上出错的心理障碍。
  然后是易测试性，目标在于发现代码中的潜在问题。在我个人负责的项目中，采用了 Rematch 的架构完成模块分离，整体业务逻辑挪到了 model 中，且 model 自身是一个 Pure Object，附加了多个纯函数。纯函数只要管理好输入与输出，在测试上就很容易。
  最后是可维护性的依从性，目标在于建立团队规范，遵循代码约定，提升代码可读性。这方面的工作就是引入工具，减少人为犯错的概率。其中主要有检查 JavaScript 的 ESLint，检查样式的 stylelint，检查提交内容的 commitlint，配置编辑器的 editorconfig，配置样式的 prettier。总体而言，工具的效果优于文档，团队内的项目整体可保持一致的风格，阅读代码时的切入成本相对较低。
  <img src='https://s0.lgstatic.com/i/image2/M01/05/DD/Cip5yGABPJ-AX7tWAAGZ3QevoI0417.png'/>
  </pre>
</details>


Q：hooks出现的意义？类组件和函数组件之间的区别是什么？

<details>
  <summary>点击查看</summary>
  <pre>
  作为组件而言，类组件与函数组件在使用与呈现上没有任何不同，性能上在现代浏览器中也不会有明显差异。
  它们在开发时的心智模型上却存在巨大的差异。类组件是基于面向对象编程的，它主打的是继承、生命周期等核心概念；而函数组件内核是函数式编程，主打的是 immutable、没有副作用、引用透明等特点。
  之前，在使用场景上，如果存在需要使用生命周期的组件，那么主推类组件；设计模式上，如果需要使用继承，那么主推类组件。但现在由于 React Hooks 的推出，生命周期概念的淡出，函数组件可以完全取代类组件。其次继承并不是组件最佳的设计模式，官方更推崇“组合优于继承”的设计概念，所以类组件在这方面的优势也在淡出。
  性能优化上，类组件主要依靠 shouldComponentUpdate 阻断渲染来提升性能，而函数组件依靠 React.memo 缓存渲染结果来提升性能。
  从上手程度而言，类组件更容易上手，从未来趋势上看，由于React Hooks 的推出，函数组件成了社区未来主推的方案。
  类组件在未来时间切片与并发模式中，由于生命周期带来的复杂度，并不易于优化。而函数组件本身轻量简单，且在 Hooks 的基础上提供了比原先更细粒度的逻辑组织与复用，更能适应 React 的未来发展。
  <img src='https://s0.lgstatic.com/i/image/M00/7E/CE/CgqCHl_PXDiAO20DAABdvYlGsmA577.png'/>
  </pre>
</details>

[React Hooks 入门教程](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

[React函数组件和类组件的区别](https://www.jianshu.com/p/81faec8adb6c)



Q：hooks的限制条件？

<details>
  <summary>点击查看</summary>
  <pre>
  React Hooks 的限制主要有两条：
  1、<b>不要在循环、条件或嵌套函数中调用 Hook；</b>
  2、<b>只在 React 的函数组件中调用 Hook。</b>
  <br/>
  那为什么会有这样的限制呢？就得从 Hooks 的设计说起。Hooks 的设计初衷是为了改进 React 组件的开发模式。在旧有的开发模式下遇到了三个问题。
  <b>组件之间难以复用状态逻辑</b>。过去常见的解决方案是高阶组件、render props 及状态管理框架。
  <b>复杂的组件变得难以理解</b>。生命周期函数与业务逻辑耦合太深，导致关联部分难以拆分。
  <b>人和机器都很容易混淆类</b>。常见的有 this 的问题，但在 React 团队中还有类难以优化的问题，他们希望在编译优化层面做出一些改进。
  这三个问题在一定程度上阻碍了 React 的后续发展，所以为了解决这三个问题，Hooks 基于函数组件开始设计。然而第三个问题决定了 Hooks 只支持函数组件。
  那为什么不要在循环、条件或嵌套函数中调用 Hook 呢？因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。
  这些限制会在编码上造成一定程度的心智负担，新手可能会写错，为了避免这样的情况，可以引入 ESLint 的 Hooks 检查插件进行预防。
  <img src='https://s0.lgstatic.com/i/image2/M01/06/8E/Cip5yGAFRQKANoZGAAGHTWta8TA980.png'/>
  </pre>
</details>


Q：谈谈hooks的设计模式？

<details>
  <summary>点击查看</summary>
  <pre>
  React Hooks 并没有权威的设计模式，很多工作还在建设中，在这里我谈一下自己的一些看法。
  首先用 <b>Hooks 开发需要抛弃生命周期的思考模式，以 effects 的角度重新思考</b>。过去类组件的开发模式中，在 componentDidMount 中放置一个监听事件，还需要考虑在 componentWillUnmount 中取消监听，甚至可能由于部分值变化，还需要在其他生命周期函数中对监听事件做特殊处理。在 Hooks 的设计思路中，可以将这一系列监听与取消监听放置在一个 useEffect 中，useEffect 可以不关心组件的生命周期，只需要关心外部依赖的变化即可，对于开发心智而言是极大的减负。这是 Hooks 的设计根本。
  在这样一个认知基础上，我总结了一些在团队内部开发实践的心得，做成了开发规范进行推广。
  第一点就是 React.useMemo 取代 React.memo，因为 React.memo 并不能控制组件内部共享状态的变化，而 React.useMemo 更适合于 Hooks 的场景。
  第二点就是常量，在类组件中，我们很习惯将常量写在类中，但在组件函数中，这意味着每次渲染都会重新声明常量，这是完全无意义的操作。其次就是组件内的函数每次会被重新创建，如果这个函数需要使用函数组件内部的变量，那么可以用 useCallback 包裹下这个函数。
  第三点就是 useEffect 的第二个参数容易被错误使用。很多同学习惯在第二个参数放置引用类型的变量，通常的情况下，引用类型的变量很容易被篡改，难以判断开发者的真实意图，所以更推荐使用值类型的变量。当然有个小技巧是 JSON 序列化引用类型的变量，也就是通过 JSON.stringify 将引用类型变量转换为字符串来解决。但不推荐这个操作方式，比较消耗性能。
  这是开发实践上的一些操作。那么就设计模式而言，还需要顾及 Hooks 的组合问题。在这里，我的实践经验是采用外观模式，将业务逻辑封装到各自的自定义 Hook 中。比如用户信息等操作，就把获取用户、增加用户、删除用户等操作封装到一个 Hook 中。而组件内部是抽空的，不放任何具体的业务逻辑，它只需要去调用单个自定义 Hook 暴露的接口就行了，这样也非常利于测试关键路径下的业务逻辑。
  <img src='https://s0.lgstatic.com/i/image2/M01/08/32/Cip5yGAKhcCAKZY2AAB3d7s2Ur4216.png'/>
  </pre>
</details>


Q：useEffect 与 useLayoutEffect 区别在哪里？

<details>
  <summary>点击查看</summary>
  <pre>
  它们的共同点很简单，底层的函数签名是完全一致的，都是调用的 mountEffectImpl，在使用上也没什么差异，基本可以直接替换，也都是用于处理副作用。
  那不同点就很大了，useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景，而 LayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。也正因为是同步处理，所以需要避免在 LayoutEffect 做计算量较大的耗时任务从而造成阻塞。
  在未来的趋势上，两个 API 是会长期共存的，暂时没有删减合并的计划，需要开发者根据场景去自行选择。React 团队的建议非常实用，如果实在分不清，先用 useEffect，一般问题不大；如果页面有异常，再直接替换为 useLayoutEffect 即可。
  <img src='https://s0.lgstatic.com/i/image2/M01/08/32/Cip5yGAKhRCAX99HAAD0YKYP40c980.png'/>
  </pre>
</details>


Q：为什么不要在循环、条件语句或者嵌套函数中调用hooks？记住官网的一句话，Not Magic, just Arrays

[React hooks 它不是魔法，是数组](https://github.com/penouc/blog/issues/10)



Q：setState 同步还是异步？比较常问，问的可能也比较深入

<details>
  <summary>点击查看</summary>
  <pre>
  <b>setState 并非真异步，只是看上去像异步。</b>在源码中，通过 isBatchingUpdates 来判断 setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。
  那么什么情况下 isBatchingUpdates 会为 true 呢？在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
  但在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。
  一般认为，做异步设计是为了性能优化、减少渲染次数，React 团队还补充了两点。
	1、保持内部一致性。如果将 state 改为同步更新，那尽管 state 的更新是同步的，但是 props 不是。
	2、启用并发更新，完成异步渲染。
	<img src='https://s0.lgstatic.com/i/image2/M01/01/3E/CgpVE1_YU2KAStLdAAFVKxh7Dyg317.png'/>
	<br/>
	在React中，<b>如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state。</b>所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。
**原因：**在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，<b>有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state</b>。
  </pre>
</details>

[setState是同步的还是异步的？](https://www.jianshu.com/p/ce39a08b585e)



Q：如何避免组件的重新渲染？memo/useMemo、PureComponent？useMemo和useCallback区别？

[memo、useMemo及useCallback解析](https://juejin.cn/post/6844904119358980110)

[你不知道的 useRef](https://zhuanlan.zhihu.com/p/105276393)

[浅谈 useRef](https://www.jianshu.com/p/34b445a15494)



Q：React-Router 的实现原理及工作方式分别是什么？

<details>
  <summary>点击查看</summary>
  <pre>
  React Router 路由的基础实现原理分为两种，如果是切换 Hash 的方式，那么依靠浏览器 Hash 变化即可；如果是切换网址中的 Path，就要用到 HTML5 History API 中的 pushState、replaceState 等。在使用这个方式时，还需要在服务端完成 historyApiFallback 配置。
  在 React Router 内部主要依靠 history 库完成，这是由 React Router 自己封装的库，为了实现跨平台运行的特性，内部提供两套基础 history，一套是直接使用浏览器的 History API，用于支持 react-router-dom；另一套是基于内存实现的版本，这是自己做的一个数组，用于支持 react-router-native。
  React Router 的工作方式可以分为设计模式与关键模块两个部分。
  从设计模式的角度出发，在架构上通过 Monorepo 进行库的管理。Monorepo 具有团队间透明、迭代便利的优点。其次在整体的数据通信上使用了 Context API 完成上下文传递。
  在关键模块上，主要分为三类组件：第一类是 Context 容器，比如 Router 与 MemoryRouter；第二类是消费者组件，用以匹配路由，主要有 Route、Redirect、Switch 等；第三类是与平台关联的功能组件，比如 Link、NavLink、DeepLinking 等。
  <img src='https://s0.lgstatic.com/i/image2/M01/0A/9E/Cip5yGASblWAeI84AAESDjKgi9U468.png'/>
  </pre>
</details>



#### 四、Http && 浏览器

Q：HTTP和TCP的不同，TCP和UDP的区别

<details>
  <summary>点击查看</summary>
  <pre>
  HTTP的责任是去定义数据，在两台计算机相互传递信息时，HTTP规定了每段数据以什么形式表达才是能够被另外一台计算机理解。
而TCP所要规定的是数据应该怎么传输才能稳定且高效的传递与计算机之间。
<br/>
TCP是一个面向连接的、可靠的、基于字节流的传输层协议。
UDP是一个面向无连接的传输层协议。
<br/>
TCP确保传输可靠性的方式有：校验和、序列号、确认应答、超时重传、连接管理、流量控制、拥塞控制。
  </pre>
</details>


Q：TCP三次握手和四次挥手

<details>
  <summary>点击查看</summary>
  <pre>
  三次握手之所以是三次是保证client和server均让对方知道自己的接收和发送能力没问题而保证的最小次数。
  <br/>
  第一次client => server 只能server判断出client具备发送能力 第二次 server => client client就可以判断出server具备发送和接受能力。此时client还需让server知道自己接收能力没问题于是就有了第三次 第三次 client => server 双方均保证了自己的接收和发送能力没有问题
  <br/>
  其中，为了保证后续的握手是为了应答上一个握手，每次握手都会带一个标识 seq，后续的ACK都会对这个seq进行加一来进行确认。
  <br/>
  挥手四次是因为TCP是全双工通信的
  （1）第一次挥手：因此当主动方发送断开连接的请求（即FIN报文）给被动方时，仅仅代表主动方不会再发送数据报文了，但主动方仍可以接收数据报文。    
  （2）第二次挥手：被动方此时有可能还有相应的数据报文需要发送，因此需要先发送ACK报文，告知主动方“我知道你想断开连接的请求了”。这样主动方便不会因为没有收到应答而继续发送断开连接的请求（即FIN报文）。   
  （3）第三次挥手：被动方在处理完数据报文后，便发送给主动方FIN报文；这样可以保证数据通信正常可靠地完成。发送完FIN报文后，被动方进入LAST_ACK阶段（超时等待）。   
  （4）第四次挥手：如果主动方及时发送ACK报文进行连接中断的确认，这时被动方就直接释放连接，进入可用状态。
  </pre>
</details>




Q：WebSocket原理，和http的区别

<details>
  <summary>点击查看</summary>
  <pre>
  websocket是HTML5的一种新协议，允许服务器向客户端传递信息，实现浏览器和客户端双工通信。
  特点：
  （0）服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
  （1）与http协议有良好的兼容性；默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。 
  （2）建立在TCP协议之上，和http协议同属于应用层；服务器端的实现比较容易。
  （3）数据格式比较轻量，性能开销小，通信高效； 
  （4）可以发送文本，也可以发送二进制； 
  （5）没有同源限制，可以与任意服务器通信。
  （6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
  <br/>
  与http区别：
  http协议是短链接，因为请求之后，都会关闭连接，下次请求需要重新打开链接。websocket协议是一种长连接，只需要通过一次请求来初始化连接，然后所有请求和响应都是通过TCP链接进行通信。
  </pre>
</details>



Q：浏览器缓存？http缓存？主要要讲一讲强缓存、协商缓存、preload、prefetch、Service Worker等，304的含义？协商缓存e-tag是怎么生成的？Last-Modified是基于什么生成的？两者对比一下？优先级哪个高？

<details>
  <summary>点击查看</summary>
  <pre>
  通常浏览器有两种缓存策略：强缓存（Expires，cache-control）和协商缓存（Last-modified ，Etag），并且缓存策略都是通过设置 HTTP Header 来实现的。<br/> 
1、浏览器第一次加载资源，服务器返回200，浏览器将资源文件从服务器上请求下载下来，并把response header及该请求的返回时间一并缓存；
2、下一次加载资源时，先比较当前时间和上一次返回200时的时间差，如果没有超过cache-control设置的max-age，则没有过期，命中强缓存，不发请求直接从本地缓存读取该文件（如果浏览器不支持HTTP1.1，则用expires判断是否过期）；如果时间过期，则向服务器发送header带有If-None-Match和If-Modified-Since的请求；
3、服务器收到请求后，优先根据Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200；
4、如果服务器收到的请求没有Etag值，则将If-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200。
  </pre>
  <img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdsoEyzvKKyIXFpISet9SVWxx1Uwz2WCZfdsMkib0VIeCbkCHrvtEkyBg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
</details>

[彻底理解浏览器的缓存机制](https://juejin.cn/post/6844903593275817998)



Q：cookie与localStorage、sessionStorage的区别

<details>
  <summary>点击查看</summary>
  <pre>
  	<img src='https://i.loli.net/2021/05/22/iPLkJItugZjzeFE.png' />
  </pre>
</details>


Q：fetch发送2次请求的原因

<details>
  <summary>点击查看</summary>
  <pre>
fetch会发送两次请求原因是fetch导致的，普通的post请求（如原生ajax）不会，只会发送一次。 fetch发送的第一次请求时option类型的请求，这个请求主要是用来询问服务器是否允许修改header头等一些操作，如果允许会返回204，然后再发送真正的post请求拿回数据。 但注意的是：这第一次请求不是一直触发的：而是在第一次去修改header头时触发的
  </pre>
</details>




Q：什么是跨域？什么情况下会跨域？浏览器根据什么字段判断是否允许跨域？跨域的解决方案有哪些？options请求了解过吗？说说CORS中的简单请求和复杂请求？form表单提交会跨域吗？

<details>
  <summary>点击查看</summary>
  <pre>
  form表单提交不存在跨域。因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。所以浏览器认为这是安全的。
  <br/>
  1、JSONP：在html中使用script标签获取外部资源，实现跨域
  2、CORS（跨域资源共享）：在服务端设置 Access-Control-Allow-Origin 就可以开启 CORS  
  3、document.domain：该⽅式只能⽤于⼆级域名相同的情况下  
  4、postMessage：这种⽅式通常⽤于获取嵌⼊⻚⾯中的第三⽅⻚⾯数据。⼀个⻚⾯发送消息，另⼀个⻚⾯判断来源并接收消息  
  5、Nginx反向代理实现跨域
  6、window.name + iframe
  <img src='https://i.loli.net/2021/05/22/zO73bBlwgr5QeCq.png'/>
  </pre>
</details>
[跨域资源共享 CORS 详解](https://www.ruanyifeng.com/blog/2016/04/cors.html)

[前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)



Q：讲一讲浏览器事件循环Event Loop？node 事件循环描述一下？

<details>
  <summary>点击查看</summary>
  <pre>
  其中一个主要的区别在于浏览器的event loop 和nodejs的event loop 在处理异步事件的顺序是不同的,nodejs中有micro event;其中Promise属于micro event 该异步事件的处理顺序就和浏览器不同.nodejs V11.0以上 这两者之间的顺序就相同了.
  node11以下版本的执行结果(先执行所有的宏任务，再执行微任务)
  node11及浏览器的执行结果(顺序执行宏任务和微任务)
  </pre>
</details>

[详解JavaScript中的Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)

[如何解释Event Loop面试官才满意？](https://zhuanlan.zhihu.com/p/72507900)



Q：http2有哪些新特性？http2还有哪些缺陷？http3的一些了解？

[一文读懂 HTTP/2 及 HTTP/3 特性](https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/)



Q：从输入 URL 到页面加载完成的过程，一般要很详细的描述：包括DNS查询，缓存查询，3次握手，4次挥手，浏览器渲染进程等，面试官会从里面再挑几个问题深入问，比如为什么是3次握手4次挥手？渲染进程中的GUI渲染线程、JS引擎线程、事件触发线程等等？可能会问到进程线程的区别？浏览器为什么是多进程？js为什么是单线程？怎么支持多线程？

[从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://zhuanlan.zhihu.com/p/34453198)



Q：https加密原理？主要是讲对称加密和非对此加密结合使用的一个过程。什么是中间人攻击？和http区别？

<details>
  <summary>点击查看</summary>
  <pre>
  1、首先什么是HTTP协议?
  http协议是超文本传输协议，位于tcp/ip四层模型中的应用层；通过请求/响应的方式在客户端和服务器之间进行通信；但是缺少安全性，http协议信息传输是通过明文的方式传输，不做任何加密，相当于在网络上裸奔；容易被中间人恶意篡改，这种行为叫做中间人攻击；
  2、加密通信：
  为了安全性，双方可以使用对称加密的方式key进行信息交流，但是这种方式对称加密秘钥也会被拦截，也不够安全，进而还是存在被中间人攻击风险；于是人们又想出来另外一种方式，使用非对称加密的方式；使用公钥/私钥加解密；通信方A发起通信并携带自己的公钥，接收方B通过公钥来加密对称秘钥；然后发送给发起方A；A通过私钥解密；双发接下来通过对称秘钥来进行加密通信；但是这种方式还是会存在一种安全性；中间人虽然不知道发起方A的私钥，但是可以做到偷天换日，将拦截发起方的公钥key1;并将自己生成的一对公/私钥的公钥发送给B；接收方B并不知道公钥已经被偷偷换过；按照之前的流程，B通过公钥加密自己生成的对称加密秘钥key2;发送给A；这次通信再次被中间人拦截，尽管后面的通信，两者还是用key2通信，但是中间人已经掌握了Key2;可以进行轻松的加解密；还是存在被中间人攻击风险；
  3、解决困境：权威的证书颁发机构CA来解决；
  (1)、制作证书：作为服务端的A，首先把自己的公钥key1发给证书颁发机构，向证书颁发机构进行申请证书；证书颁发机构有一套自己的公私钥，CA通过自己的私钥来加密key1,并且通过服务端网址等信息生成一个证书签名，证书签名同样使用机构的私钥进行加密；制作完成后，机构将证书发给A；
  (2)、校验证书真伪：当B向服务端A发起请求通信的时候，A不再直接返回自己的公钥，而是返回一个证书；
  说明：各大浏览器和操作系统已经维护了所有的权威证书机构的名称和公钥。B只需要知道是哪个权威机构发的证书，使用对应的机构公钥，就可以解密出证书签名；接下来，B使用同样的规则，生成自己的证书签名，如果两个签名是一致的，说明证书是有效的；签名验证成功后，B就可以再次利用机构的公钥，解密出A的公钥key1;接下来的操作，就是和之前一样的流程了；
  4、中间人是否会拦截发送假证书到B呢？
  因为证书的签名是由服务器端网址等信息生成的，并且通过第三方机构的私钥加密中间人无法篡改；所以最关键的问题是证书签名的真伪；
  5、https主要的思想是在http基础上增加了ssl安全层，即以上认证过程；
  <br/>
  http和https区别：
  1、Https协议需要ca证书，费用较高。
  2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
  3、使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
  4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
	<br/>
	中间人攻击过程如下：
  1、服务器向客户端发送公钥。
  2、攻击者截获公钥，保留在自己手上。
  3、然后攻击者自己生成一个【伪造的】公钥，发给客户端。
  4、客户端收到伪造的公钥后，生成加密hash值发给服务器。
  5、攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
  6、同时生成假的加密hash值，发给服务器。
  7、服务器用私钥解密获得假秘钥。
  8、服务器用加秘钥加密传输信息
  </pre>
</details>

[彻底搞懂HTTPS的加密原理](https://zhuanlan.zhihu.com/p/43789231)



Q：浅说 XSS 和 CSRF

[浅说 XSS 和 CSRF](https://github.com/dwqs/blog/issues/68#)



Q：正向代理和反向代理

<details>
  <summary>点击查看</summary>
  <pre>
  正向代理：是一个位于客户端和原始服务器(origin server)之间的服务器， 为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)， 然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。
	反向代理：反向代理（Reverse Proxy）实际运行方式是指以代理服务器来接受internet上的连接请求， 然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端， 此时代理服务器对外就表现为一个服务器。
	精辟，正向代理隐藏真实客户端，反向代理隐藏真实服务端，一下就懂了，很有帮助
	<img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdeXB6HlX2OIptR36elKgkGaY7kQP5edtMicx8fryv1ibdmPKyXRicbZ9JQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
  </pre>
</details>



Q：说一下进程和线程

<details>
	<summary>点击查看</summary>
  <pre>
  官方说法：
  进程：进程是CPU资源分配的最小单位。
  线程：线程是CPU资源调度的最小单位。
  个人理解：
  进程：在操作系统中，会根据每一个独立运行的程序分配资源，这些程序之间互不干扰，都只负责运行自己的代码。
  线程：在操作系统进行频繁创建销毁进程时，需要给进程频繁分配和收回资源，而时间和资源也便在此过程中消耗。但是随着计算机硬件的升级，内存大的多核心CPU的出现，能够对计算机内存资源根据需求进行合理调度，线程也逐渐取代了进程。
  </pre>
  <img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdhmengREhDlJk1VHprOsIYmdzSRQe8ImAc3vRE8p5bz9GsAoZS1tvLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
    <img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdnW0wfQCgJ9zIqefQJmZSAibIrIQSqUB2WO4HtacvcIib99PTZu1GVxCg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
</details>



Q：如何实现单点登录

<details>
  <summary>点击查看</summary>
  <pre>
  单点登录：单点登录全称Single Sign On（以下简称SSO），是指多系统应用群中登录一个系统，便可以在其他所有系统中得到授权而无在此登录。简单来说，单点登录就是在多个系统中，用户只需一次登录，各个系统即可感知该用户已经登录。
  <img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdALP87WTrOia8yRyMnvwgHVXE6VvlecV4jNwMWWSFTtelk3Ibm8G4Ttw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
  1、用户访问系统A的受保护资源时，发现用户在系统A上并未登录，此时会携带系统A的地址信息，将登录请求跳转到SSO认证中心；
  2、SSO认证中心发现用户未登录，将指引用户到系统A的登录页面；
  3、用户此时应该输入用户名、密码进行登录提交申请；
  4、SSO认证中心对用户信息的用户名和密码进行校验，创建用户与SSO认证中心之间的全局会话，同时创建授权令牌Token；
  5、SSO认证中心携带Token令牌跳转到最初的请求地址（系统A的地址）；
  6、当用于在此发起请求时，系统A拿到令牌Token去SSO认证中心校验令牌是否有效；
  7、SSO认证中心拿到Token后进行校验，如有效则返回，并注册系统A的地址；
  8、系统A使用该令牌Token创建与用户的会话，成为局部会话，返回受保护资源；
  9、当用户访问系统B的受保护资源时，发现用户未登录，则携带系统B的地址信息，将登录强求跳转到SSO认证中心；
  10、SSO认证中心发现用户已经登录，发现用于已经登录，则携带令牌Token跳转到系统B的地址；
  11、当向系统B在此发起请求时，系统B拿到Token令牌，去SSO认证中心校验令牌是否有效；
  12、SSO认证中心校验Token有效，则注册系统B的地址信息；
  13、系统B使用该Token信息与用户的局部会话，且向浏览器返回受保护资源。
  14、在用户登录成功之后，会与SSO认证中心及各个子系统建立会话，用户与SSO认证中心建立的会话成为全局会话，用户与各个子系统建立的会话叫做局部会话。局部会话建立后，用户访问子系统受保护资源时将不再通过SSO认证中心。
  </pre>
</details>



Q：token如何使用

<details>
  <summary>点击查看</summary>
  <pre>
  1.客户端使用用户名跟密码请求登录
  2.服务端收到请求，去验证用户名与密码。验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
  3.客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 LocalStorage 里。客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
  4.服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据
  </pre>
</details>


Q：requestAnimationFrame 与 requestIdleCallback 含义及区别

<details>
  <summary>点击查看</summary>
  <pre>
  	<img src='https://user-images.githubusercontent.com/1249423/42104778-74e0cea2-7c00-11e8-8877-0e3713f4a431.png'/>
  </pre>
</details>

[requestAnimationFrame 与 requestIdleCallback 含义及区别](https://juejin.cn/post/6844904018200756238)



Q：http 状态码301、302、303、307、308 的区别

<details>
  <summary>点击查看</summary>
  <pre>
  永久重定向有两个： 301和308。
  两者都默认缓存，
  但是308不允许将请求方法从POST修改到GET, 301允许。
  <br/>
  临时重定向三个：302，303，307。
  302一开始的标准是不允许修改POST方法，但是浏览器的实现不遵循标准，标准就向现实妥协而做了修改。
  303强制浏览器可以将请求方法从POST修改到GET
  307不允许浏览器修改请求方法。
  </pre>
</details>
[http 状态码301、302、303、307、308 的区别](https://juejin.cn/post/6844904129760870414)



#### 五、其他

Q：node常用的一些模块，fs/path/http等等

<details>
  <summary>点击查看</summary>
  <pre>
  url，用于处理与解析 URL；
  querystring，用于解析和格式化 URL 查询字符串；
  http，HTTP服务；
  path，路径，用于处理文件路径和目录路径；
  events，事件触发器，用于事件的派发与监听；
  fs，文件系统，用于文件的读写操作；
  ctypto，用于数据的加密和解密；
  stream，流
  zlib，压缩
  </pre>
</details>
[nodeJs常用的内置模块](https://blog.csdn.net/Charissa2017/article/details/104951488)



Q：EventEmitter 概念，使用场景，错误捕获

<details>
  <summary>点击查看</summary>
  <pre>
  	观察者模式：观察者（Observer）直接订阅（Subscribe）主题（Subject），而当主题被激活的时候，会触发（Fire Event）观察者里的事件。
	发布订阅模式：订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Topic），当发布者（Publisher）发布该事件（Publish topic）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。
	<img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibd3JCrou7rqZ98DXWTk19ltNicjG6iakLezgfmU5kOO65DORpQ3kHLTGkA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1' />
  <img src='https://gitee.com/heptaluan/backups/raw/master/cdn/node/17.png'/>
  1、在观察者模式中，观察者知道 Subject 的存在，Subject 一直保持对观察者进行记录，然而，在发布/订阅模式中，发布者和订阅者不知道对方的存在，它们只有通过信息中介进行通信
  2、在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反
  3、观察者模式大多数时候是同步的，比如当事件触发 Subject 就会去调用观察者的方法，而发布/订阅模式大多数时候是异步的（使用消息队列）
  </pre>
</details>

[Events模块](https://javascript.ruanyifeng.com/nodejs/events.html)



Q：Stream 概念？使用场景？常见的Stream？

<details>
  <summary>点击查看</summary>
  <pre>
  流的英文stream，流（Stream）是一个处理流式数据的抽象接口，Node.js中很多对象都实现了流，流可以是可读的、可写的、或是可读写的。 所有的流都是 EventEmitter 的实例。
  <img src='https://pic4.zhimg.com/80/v2-978b91d75d0d9d5e00fb83692d37ab5f_1440w.jpg'/>
  stream的应用场景主要就是<b>处理IO操作</b>，而http请求和文件操作都属于IO操作。这里再提一下stream的本质——由于一次性IO操作过大，硬件开销太多，影响软件运行效率，因此将IO分批分段进行操作，让数据像水管一样流动起来，直到流动完成，也就是操作完成。
  1、Readable - 可读的流（fs.createReadStream()）
  2、Writable - 可写的流（fs.createWriteStream()）
  3、Duplex - 可读写的流（net.Socket）
  4、Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate())
  </pre>
</details>

[前端有关node.js的面试题含答案](https://my.oschina.net/u/4696788/blog/4676580)



Q：webpack设计理念

<details>
  <summary>点击查看</summary>
  <pre>
  它是一个模块打包器，也可以引用官网的一幅图解释，我们可以看到webpack，可以分析各个模块的依赖关系，最终打包成我们常见的静态文件（.js 、 .css 、 .jpg 、.png）。webpack是前端用来构建文件的管理工具，可以将各种插件创建的文件、各种版本资源的文件，打包成各种版本浏览器兼容的代码、资源文件。webpack是依赖于npm创建的插件工具。
  <img src='https://mmbiz.qpic.cn/mmbiz_png/83d3vL8fIicaLbdP0icWia9aMpmEQpgfNibdkfCfvlnwMjtKkgH1ke4zkMoSzOhYOGyeQNXOibLe06kCMSCLzcuZGMA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'/>
  具体流程就是：
  1、首先各种模块文件导入到webpack打包配置文件中
  2、将模块文件解析成chunk代码块，对各个模块间的关系进行静态分析
  3、根据模块的依赖关系进行各种文件打包成各种版本浏览器可识别的文件
  4、配置浏览器入口文件bundle
  </pre>
</details>



Q：webpack 构建流程？打包原理？

[webpack打包原理 ? 看完这篇你就懂了 !](https://segmentfault.com/a/1190000021494964)

[了不起的 Webpack 构建流程学习指南](https://segmentfault.com/a/1190000022991056)



Q：webpack 项目中做的一些优化

[webpack优化解决项目体积大、打包时间长、刷新时间长问题！](https://cloud.tencent.com/developer/article/1643104)



Q：loader和plugin的区别？有没有写过？常用哪些loader和plugin

<details>
	<summary>点击查看</summary>  
  <pre>
   	加载器loader: webpack默认处理js和json文件，loader配置webpack去处理其他类型的文件，将其转为有效模块给应用程序使用，并添加到依赖图中，运行在打包之前。
	插件plugin: loader用于转换某些类型的模块，而插件用于执行范围更广的任务。比如：打包优化、资源管理、注入环境变量等，它是在整个编译周期都起作用。
  </pre>
</details>

[webpack 中 loader 和 plugin 的区别是什么](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)

[Loader和Plugin的区别](https://segmentfault.com/a/1190000037712654)



Q：webpack 热更新 原理

[介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/118)

[轻松理解webpack热更新原理](https://juejin.cn/post/6844904008432222215)



Q：tree-shaking？对于 CommonJS，tree shaking怎么办？

[浅谈 ES 模块和 Webpack Tree-shaking](https://zhuanlan.zhihu.com/p/43844419)



Q：webpack loader的执行顺序？从左到右？从上到下？

[loader 的执行顺序为什么是后写的先执行](https://github.com/LuckyWinty/fe-weekly-questions/issues/38)



Q：长列表渲染怎么优化？

[在React项目中，如何优雅的优化长列表](https://juejin.cn/post/6844903729460674567)



Q：Typescript 中的 interface 和 type 到底有什么区别

[typescript 中的 interface 和 type 到底有什么区别](https://github.com/SunshowerC/blog/issues/7)



