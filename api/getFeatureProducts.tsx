"use client";
import { useEffect, useState } from 'react';

export function useGetFeatureProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeature][$eq]=true&populate=*`;
    const [result, setResult] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data);
                setLoading(false); 
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [url]);

    return { result, loading, error }; 
}