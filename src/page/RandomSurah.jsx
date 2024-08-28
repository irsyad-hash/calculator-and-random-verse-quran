import React, { Component, useEffect, useState } from "react";
import { getSurah } from "../utils/axiosInstance";
import islamicPattern from "../assets/islamic.png";
import AyahText from "./components/AyahText";

const SurahInfo = ({ name, ayahNumber }) => (
  <div className="flex text-4xl font-bold text-green-800 mb-4 flex-row gap-5">
    <div>{name}</div>
    <div className="flex text-lg justify-end text-green-600">
      Ayat {ayahNumber}
    </div>
  </div>
);
class Tafsir extends Component {
  render() {
    const { tafsirText } = this.props;
    return (
      <div className="container max-h-32 max-w-full overflow-y-scroll p-2 bg-white bg-opacity-75 border border-green-300 rounded-lg">
        <div className="text-md text-green-600 leading-relaxed text-justify">
          {tafsirText}
        </div>
      </div>
    );
  }
}

const RandomSurah = ({ showTafsir = true }) => {
  const [surah, setSurah] = useState({});
  const [randomizerAyah, setRandomizerAyah] = useState(1);

  const fetchSurah = async () => {
    const result = await getSurah();
    const number = Math.floor(Math.random() * result.number_of_ayah) + 1;

    if (result) {
      setSurah(result);
      setRandomizerAyah(number);
    }
  };

  useEffect(() => {
    fetchSurah();
  }, []);

  return (
    <div className="relative p-8 bg-gradient-to-r from-green-200 to-blue-100 rounded-xl shadow-2xl mt-20 mx-10 sm:mx-40">
      <div className="absolute inset-0 opacity-10">
        <img
          src={islamicPattern}
          alt="Islamic Pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <SurahInfo name={surah.name_latin} ayahNumber={randomizerAyah} />
        <AyahText
          arabicText={surah.text?.[randomizerAyah]}
          translation={surah.translations?.id?.text?.[randomizerAyah]}
        />

        {showTafsir && (
          <>
            <div className="text-2xl font-medium text-green-800 mb-2">
              Tafsir:
            </div>
            <Tafsir
              tafsirText={surah.tafsir?.id?.kemenag?.text?.[randomizerAyah]}
            />
          </>
        )}

        <button
          className="mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-700 rounded shadow transition duration-300 ease-in-out transform hover:scale-105"
          onClick={fetchSurah}
        >
          Randomize Surah
        </button>
      </div>
    </div>
  );
};

export default RandomSurah;
