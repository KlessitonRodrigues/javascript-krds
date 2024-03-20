export const getLanguage = () => {
  try {
    return localStorage.getItem("lang") || "en";
  } catch (err) {
    return "en";
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem("lang", lang);
    location.reload();
  } catch (err) {}
};
