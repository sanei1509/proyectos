export function EntradaTexto({ value, onChange }) {
  return (
    <div>
      <h1>Ingresa el texto en español</h1>
      <label htmlFor=""></label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
