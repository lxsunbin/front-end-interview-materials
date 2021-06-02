function* example() {
    yield 1;
    yield 2;
    yield 3;
}
var iter = example();

iter.next();//{value:1，done:false}
iter.next();//{value:2，done:false}
iter.next();//{value:3，done:false}
iter.next();//{value:undefined，done:true}