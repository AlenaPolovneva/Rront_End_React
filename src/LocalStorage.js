const STORAGE_KEY = 'emoji_votes';

export const loadVotes = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
};

export const saveVotes = (votes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
};

export const clearVotes = () => {
    localStorage.removeItem(STORAGE_KEY);
};