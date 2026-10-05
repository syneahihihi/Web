import axiosClient from './AxiosClient.js';

const getProducts = async ({ signal } = {}) => {
    const res = await axiosClient.get('product', { signal });
    const products = res.data?.contents;

    if (!Array.isArray(products)) {
        throw new Error('The products API returned an unexpected response.');
    }

    return products;
};

export { getProducts };