import BookCard from "../components/BookCard";

export default function HomePage() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "/gatsby.jpg"
    },
    {
      title: "The Bell Jar",
      author: "Sylvia Plath",
      image: "/bell.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "/1984.jpg"
    },
    {
      title: "The Secret History",
      author: "Donna Tart",
      image: "/secret.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "/mockingbird.jpg"
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      image: "/gone.jpg"
    }
  ];

  return (
    <div className="container">
      <h1 className="heading">📚 Book Collection</h1>

      <div className="book-grid">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}