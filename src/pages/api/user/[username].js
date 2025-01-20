export const prerender = false
//import type { APIContext } from 'astro';

export async function GET({ params, request, props, cookies }) {
    const username = params.username;
    const { slug } = params;
    console.log("slug", slug)
    let url = new URL(request.url).pathname
    console.log("url", url)
    console.log("req", request.url)
    cookies.set('counter', 666)
    let counter = cookies.get('counter')
    console.log("cookies", cookies, "counter", counter)
    //const product = await getProduct(id);
    const product = {
        id: 1,
        username: username,
        email: "123@qq.com",
    };

    if (!product) {
        let res = Response(null, {
            status: 404,
            statusText: 'Not found'
        });
        return res;
    }

    let res = new Response(
        JSON.stringify(product), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
    res.headers.set('Cache-Control', 'public, max-age=3700');
    return res;
}