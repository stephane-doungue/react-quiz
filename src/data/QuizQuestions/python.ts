// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const python: Topic = {
  topic: 'Python',
  level: 'Advanced',
  totalQuestions: 11,
  totalScore: 125,
  totalTime: 360,
  questions: [
    {
      question:
        "Parmi les méthodes suivantes, lesquelles sont valables pour gérer les exceptions en Python ? (Sélectionnez tout ce qui s'applique)",
      choices: [
        'Using try-except blocks',
        'Using the finally block',
        'Using the raise statement',
        'Using assert statements',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using try-except blocks',
        'Using the finally block',
        'Using the raise statement',
      ],
      score: 10,
    },
    {
      question: 'En Python, les chaînes sont des objets mutables.',
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Faux'],
      score: 5,
    },
    {
      question:
        'Quelle est la différence entre une copie superficielle et une copie profonde en Python ?',
      choices: [
        "Une copie superficielle crée un nouvel objet et copie les références aux éléments d'origine, tandis qu'une copie profonde crée un nouvel objet et copie récursivement les éléments",
        "Une copie superficielle crée un nouvel objet et copie les éléments, tandis qu'une copie profonde crée un nouvel objet et référence les éléments d'origine",
        "Une copie superficielle modifie l'objet d'origine, tandis qu'une copie profonde crée un nouvel objet sans modifier l'original",
        "Il n'y a pas de différence entre une copie superficielle et une copie profonde en Python",
      ],
      type: 'MCQs',
      correctAnswers: [
        "Une copie superficielle crée un nouvel objet et copie les références aux éléments d'origine, tandis qu'une copie profonde crée un nouvel objet et copie récursivement les éléments", ],
      score: 10,
    },
    {
      question:
        "Python prend en charge l'héritage multiple, permettant à une classe d'hériter de plusieurs classes parents.",
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question: 'Quel est le résultat du code Python suivant ?',
      code: 'print(list(filter(lambda x: x % 2 == 0, range(10))))',
      choices: [
        '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]',
        '[0, 2, 4, 6, 8]',
        '[1, 3, 5, 7, 9]',
        '[0, 1, 2, 3, 4, 9]',
      ],
      type: 'MCQs',
      correctAnswers: ['[0, 2, 4, 6, 8]'],
      score: 10,
    },
    {
      question: 'Quel est le but de la méthode « __init__ » dans une classe Python ?',
      choices: [
        'Pour initialiser les attributs de la classe',
        'Définir le constructeur de la classe',
        'Pour créer une nouvelle instance de la classe',
        'Définir le destructeur de la classe',
      ],
      type: 'MCQs',
      correctAnswers: ['Définir le constructeur de la classe'],
      score: 10,
    },
    {
      question: 'Lequel des éléments suivants n’est PAS un décorateur intégré à Python ?',
      choices: ['@staticmethod', '@classmethod', '@property', '@inheritance'],
      type: 'MCQs',
      correctAnswers: ['@inheritance'],
      score: 10,
    },
    {
      question:
        "L'instruction 'pass' en Python est utilisée comme espace réservé et ne fait rien lorsqu'elle est exécutée.",
      choices: ['Vrai', 'Faux'],
      type: 'boolean',
      correctAnswers: ['Vrai'],
      score: 5,
    },
    {
      question:
        "Parmi les énoncés suivants, lesquels sont vrais à propos des générateurs Python ? (Sélectionnez tout ce qui s'applique)",
      choices: [
        'Les générateurs sont des fonctions qui peuvent être mises en pause et reprises',
        'Les générateurs ne peuvent être utilisés que pour générer des séquences numériques',
        'Les générateurs économisent de la mémoire en générant des valeurs à la volée',
        'Les générateurs utilisent le mot-clé "yield" pour renvoyer des valeurs',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Les générateurs sont des fonctions qui peuvent être mises en pause et reprises',
        'Les générateurs économisent de la mémoire en générant des valeurs à la volée',
        'Les générateurs utilisent le mot-clé "yield" pour renvoyer des valeurs',
      ],
      score: 10,
    },
    {
      question: 'Quel est le résultat du code Python suivant ?',
      code: 'print(len({True: 1, False: 0, "True": 2}))',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      correctAnswers: ['2'],
      score: 10,
    },
    {
      question: 'Quel est le but de l’instruction « with » en Python ?',
      choices: [
       'Définir un gestionnaire de contexte',
        'Pour gérer les exceptions',
        "Pour contrôler le débit d'une boucle",
        'Pour créer un nouveau fichier',
      ],
      type: 'MCQs',
      correctAnswers: ['Définir un gestionnaire de contexte'],
      score: 10,
    },
   
  ],
}
