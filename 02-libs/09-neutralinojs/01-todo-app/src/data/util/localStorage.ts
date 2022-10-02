type LocalStorageSave = <T>(name: string, data: T) => void;
type LocalStorageRead = <T>(name: string) => T | null;

class LocalStorageAPI {
  hasChanged = (name: string, value: string) => {
    const localValue = localStorage.getItem(name);
    return JSON.stringify(localValue) === JSON.stringify(value);
  };

  save: LocalStorageSave = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  read: LocalStorageRead = name => {
    const local = localStorage.getItem(name);
    if (local === null) return null;
    return JSON.parse(local);
  };
}

export const localStorageAPI = new LocalStorageAPI();
