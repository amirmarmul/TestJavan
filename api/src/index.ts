import server from './infra/webserver/server';

export const start = async () => {
    try {
        await server();
        
    } catch (error) {
        console.error(error);
    }
}

start();
