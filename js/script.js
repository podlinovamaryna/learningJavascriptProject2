/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1) Удалить все рекламные блоки со страницы (правая часть сайта)
function removeAdverb(){
    const adv = document.querySelectorAll(".promo__adv img");
    adv.forEach(item => {
    item.remove();
});
}

const addForm = document.querySelector(".add"),
      addInput = addForm.querySelector(".adding__input"),
      checkBox = addForm.querySelector('[type="checkbox"]'),
      movieList = document.querySelector(".promo__interactive-list"),
      poster = document.querySelector(".promo__bg"),
      drama = document.querySelector(".promo__genre");

const makeChanges = () => {
poster.style.backgroundImage = 'url("img/bg.jpg")';
drama.textContent = "драма";
};

const sortArr = (arr) => {
     arr.sort();
};

function createMovieList(films, parent){

    parent.innerHTML = "";
    sortArr(films);
    films.forEach((film, i) =>{
         parent.innerHTML += 
    `<li class = "promo__interactive-item">${i + 1} ${film}
         <div class='delete'></div>
    </li>
    `;
});
    document.querySelectorAll(".delete").forEach((btn, i) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);

    });
});
}


addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let   newFilm = addInput.value;
        const favorite = checkBox.checked;
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if(favorite)
            {
                console.log("love folm!");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            
        }
        event.target.reset();

    });

    removeAdverb();
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});


