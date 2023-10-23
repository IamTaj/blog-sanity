import client from './sanity'

export async function getAllBlogs() {
    const result = await client.fetch(`*[_type] == "blog"`);
    return(result);
}