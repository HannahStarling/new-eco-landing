import {Nunito_Sans} from 'next/font/google'
import "./styles/global.scss";

const NUNITO_SANS = Nunito_Sans({subsets: ['latin', "cyrillic-ext", "cyrillic"]})


export const metadata = {
  title: "Intelogis | Платформа для вашего бизнеса",
  description: "Платформа Intelogis для вашего бизнеса",
};

export const RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
    <body className={NUNITO_SANS.className}>{children}</body>
    </html>
  );
}
