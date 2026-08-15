import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">

          <div>
            <h2 className="font-semibold text-xl">
              Ariba Hasan
            </h2>

            <p className="text-gray-400 text-sm">
              {t("footer.role")}
            </p>
          </div>

          <p className="text-sm text-gray-400">
            {t("footer.rights")}
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;
