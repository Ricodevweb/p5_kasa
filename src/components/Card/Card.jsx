// Importation de React, nécessaire pour créer un composant React
import React from 'react';

// Importation du fichier CSS pour appliquer le style
import './Card.css';

// Importation de 'Link' depuis 'react-router-dom' pour créer des liens de navigation
import { Link } from 'react-router-dom';

// Déclaration du composant Card sous forme de fonction
function Card(props) {
    return (
        // Article qui représente une carte sur la page d'accueil
        <article className='cards-in-home-page'>
            {/* Lien pour la navigation, redirige vers la page de détail du logement */}
            <Link to={`/logement/${props.id}`}>
                {/* Div utilisée pour l'overlay (superposition transparente) sur l'image */}
                <div className='overlay'></div>

                {/* Image du logement avec source dynamique via 'props.cover' */}
                <img src={props.cover} alt={props.title} title={props.title} />

                {/* Titre du logement affiché dans chaque carte */}
                <h3>{props.title}</h3>
            </Link>
        </article>
    );
};

// Exportation du composant Card pour qu'il puisse être utilisé ailleurs dans l'application
export default Card;
