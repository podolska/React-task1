export function getUsers () {
    async function apiUsers () {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        return await result.json();
    };

    return apiUsers();
};

export function getAlbums (id) {
    async function apiAlbums () {
        const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        return await result.json();
    };

    return apiAlbums();
};

export function getPhotos (id) {
    async function apiPhotos () {
        const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        return await result.json();
    };

    return apiPhotos();
}