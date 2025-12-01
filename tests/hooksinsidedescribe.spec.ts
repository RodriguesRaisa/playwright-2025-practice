import {test,expect} from '@playwright/test';

test.describe('login feature',()=>{
    test.beforeAll(async()=>{
        console.log('setup the system');
    });

    test.beforeEach(async()=>{
        console.log('open the url');
    })

     test.afterEach(async()=>{
        console.log('close the page');
    })

     test.afterAll(async()=>{
        console.log('teardown the system');
    })
})