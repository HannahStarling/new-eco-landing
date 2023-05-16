This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## UiElements

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
