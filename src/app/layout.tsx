import './globals.css';
import React from 'react';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Header from '@/app/_component/Header';
import Footer from '@/app/_component/Footer';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Ve green | Be green',
  description: '탄소 중립을 위한 채식 추천 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          pretendard.variable,
          'mx-auto max-h-screen w-screen max-w-xl rotate-0 border-l border-r font-pretendard text-text-500',
        )}
      >
        <div className="flex h-screen flex-col">
          <Header />
          <div className="flex-1 overflow-y-scroll scrollbar-hide">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
