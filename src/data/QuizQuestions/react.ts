// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 11,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: 'Qu’est-ce que JSX dans React ?',
      choices: [
        "Une extension de syntaxe pour JavaScript qui permet d'écrire du code de type HTML en JavaScript",
        "Une bibliothèque de gestion d'état pour les applications React",
        'Un outil de build pour regrouper les applications React',
        'Un framework de test pour les composants React',
      ],
      type: 'MCQs',
      correctAnswers: [
        "Une extension de syntaxe pour JavaScript qui permet d'écrire du code de type HTML en JavaScript",
      ],
      score: 10,
    },
    {
      question: 'Les composants React doivent toujours renvoyer un seul élément JSX.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quel est le but des composants React ?',
      choices: [
        'Pour gérer les requêtes HTTP et récupérer les données des API',
        "Gérer l'état d'une application React",
        "Définir la structure et l'apparence de l'interface utilisateur",
        'Pour gérer les interactions et les événements des utilisateurs',
      ],
      type: 'MCQs',
      correctAnswers: ["Définir la structure et l'apparence de l'interface utilisateur"],
      score: 10,
    },
    {
      question:
        "Parmi les méthodes suivantes, lesquelles sont des méthodes de cycle de vie React valides ? (Sélectionnez tout ce qui s'applique)",
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 10,
    },
    {
      question: 'Quel sera le résultat du code React suivant ?',
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 10,
    },
    {
      question:
        'Dans React, les accessoires sont utilisés pour transmettre les données des composants parents aux composants enfants.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quel est le résultat de l’extrait de code suivant ?',
      image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 10,
    },
    {
      question:
        "Parmi les méthodes suivantes, lesquelles sont des moyens valides pour restituer du contenu de manière conditionnelle dans React ? (Sélectionnez tout ce qui s'applique)",
      choices: [
       "En utilisant l'instruction if-else",
        "Utilisation de l'opérateur ternaire",
        "En utilisant l'instruction switch",
        "Utilisation de l'opérateur &&",
      ],
      type: 'MAQs',
      correctAnswers: [
        "En utilisant l'instruction if-else",
        "Utilisation de l'opérateur ternaire",
        "Utilisation de l'opérateur &&",
      ],
      score: 10,
    },
    {
      question: 'Dans React, à quoi servent les clés dans les listes ?',
      choices: [
        'Pour fournir un identifiant unique pour chaque élément de la liste',
        "Pour contrôler l'ordre des éléments dans la liste",
        'Pour activer le tri et le filtrage de la liste',
        'Pour gérer les interactions des utilisateurs au sein de la liste',
      ],
      type: 'MCQs',
      correctAnswers: ['Pour fournir un identifiant unique pour chaque élément de la liste'],
      score: 10,
    },
    {
      question: 'Quel sera le résultat du code React suivant ?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
       'Le message "Bouton cliqué" sera enregistré dans la console lorsque le bouton sera cliqué',
        "Le bouton ne répondra pas à l'événement clic",
        "Une erreur se produira en raison d'une utilisation incorrecte de onClick",
        "Le bouton s'affichera mais rien ne se passera lorsque vous cliquerez dessus",
      ],
      type: 'MCQs',
      correctAnswers: [
        'Le message « Bouton cliqué » sera enregistré sur la console lorsque le bouton est cliqué',
      ],
      score: 10,
    },
    {
      question: 'React utilise un DOM virtuel pour optimiser les performances de rendu.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
  ],
}
