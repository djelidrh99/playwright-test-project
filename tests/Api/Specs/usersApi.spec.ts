import { test, expect } from '@playwright/test';
import userEndPointWithQueryParams from '../endPoint/userEndPointWithQueryParams';


const requestBody = {
    title: "qui est esse",
            body: "est rerum tempore vitae",    
            userId: 102
}
test.describe("user API ",  ()=> {

    test("get all users", async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/posts");
        const jsonResponse = await response.json();
        await expect(response.status()).toBe(200);
        await expect(jsonResponse.length).toBe(100);



    })

    test("get post with query params", async ({ request }) => {
        const response = await userEndPointWithQueryParams.getPostWithQueryParams({ request });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    



        
    })


    test.only("post request ", async ({ request }) => {
        const response = await request.post("https://jsonplaceholder.typicode.com/posts", { data: {
            title: "qui est esse",
            body: "est rerum tempore vitae",    
            userId: 102
        
        } });

        const jsonResponse = await response.json();
        const headers = response.headers();
        console.log(headers);
    })





})  