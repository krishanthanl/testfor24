// React Modules
import { useEffect, useState } from "react";

//Project Modules
import productClient from "../services/productClient";
import {FetchResponse} from "../utils/interfaces";

const useProductData = <T>() => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        productClient.get<FetchResponse<T>>('',{ signal: controller.signal })
        .then((res) => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
        return () => controller.abort();
    },[]);
    return {data, error, isLoading} ;
};

export default useProductData;