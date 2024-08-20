export const metadata = {
  title: "All Movies | Idlix",
  description: "Semua Film",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
