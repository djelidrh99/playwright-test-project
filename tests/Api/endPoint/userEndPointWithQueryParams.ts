const baseURL = "https://jsonplaceholder.typicode.com";



async function getPostWithQueryParams({ request }) {
    const response = await request.get(`${baseURL}/posts`, { params: { id: 2 } });
    return response;
}   

export default {getPostWithQueryParams}