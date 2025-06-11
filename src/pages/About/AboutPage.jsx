import React from 'react';
import { EvalNav } from '../../navbar/navbar';
import './styles/about.css';
import '../../styles/mainBackground.css';

export const AboutPage = () => {
  return (
    <div className="app-container">
      <EvalNav />
      <div className="main-content">
        <div className="main-container">
      <h1>Sobre Nosotros</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Nuestra Historia</h2>
          <p>Desde 2015, Anita Fashion ha sido la elección de las mujeres modernas que buscan estilo y calidad en su vestimenta. Fundada por Ana García, nuestra marca se ha consolidado como referente en moda femenina de alta calidad.</p>
        </div>

        <div className="about-section">
          <h2>Nuestra Misión</h2>
          <p>Nos dedicamos a crear prendas que no solo sean hermosas, sino que también reflejen la personalidad única de cada mujer. Creemos que la moda debe ser accesible sin sacrificar la calidad.</p>
        </div>

        <div className="about-section">
          <h2>Nuestros Valores</h2>
          <ul>
            <li>Calidad superior en todos nuestros productos</li>
            <li>Atención al detalle en cada prenda</li>
            <li>Sostenibilidad en nuestros procesos</li>
            <li>Excelencia en el servicio al cliente</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Nuestro Equipo</h2>
          <p>Nuestro equipo de diseñadores y especialistas en moda trabaja constantemente para traerte las últimas tendencias adaptadas a tu estilo de vida. Cada prenda es cuidadosamente seleccionada y diseñada pensando en la mujer moderna y sofisticada.</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
