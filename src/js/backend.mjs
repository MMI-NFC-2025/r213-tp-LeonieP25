import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getImageUrl(record, imageField) {  
    return pb.files.getURL(record, imageField);  
}


export async function getOffres() {
	try {
		return  await pb.collection('maison').getFullList({
			sort: '-created',
		});
	} catch (error) {
		console.log('Une erreur est survenue en lisant la liste des maisons', error);
		return [];
	}
}