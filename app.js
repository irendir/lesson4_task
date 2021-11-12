var students = [{
    id: 1, name: 'Dima',
    marks: [{name: 'Physics', mark: 3.4}, {name: 'Math', mark: 4.5}, {name: 'Informatics', mark: 4.2}]
}, {
    id: 2, name: 'Denis',
    marks: [{name: 'Physics', mark: 3.2}, {name: 'Math', mark: 4.2}, {name: 'Informatics', mark: 4.3}]
}, {
    id: 3, name: 'Helen',
    marks: [{name: 'Physics', mark: 4.2}, {name: 'Math', mark: 3.8}, {name: 'Informatics', mark: 4.5}]
}, {
    id: 4, name: 'Vasya',
    marks: [{name: 'Physics', mark: 4.8}, {name: 'Math', mark: 3.8}, {name: 'Informatics', mark: 4.0}]
}, {
    id: 4, name: 'Petya',
    marks: [{name: 'Physics', mark: 4.6}, {name: 'Math', mark: 3.6}, {name: 'Informatics', mark: 4.0}]
}]

var names = [];

function setAvarage() {
    //проставляет каждому из students поле avarage как среднюю арифм. оценку (по marks)
    for(var student of students) {
        var sum = 0;
        for(var marksObj of student.marks) {
            sum += marksObj.mark;
        }
    student.avarage = sum/student.marks.length;
    }
}

function getAvarage() {
    //выдает на экран ср. арифм. оценку по всем студентам (взять avarage у каждого студента, сложить и разделить на к-во студентов)
    var sumAvarage = 0;
    for(var student of students){
        sumAvarage += student.avarage;
    }
    var getAvarage = sumAvarage/students.length;
    console.log(getAvarage);
}

function setNames() {
    //добавить в массив names (объявление на 18й строке) все имена из массива студентов
    for(var student of students) {
        var studentName = student.name;
        names.push(studentName);
    }
}

function getMax() {
    //вывести на экран имя студента с максимальной оценкой
    for(var student of students) {
        var max = 0;
        if (student.avarage > max) {
            max = student.avarage;
        }
        console.log(student.name);
    }
}   

function checkName() {
    //здесь вводим через prompt имя и проверяем есть ли оно в массиве names (функция возвращает true или false)
    var getNames = prompt('Введите имя');
    for(var studentName of names){
        if(getNames == studentName){
            return true;
        } else {
            return false;
        }
    }
}
