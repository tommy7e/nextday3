export const metadata = {
  title: "Specific Movies | Idlix",
  description: "Spesifik Film",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
