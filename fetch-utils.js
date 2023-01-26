// Enter Supabase Information
const SUPABASE_URL = 'https://iudwxayjxecgwjeagrxm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZHd4YXlqeGVjZ3dqZWFncnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MjI4MzIsImV4cCI6MTk5MDA5ODgzMn0.M4jIDI8h0jzNN-c5n-GUBEaYhy1WmI9qxDja3jyUfTc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response.user;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();

    if (user) window.location.href = './other-page';
}

export async function logout() {
    const response = await client.auth.signOut();

    return response;
}
