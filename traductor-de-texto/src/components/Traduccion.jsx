import { useEffect, useState } from "react";
import axios from "axios";

export function Traduccion({ contenido, lenguajeSeleccionado }) {
  const [contenidoTraducido] = useTranslation(contenido, lenguajeSeleccionado);
  return (
    <div className="translate">
      <h2>Traduccion / Resultado de traducción</h2>
      <h3>{contenidoTraducido.replace("&#39;", "'")}</h3>
    </div>
  );
}

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken, setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {}
    };
  }, [text, language]);

  return [translated];
};

const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async (input, languageCode, cancelToken, callback) => {
    try {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
        {
          q: input,
          target: languageCode,
        },
        { cancelToken: cancelToken.token }
      );

      callback(data.data.translations[0].translatedText);
    } catch (err) {
      callback("");
    }
  }
);
