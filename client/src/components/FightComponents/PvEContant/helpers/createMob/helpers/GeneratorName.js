import randomNumberArray from "./randomNumberArray";

function GeneratorName(typeMob) {
  const generateFirstName = [
    "Веселый",
    "Убогий",
    "Вонючий",
    "Занудный",
    "Голодный",
    "Хохочущий",
    "Плачущий",
    "Страшный",
    "Злой",
    "Уставший"
  ];
  const generatorLastName = [
    "Нудист",
    "Программист",
    "Математик",
    "Шизофреник",
    "Оптимист",
    "Реалист",
    "пацифист",
    "Рассист",
    "Нацист"
  ];

  const res =
    generateFirstName[randomNumberArray(generateFirstName)] +
    " " +
    typeMob +
    " " +
    generatorLastName[randomNumberArray(generatorLastName)];

  return res;
}

export default GeneratorName;
