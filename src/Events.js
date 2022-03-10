/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.onclick = () => document.getElementsByTagName('button')[0].remove();
    document.body.insertAdjacentElement('afterbegin', button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.insertAdjacentHTML('afterbegin', `<ul></ul>`);
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', li.textContent),
        );
        document.querySelector('ul').insertAdjacentElement('beforeend', li);
    });
    // document.querySelector('ul').addEventListener('mouseover', function (event) {
    //     if (event.target && event.target.nodeName === 'LI') {
    //         event.target.setAttribute('title', event.target.innerText)
    //     }
    // });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `<a href='https://tensor.ru/'>tensor</a>`,
    );
    const a = document.querySelector('a');
    a.addEventListener('click', (event) => {
        if (!a.textContent.includes('https://tensor.ru/')) {
            event.preventDefault();
            a.textContent += ' https://tensor.ru/';
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );
    const ul = document.querySelector('ul');
    document.querySelector('button').onclick = () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.insertAdjacentElement('beforeend', li);
    };
    ul.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
}
