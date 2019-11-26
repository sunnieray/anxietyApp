import firebase from '../config/firebase';

function getDatabaseCollectionContext() {
	const db = firebase.firestore();
	const techniques = db.collection('calmingTechniques');
	return techniques;
}

function getDatabaseItemContext(techniquesId) {
	const db = firebase.firestore();
	const techniques = db.collection('calmingTechniques').doc(techniquesId);
	return techniques;
}

function getMainContext() {
	const main = document.querySelector('.main');
	return main;
}

export default {
	getDatabaseCollectionContext,
	getDatabaseItemContext,
	getMainContext
};