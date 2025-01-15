const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
    fetch(baseUrl).then(res => res.json())
}