// moment-with-locales.min.js
moment().locale('ru');

var m = momemnt();
var m2 = moment(m);  // 1
m.clone()

var fomat = 'DD.MM.YYYY';

// Получает - задаёт
moment().millisecond(); // Number
moment().second(Number);
moment().minute(); // Number
moment().hour(Number);
moment().date(); // Number    день месяца
moment().day(Number|String); // День недели 0-6
moment().dayOfYear(); // Number
moment().week(Number); // moment().isoWeek(Number);
moment().month(); // 0 - 11  "Feb"
moment().year(Number);
moment().weeksInYear(); // Неделя в году

moment().isoWeekday(Number);
moment().weekday(Number);

moment().month(3).date(12).format(format);



moment().format('DD.MM.YYYY');
// 01.05.2019
moment().format('MM/DD/YY');
// 05/01/19
moment().format('MMM DD MMMM HH:mm')
// May 01 May 13:37


moment('2015/04/16','YYYY/MM/DD').format('MMM DD MMMM HH:mm');
// апр. 16 апреля 00;00 2015
var date = {
    years: 2010,   // year  // y
    days: 15,      // day   // d
    months: 5,     // M
    m:45
};
moment(date).format('DD.MM.YYYY HH:mm')
// 15.06.2010 00:45


moment().get('year');  // 2019
        .get('date');  // 01
        .get('E');     // 4 - день недели
        .get('LT');    // 13:50 PM - время без секунд

moment().set('M',10).set('date',18).fomat(format);
// 18.11.2019
moment().set({
    date:30,
    M:4
})
// 30.04.2019



var m = moment();
m.add(3,'days').format(format);
// 04.05.2019
m.add(3,'day').add(3,'y').format();
// 04.05.2022
m.add(-3,'M').format(format);
// 01.02.2019
m.add({
    d: 3,
    M: 3,
    y: -15
}).format(format); // 04.08.2004

m.substract(15,'y').format(format);
// 01.05.2004

moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);



var form = 'DD.MM.YYYY  HH:mm:ss';
// изменяет время
m.startOf('w').format(form);
// 28.04.2019  00:00:00
m.endOf('w').format(form);
// 04.05.2019  23:59:59


m.startOf('y').fromNow();
// 4 months ago
m.startOf('y').fromNow(true);
// 4 months
m.endOf('y').fromNow();
// in 8 months

var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b);
// "a day ago"
a.to(b) // "in a day"

moment([2007, 0, 29]).toNow();
// in 4 years

var m = moment().startOf('y');
var m2 = moment();
m.diff(m2,'d');
// -121
m.diff(m2,'w');
// -17



m2.isBefore(m);
// false
moment('2010-10-20').isBefore('2010-12-31', 'year');
// false
moment('2010-10-20').isBefore('2011-01-01', 'year');
// true

moment('2010-10-20').isSame('2009-12-31', 'year');
// false
moment('2010-10-20').isSame('2010-01-01', 'year');
 // true

 m2.isAfter(m);
 // true
 moment('2010-10-20').isAfter('2010-01-01', 'year');
 // false
 moment('2010-10-20').isAfter('2009-12-31', 'year');
 // true



moment().daysInMonth();
moment("2012-02", "YYYY-MM").daysInMonth();
// 29
moment([2010, 1, 1]).daysInMonth();
// 28


var m2 = moment().add(10,'d');
moment().isBetween(m,m2);
// true

moment('2012-05-25', 'YYYY-MM-DD').isValid();
// true

moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
// Для разных возможных форматов дат



// Високосный год
moment().isLeapYear();
moment([2000]).isLeapYear()
// true
moment([2001]).isLeapYear()
// false


moment.duration(1, "minutes").humanize(); // a minute
moment.duration(2, "minutes").humanize(); // 2 minutes
moment.duration(24, "hours").humanize();  // a day
