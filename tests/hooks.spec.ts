import {test,expect,Page,Locator} from '@playwright/test'

  test.beforeAll(async () =>{
    console.log("This is before all method--Check server is up and running");
  });

  test.beforeEach(async () =>{
    console.log("This is before each method--user is logged in");
  });

  test('Home page test',async()=>{
    console.log('Home page test')
  })

  test('Search page test',async()=>{
    console.log('Search page test')
  })

  test('Logout page test',async()=>{
    console.log('Logout page test')
  })

   test.afterEach(async () =>{
    console.log("This is after each method--user is logged out");
  });
  
  test.afterAll(async () =>{
    console.log("This is after all method--Close the browser");
  });

 