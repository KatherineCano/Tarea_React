// src/pages/Main.js
import React, { useEffect, useState } from "react";
import ImageDisplay from "../../components/ImageDisplay";
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    const [cleanDataDetail, setCleanDataDetail] = useState("");

    useEffect(() => {
        const loadItems = async () => {
            await LoaderAllItems(setCleanDataDetail, url);
        };
        loadItems();
    }, []);

    return (
        <div>
            <h1>Interfaz SBS</h1>
            <ImageDisplay />
        </div>
    );
};

export default Main;
