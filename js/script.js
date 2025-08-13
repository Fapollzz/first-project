"use strict";

const number0Films = prompt('Сколько вы уже посмотрели', '');

const personalMovieDB = {
    count: number0Films,
    moveis: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2;i++){
    const a = prompt('Один из последних просмотренных фильмов',''),
          b = prompt('На сколько оцените его?','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDB.moveis[a] = b;
    }else{
        i--;
    }

}

     if(personalMovieDB.count < 10){
        console.log('Просмотров довольно мало');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }


console.log(personalMovieDB);

