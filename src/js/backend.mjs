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

export async function getOffre(id) {
	try {
		const data = await pb.collection('maison').getOne(id);
		return data;
	} catch (error) {
		console.log('Une erreur est survenue en lisant la maison', error);
		return null;
	}
}

export async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        return await pb.collection('maison').getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
            sort: '-created',
        });
    } catch (error) {
        console.log('Une erreur est survenue en filtrant les maisons par prix', error);
        return [];
    }
}

export async function toggleFavoris(id, currentStatus) {
    try {
        await pb.collection('maison').update(id, {
            favoris: !currentStatus
        });
        return {
            success: true,
            newStatus: !currentStatus
        };
    } catch (error) {
        console.log('Une erreur est survenue en modifiant le favori', error);
        return {
            success: false,
            newStatus: currentStatus
        };
    }
}