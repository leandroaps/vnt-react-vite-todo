import { faker } from "@faker-js/faker/locale/en";

export const createRandomWords = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};
