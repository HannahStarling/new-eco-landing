# Лендинг компании INTELOGIS на Next.js 

## Стек технологий

- Next.js
- Typescript/JavaScript (ES6)
- SASS

Для работы с формой связи необходим env файл с доступом к бекенду

## Внутренние UiElements

## UiButton

Пример использования

```javascript
<UiButton mode="dark" fillType="outlined">
  Кнопка Темная outlined
</UiButton>
<UiButton mode="light" fillType="filled">
  Кнопка Светлая filled
</UiButton>
```

## UiCheckbox

Пример использования

```javascript
<UiCheckbox id="23">Чекбокс</UiCheckbox>
```

## UiIcon

Пример использования:
1 Сохранить иконку в svg формате(ArrowUp.svg) в папке public/assets/icons  
2 Добавить название иконки в enum IconName (src/ui-elements/ui-icon/icon-names.ts)
3 Использовать следующим образом:

```javascript
<UiIcon name={IconName.Analytics} size={36}/>
```
