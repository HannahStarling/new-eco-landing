import "./styles/global.scss";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Платформа Intelogis для вашего бизнеса",
  description: "Платформа Intelogis для вашего бизнеса",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
