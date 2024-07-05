import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const res = await fetch("https://api.github.com/users/Dhruvjain187");
    //         const resJson = await res.json();
    //         setData(resJson);
    //     }
    //     fetchApi();
    // }, []);

    const data = useLoaderData();
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers:{data.followers}
            <img src={data.avatar_url} width={250} alt="Git picture" />
        </div>
    );
}

export const fetchApi = async () => {
    const res = await fetch("https://api.github.com/users/Dhruvjain187");
    const resJson = await res.json();
    return resJson;
}