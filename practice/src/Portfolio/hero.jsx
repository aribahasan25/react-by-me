import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {t("hero.welcome")}
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mt-6 leading-tight">
            
            {t("hero.intro")} <span className="text-blue-600">({t("hero.title")})</span>
          </h1>

          <h2 className="text-3xl font-semibold text-gray-700 mt-4">
            {t("hero.role")}
          </h2>

          <p className="text-lg text-gray-600 mt-6 leading-8 max-w-2xl">
            {t("hero.description")}
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              {t("hero.projectBtn")}
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition">
              {t("hero.contactBtn")}
            </button>
          </div>

        </div>

      </section>
    </>
  );
}

export default Hero;