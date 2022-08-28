type LocalStorageSave = <T>(name: string, data: T) => void;
type LocalStorageRead = <T>(name: string) => T | null;

export const localStorageSave: LocalStorageSave = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const localStorageRead: LocalStorageRead = name => {
  const local = localStorage.getItem(name);
  if (local === null) return null;
  return JSON.parse(local);
};
