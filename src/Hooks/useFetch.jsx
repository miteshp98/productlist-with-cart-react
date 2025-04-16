import { useState, useEffect } from "react";

export function useFetch(url) {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(url);
                const data = await response.json();

                setProductList(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, []);

    return { isLoading, productList };
}
