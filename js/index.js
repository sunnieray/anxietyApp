/* eslint-disable no-use-before-define */
import Header from './components/Header';
import Home from './components/Home';
import Anxiety from './components/Anxiety';
import Meditation from './components/Meditation';
import Sleep from './components/Sleep';
import Productivity from './components/Productivity';
import Games from './components/Games';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
	renderHeader();
	renderHome();
	renderAnxiety();
	renderMeditation();
	renderSleep();
	renderProductivity();
	renderGames();
}

function renderHeader() {
	const header = document.querySelector('.header');
	header.innerHTML = Header();
}

function renderHome() {
	const home = document.querySelector('.nav-list__home');
	home.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Home();
	});
}

function renderAnxiety() {
	const anxiety = document.querySelector('.nav-list__anxiety');
	anxiety.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Anxiety();
	});
}

function renderMeditation() {
	const meditation = document.querySelector('.nav-list__meditation');
	meditation.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Meditation();
	});
}

function renderSleep() {
	const sleep = document.querySelector('.nav-list__sleep');
	sleep.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Sleep();
	});
}

function renderProductivity() {
	const productivity = document.querySelector('.nav-list__productivity');
	productivity.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Productivity();
	});
}

function renderGames() {
	const games = document.querySelector('.nav-list__games');
	games.addEventListener('click', () => {
		const main = document.querySelector('.main');
		main.innerHTML = Games();
	});
}
