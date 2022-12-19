import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  ['ok', 1, { status: 'ok', level: 1 }, 'Ваш текущий уровень: 1'],
  ['error', 2, { status: 'error' }, 'Информация об уровне временно недоступна'],
])(
  ('should call getLevel with status %s'),
  (_, userId, response, expected) => {
    fetchData.mockReturnValue(response);
    expect(getLevel(userId)).toBe(expected);
  },
);

/**
  * Не совсем понятна тема с моками
  * Что по итогу мы тестируем?
  * Если способность отправлять запрос функцией getLevel,
  * то тогда делаем как в примере лекции:
  *  getLevel(userId);
  *  expect(fetchData).toBeCalledWith(expected)
  * в expected передаем правильный URL
  * -
  * Либо проверяем что возвращает функция getLevel,
  * как в представленом решении?
*/
