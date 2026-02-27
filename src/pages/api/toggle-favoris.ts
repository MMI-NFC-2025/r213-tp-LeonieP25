import type { APIRoute } from 'astro';
import { toggleFavoris } from '../../js/backend.mjs';

export const POST: APIRoute = async ({ request }) => {
    try {
        const { id, currentStatus } = await request.json();
        const result = await toggleFavoris(id, currentStatus);
        
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Erreur serveur' 
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
