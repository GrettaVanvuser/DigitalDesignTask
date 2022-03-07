'use strict';




// function weekDay(date) {
// 	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
 
// 	// return days[date.getDay()];

// 	document.getElementById('datatext').innerHTML = ``
// }

function getDayInfo(dateString) {
	let date = new Date(Date.parse(dateString));

	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	let mounth = ['Января', 'Февраля', 'Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября', 'Декабря'];
	
	let dayOfMounth;
	(date.getDate() >= 1 && date.getDate() <= 7) ? dayOfMounth = '1 неделя' :
	(date.getDate() >= 8 && date.getDate() <= 14) ? dayOfMounth = '2 неделя' :
	(date.getDate() >= 15 && date.getDate() <= 21) ? dayOfMounth = '3 неделя' :
	(date.getDate() >= 22 && date.getDate() <= 28) ? dayOfMounth = '4 неделя' : '5 неделя'

	document.getElementById('datatext').innerHTML = `${days[date.getDay()]}, ${dayOfMounth} ${mounth[date.getMonth()]} ${date.getFullYear()} года`

}


// Суббота, 1 неделя Января 2022 года
//1-7 - первая 7-14 - вторая 14 - 21 - третья 21-28 - четвертая 28 - пятая
/* <script>
function fu(){
    var par = document.querySelector('.par');
    par.innerHTML = 'Замена текущего тестового текста';
}
</script> */