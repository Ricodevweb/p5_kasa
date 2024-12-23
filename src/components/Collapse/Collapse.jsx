import React, { useState } from 'react';
import './Collapse.css';
import arrowopen from '../../assets/arrowopen.png';

// Déclaration du composant Collapse sous forme de fonction
function Collapse(props) {
    // Définition de l'état local `isOpen` en utilisant le hook useState
    const [isOpen, setIsOpen] = useState(props.open !== undefined ? props.open : false);

    // Création d'une fonction de gestion d'événements qui met à jour la valeur de isOpen lorsque l'utilisateur clique sur un des collapses
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-drop-down-list ${isOpen ? 'open' : ''}`}>
            <h3 onClick={handleClick}>
                {props.title}
                <img className={isOpen ? 'arrow arrow-to-close' : 'arrow arrow-to-open'}
                     src={arrowopen}
                     alt="afficher le contenu"
                />
            </h3>
            <div className={`content-in-collapse ${isOpen ? 'open' : ''}`}>
                {props.content}
            </div>
        </div>
    );
};

export default Collapse;
