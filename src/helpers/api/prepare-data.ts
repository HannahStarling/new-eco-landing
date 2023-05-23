export const prepareData = (res: Response) => {
  return res.ok
    ? res.json()
    : Promise.reject({
        name: `Произошла ошибка: ${
          res.status === 400
            ? "не указан идентификатор записи"
            : `сервер не отвечает на запросы, попробуйте позднее. Код ошибки: ${res.status}`
        }.`,
      });
};
