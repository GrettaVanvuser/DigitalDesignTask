'use strict';


document.getElementById('menu__button').onclick = function() {
	document.getElementById('menu__icon').classList.toggle('menu__icon_active');
	// document.getElementById('menu__list').classList.toggle('menu__list_active');
	document.getElementById('menu').classList.toggle('menu_active');
	// document.getElementById('menu__body').classList.toggle('menu__body_active');
	// document.querySelectorAll("li.menu__item").forEach(li => li.classList.toggle('menu__item_active'));
	document.querySelectorAll("li.menu__item").forEach(li => li.classList.toggle('menu__item_active'));
}

document.getElementById('menu').onclick = function(){
	if(document.getElementById('menu').classList.contains('menu_active')) {
		this.classList.remove('menu_active');
		document.getElementById('menu__icon').classList.remove('menu__icon_active');
		document.querySelectorAll("li.menu__item").forEach(li => li.classList.remove('menu__item_active'));
	}
}

function liItemsUpgrade() {
	document.querySelectorAll("li.menu__item").forEach(li => li.classList.remove('menu__item_active'));
}

window.onresize = switchClass;
function switchClass() {
	document.getElementById('menu__icon').classList.remove('menu__icon_active');
	document.getElementById('menu').classList.remove('menu_active');
	liItemsUpgrade()
}


