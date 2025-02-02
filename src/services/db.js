// services/db.js

const DB_NAME = 'captionsDB';
const STORE_NAME = 'histories';
const DB_VERSION = 1;

const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject(request.error);
        };

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true
                });

                // Create indexes
                store.createIndex('created_at', 'created_at', { unique: false });
            }
        };
    });
};

export const getAllHistories = async () => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.index('created_at').openCursor(null, 'prev'); // Sort by created_at descending
            const results = [];

            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    results.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(results);
                }
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error getting histories:', error);
        throw error;
    }
};

export const saveHistory = async (historyData) => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);

            // Add created_at timestamp
            const dataToSave = {
                ...historyData,
                created_at: new Date().toISOString()
            };

            const request = store.add(dataToSave);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error saving history:', error);
        throw error;
    }
};

export const deleteHistory = async (id) => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error deleting history:', error);
        throw error;
    }
};

export const getHistoryById = async (id) => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error getting history:', error);
        throw error;
    }
};

export const updateHistory = async (id, updates) => {
    try {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);

            // First get the existing record
            const getRequest = store.get(id);

            getRequest.onsuccess = () => {
                const existingData = getRequest.result;
                if (!existingData) {
                    reject(new Error('Record not found'));
                    return;
                }

                // Merge existing data with updates
                const updatedData = {
                    ...existingData,
                    ...updates
                };

                // Put the updated record
                const putRequest = store.put(updatedData);

                putRequest.onsuccess = () => {
                    resolve(updatedData);
                };

                putRequest.onerror = () => {
                    reject(putRequest.error);
                };
            };

            getRequest.onerror = () => {
                reject(getRequest.error);
            };
        });
    } catch (error) {
        console.error('Error updating history:', error);
        throw error;
    }
};