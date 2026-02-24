import "./globals.css";

export const metadata = {
  title: "Book List App",
  description: "Simple Book List Display using React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}