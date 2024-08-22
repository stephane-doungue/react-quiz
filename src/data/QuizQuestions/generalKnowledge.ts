// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 2,
  totalScore: 60,
  totalTime: 60,
  questions: [
    {
      question: 'Quel est le nom de ce reptile ?',
      image: Reptile,
      choices: ['Serpent' , 'Tortue', 'Crocodile', 'Lézard'],
      type: 'MCQs',
      correctAnswers: ['Tortue'],
      score: 10,
    },
    {
      question: 'Dans quel pays se trouve ce lieu historique ?',
      image: Place,
      choices: ['Chine', 'Grece', 'Inde', 'Egypte'],
      type: 'MCQs',
      correctAnswers: ['Chine'],
      score: 10,
    },
  ],
}
