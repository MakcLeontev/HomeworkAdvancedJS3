// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).


const btn = document.querySelector('.btn');
const box = document.querySelector('.box');


btn.addEventListener('click', () => {
    const input = document.querySelector('.input');
    const inputText = document.querySelector('.inputText');
    localStorage.setItem(input.value, inputText.value);
    renderItem(input.value, inputText.value);
})

function renderItem(product, review) {
    const reviewItem = document.createElement('li');
    reviewItem.className = 'item';
    const h2 = document.createElement('h2');
    h2.textContent = product
    reviewItem.appendChild(h2);
    const text = document.createElement('p');
    text.textContent = 'Отзыв: ' + review;
    const btnDel = document.createElement('button');
    btnDel.textContent = 'Удалить';
    btnDel.className = 'btnDel';
    reviewItem.appendChild(text);
    text.style.display = 'none';
    reviewItem.appendChild(btnDel);
    box.appendChild(reviewItem);
    deleteItem();
    hiddenItem()

}
function renderAll() {
    const keys = Object.keys(localStorage);
    keys.forEach(element => {
        console.log(localStorage.getItem(element));
        const reviewItem = document.createElement('li');
        reviewItem.className = 'item';
        const h2 = document.createElement('h2');
        h2.textContent = element;
        reviewItem.appendChild(h2);
        const text = document.createElement('p');
        text.textContent = 'Отзыв: ' + localStorage.getItem(element);

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Удалить';
        btnDel.className = 'btnDel';
        reviewItem.appendChild(text);
        text.style.display = 'none';
        reviewItem.appendChild(btnDel);
        box.appendChild(reviewItem);
    });
}
renderAll();
deleteItem();
hiddenItem()
function deleteItem() {
    const btnDelete = document.querySelectorAll('.btnDel');
    btnDelete.forEach((button) => {
        button.addEventListener('click', () => {
            const product = button.closest('.item');
            const productH2 = product.querySelector('h2').textContent;
            localStorage.removeItem(productH2);
            product.remove();

        })
    });
}


function hiddenItem() {
    const itemName = document.querySelectorAll('h2');
    itemName.forEach(element => {
        element.addEventListener('click', () => {
            element.nextSibling.style.display = 'block';
        })
    });
}


