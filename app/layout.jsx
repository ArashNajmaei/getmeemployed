import "./globals.css";

export const metadata = {
  title: "Get Me Employed",
  description: "Job-ready short courses in data, cloud, AI and digital skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
