const notificationContainer = document.querySelector('.notification-container');
const infoExample = document.querySelector('.info');
const infoMessage = 'I\'m an info box\!';
const successExample = document.querySelector('.success');
const successMessage = 'You did it\!'
const warningExample = document.querySelector('.warning');
const warningMessage = 'Well... it didn\'t break this time'
const criticalExample = document.querySelector('.critical');
const criticalMessage = 'Systems unfunctional, you really did it this time'

// Listeners for activeing examples

infoExample.addEventListener('click', info);
successExample.addEventListener('click', success);
warningExample.addEventListener('click', warning);
criticalExample.addEventListener('click', critical);

function info() {
	createNotification('info', infoMessage)
}

function success() {
	createNotification('Success', successMessage)
}

function warning() {
	createNotification('Warning', warningMessage)
}

function critical() {
	createNotification('CRITICAL', criticalMessage)
}

// Notification functions

function createNotification(type, message) {
	// Create Notification
	let notification = document.createElement('p');
	notification.classList = `notification ${ type.toLowerCase() }`;
	setTimeout(function() {notification.classList.add('show')}, 20);
	notification.innerText = `${ type }: ${ message }`;
	// Create close button
	let close = document.createElement('p');
	close.classList = 'close';
	close.innerText = 'x';
	notification.appendChild(close);
	close.addEventListener('click', () => {
		closeNotification(notification)
	});
	// Append to Noticiation Container
	notificationContainer.appendChild(notification);
	// Noticiation Timeout
	notificationTimeout(type.toLowerCase(), notification);
}

function notificationTimeout(type, notification) {
	if (type == 'info') {
		setTimeout(function() {
			closeNotification(notification)
		}, 4000);
	} else if (type == 'success') {
		setTimeout(function() {
			closeNotification(notification)
		}, 3000);
	} else if (type == 'warning') {
		setTimeout(function() {
			closeNotification(notification)
		}, 6000);		
	} else if (type == 'critical') {
		setTimeout(function() {
			closeNotification(notification)
		}, 10000);	
	}
}

function closeNotification(notification) {
	notification.classList.remove('show');
	setTimeout(function() {notificationContainer.removeChild(notification)}, 750);
}

// Show examples on page load

info();
success();
warning();
critical();



