// src/components/ImageDisplay.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageDisplay = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get("https://dog.ceo/api/breeds/image/random");
                setImageUrl(response.data.message);
            } catch (error) {
                console.error("Error al obtener la imagen", error);
            }
        };
        fetchImage();
    }, []);

    return (
        <div>
            {imageUrl ? <img src={imageUrl} alt="Perro aleatorio" style={{ width: "300px" }} /> : <p>Cargando imagen...</p>}
        </div>
    );
};

export default ImageDisplay;
