import { useState, useEffect } from "react";
import carrusel1 from '../assets/quienes_somos.png';
import carrusel2 from '../assets/que_queremos.png';
import carrusel3 from '../assets/cuando_queremos.png';
import carrusel4 from '../assets/final.png';

function Carrusel() {
    const [index, setIndex] = useState(0);

    const images = [
        carrusel1,
        carrusel2,
        carrusel3,
        carrusel4
    ];

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
    }, []);


    return (
        <div className="carrusel">
            {/*
            <button className="flecha izquierda"
            onClick={handlePrev}>❮</button>
            */}
            <img src={images[index]} alt={`Imagen ${index + 1}`} />
            {/*
            <button className="flecha derecha"
            onClick={handleNext}>❯</button>
            */}
        </div>
    );
}

export default Carrusel;