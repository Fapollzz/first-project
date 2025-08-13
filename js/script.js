"use strict";

const number0Films = +prompt('Сколько вы уже посмотрели', '');

const personalMovieDB = {
    coutn: number0Films,
    moveis: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.moveis[a] = b;
personalMovieDB.moveis[c] = d;

console.log(personalMovieDB);