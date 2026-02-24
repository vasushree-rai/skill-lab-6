import Image from "next/image";

export default function BookCard({ title, author, image }) {
  return (
    <div className="card">
      <div className="image-container">
        <Image
          src={image}
          alt={title}
          width={250}
          height={350}
          className="book-image"
        />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
}