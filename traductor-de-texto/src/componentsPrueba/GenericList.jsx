import GenericCard from "./GenericCard";

let randomImage = `https://random.imagecdn.app/500/${
  150 + Math.floor(Math.random() * 100)
}`;
function GenericList({ collection }) {
  return (
    <div>
      {collection.map((item, index) => {
        let randomImage = `https://random.imagecdn.app/500/${
          150 + Math.floor(Math.random() * 100)
        }`;
        return (
          <GenericCard
            title={item.title}
            description={item.description}
            image={randomImage}
          />
        );
      })}
    </div>
  );
}

export default GenericList;
