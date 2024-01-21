export const getAllProducts = () => {
    return fetch('https://dummyjson.com/products')
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error(response.status);
        })
}