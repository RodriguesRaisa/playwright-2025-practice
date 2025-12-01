import {test,expect} from '@playwright/test';

//fully parallel in config.ts -> true
//test.describe.serial --> if you want to follow specific sequence for your tests in testsuite

test.describe.serial('my test suite',()=>{

    test('Home page test',async()=>{
    console.log('home page test');
});

test('Search product test',async()=>{
    console.log('Search product test');
});

test('Cart product test',async()=>{
    console.log('Cart product test');
});

test('Order product test',async()=>{
    console.log('Order product test');
});

test('Checkout product test',async()=>{
    console.log('Checkout product test');
});

})

//Below tests will run in parallel mode

test('Bye test',async()=>{
    console.log('Bye');
});

test('Hello test',async()=>{
    console.log('Hello');
});


