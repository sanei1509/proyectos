export function Lenguajes({ valorActualLenguaje, controladorLenguaje }) {
  return (
    <>
      <h2>Selecciona el idioma al que quieres traducir</h2>
      {/* SELECTOR DE idioma */}
      <div className="opts">
        {IDIOMAS.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${
                valorActualLenguaje === value ? "selected" : ""
              }`}
              onClick={() => controladorLenguaje(value)}
            >
              {label}
            </div>
          );
        })}
      </div>
    </>
  );
}

const IDIOMAS = [
  { label: "Afrikano", value: "af" },
  { label: "Arabico", value: "ar" },
  { label: "Frances", value: "fr" },
  { label: "Indu", value: "hi" },
  { label: "Japones", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Ruso", value: "ru" },
  { label: "Chino Simple", value: "zh-CN" },
  { label: "Espanol", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];
