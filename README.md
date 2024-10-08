# Content Placeholder Card

Този проект представлява динамична карта с анимации и placeholder-и за текст и изображения, които симулират зареждане на съдържание. След кратко забавяне, съдържанието се зарежда динамично чрез JavaScript.

## Файлове в проекта

- `index.html`: Основният HTML файл, който съдържа структурата на картата.
- `style.css`: CSS файлът, който определя стилизирането на картата, анимациите за placeholder текстовете и изображенията.
- `script.js`: JavaScript файл, който управлява динамичното зареждане на съдържанието след симулация на забавяне.

## Как работи проектът?

1. **Placeholder анимации**: Картата стартира с placeholder-и за изображенията и текстовете (използвайки класове `.animated-bg` и `.animated-bg-text`), които симулират зареждане на съдържание.
2. **Зареждане на съдържание**: След кратко забавяне (в момента 2 секунди), чрез JavaScript, placeholder-ите се премахват и реалното съдържание се зарежда в картата.
3. **Адаптивен дизайн**: Проектът използва адаптивен дизайн, като се настройва спрямо размерите на екрана, благодарение на CSS.

## Структура на кода

### `index.html`
HTML структурата на картата. Тук имаме два основни раздела:

- **card-header**: Заглавната част на картата, която съдържа изображение.
- **card-content**: Съдържателната част, която включва заглавие, текст и информация за автора.

### `style.css`
CSS файлът съдържа стилизиране за:
- **Общи стилове**: Определя основни настройки като фон, шрифтове и подредба на елементите.
- **Placeholder анимации**: Класовете `.animated-bg` и `.animated-bg-text` създават ефекта на зареждащ се текст или изображение.
- **Картата**: Картата е със заоблени ръбове и сянка, за да изглежда по-приятно.

### `script.js`
JavaScript файлът е отговорен за динамичното зареждане на съдържанието:
- **Зареждане на съдържание**: Използва `setTimeout`, за да забави зареждането на реалното съдържание за 2 секунди.
- **Премахване на анимации**: След като съдържанието е заредено, се премахват класовете за placeholder анимациите.
