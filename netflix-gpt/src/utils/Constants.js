export const tmdbOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2ZkOThlNDVmZjRmYWJhODBlZTZiZWY5MDRhZDM3ZSIsInN1YiI6IjY2MGQwMjllMTVkZWEwMDE2MjM0MjU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VhQKiEJeWzG1TQRlwNQg_na8uElj43BEMk57bayzPbw",
  },
};

export const TMDB_api_key = "33fd98e45ff4faba80ee6bef904ad37e";
export const languageConstants = [
  { identifier: "English", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "French", name: "French" },
];

export const lang = {
  English: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  Hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  Spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
  French: {
    search: "Recherche",
    gptSearchPlaceholder: "qu'est-ce que tu veux regarder aujourd'hui ?",
  },
};

export const Gemini_API_KEY="AIzaSyCgtNMsVjLtAVu-hDgrzZkNOQdFLndhA_c";
