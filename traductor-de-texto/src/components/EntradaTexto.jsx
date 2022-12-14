export function EntradaTexto({ value, onChange }) {
  return (
    <div className="field">
      <h1>Ingresa el texto en español</h1>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
