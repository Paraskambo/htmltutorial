var cup = 'tea';
    var firstName = 'Vipin';
    var middleName = 'Kumar';
    var lastName = ' Kamboj';
    document.getElementById('demo').innerHTML = firstName + ' ' + middleName + lastName;

    document.getElementById('demo').style.background = 'yellow';
    document.getElementById('demo').style.color = 'lightblue'
    document.getElementById('demo').style.padding = '.5em';

    document.getElementsByClassName('paragraph-class')[0].style.background = 'blue';
    document.getElementsByClassName('paragraph-class')[2].style.background = 'blue';

    document.getElementsByTagName('p')[3].style.background = 'pink';




    function turnOnTheBulb() {
        document.getElementById('bulb-image-id').src = 'images/pic_bulbon.gif';
    }

    function switchOffTheLight() {
        document.getElementById('bulb-image-id').src = 'images/pic_bulboff (1).gif';
    }


    var a = 12;
    var b = 14;
    var total = a + b;

   // var name = 'Paras Kamboj';


    //console.log('kamboj kumar');
    /*
    var car = {
        modal: 'Toyota',
        year: 1999,
        amount: 100000
    }

    var Bikes = [
        'pulsur',
        'hero',
        'bajaj'
    ]

    */
    document.getElementById('total').innerHTML = name;
    
    //alert('Kamboj');


    var x = 'Paras';
    var y = ' Kamboj';
    console.log(x + y);

    var age = 20;

    age = 25;

    console.log(age)

    var fruit;

    fruit = 'Apple';
    if(fruit == undefined) {
        console.log('Fruit is not defined!');
    } else {
        console.log('Fruit is defined and fruit name is ' + fruit);
    }

    var electricity;
    electricity = 'on';
    if(electricity == undefined) {
        console.log('Fan is not running!');
    } else {
        console.log('Fan is running!');
    }
    
    var power = 'full';

    if(power == 'dim') {
        console.log('Bulb light is dim');
    } else {
        console.log('Bulb is not dim');
    }

    var age = 19;
/*
    if(age < 18) {
        console.log('You can not drive');
    } else if(age == 18) {
        console.log('Show me your driving licence and drive');
    } else {
        console.log('You can drive');
    }
*/
    if(age == 18 || age > 18 ) {
        console.log('Yes, you can drive');
    } else {
        console.log('Sorry, you are not eligible to drive');
    }

    const namee = 'Paras Kumar Kamboj'
    const myAge = 30;
    const rating = 4.5;
    const isCool = true;
    const d = null;
    const e = undefined;
    let f;

    console.log(namee);
    console.log(typeof namee);
    console.log(myAge);
    console.log(typeof myAge);

    console.log(rating);
    console.log(typeof rating);

    console.log(isCool);
    console.log(typeof isCool);

    console.log(d);
    console.log(typeof d);

    console.log(e);
    console.log(typeof e);

    console.log(f);
    console.log(typeof f);
    
    document.getElementById('ghj').innerHTML = 'My name is ' + namee + ' and My age is ' + myAge + ' and I am not a ' + typeof isCool;

    document.getElementById('ghjk').innerHTML = `My name is ${namee} and my age is ${myAge} and I am not a ${typeof isCool}`  //'My name is ' + namee + ' and My age is ' + myAge + ' and I am not a ' + typeof isCool;

/*
    if(typeof namee === "string") {
        console.log(namee + ' is a string type');
    }

    if(typeof myAge != 'string') {
        console.log('My age is a ' + myAge + 'which is a ' + typeof myAge);
    }
    */