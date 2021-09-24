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

    var name = 'Paras Kamboj';


    console.log('kamboj kumar');
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
    