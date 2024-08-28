import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-random-verse-quran.vercel.app",
  timeout: 5000,
});
export const getSurah = async () => {
  try {
    const randomizer = Math.floor(Math.random() * 114) + 1;
    const response = await axiosInstance.get(`/${randomizer}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching surah:", error);
    throw error;
  }
};

export default axiosInstance;
