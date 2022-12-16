function GenericCard({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title ? title : "Nombre del lugar"}</h5>
        <p className="card-text">
          {description ? description : "Descripción del lugar"}
        </p>
      </div>
    </div>
  );
}

export default GenericCard;
