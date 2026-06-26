import "./globals.css";
import localFont from 'next/font/local'

const chipDisp = localFont({
  src: [
    { path: "./fonts/ChipDisp-Black.otf", weight: '900', style: "normal" },
    { path: "./fonts/ChipDisp-BlackItalic.otf", weight: '900', style: "italic" },
    { path: "./fonts/ChipDisp-Bold.otf", weight: '700', style: "normal" },
    { path: "./fonts/ChipDisp-BoldItalic.otf", weight: '700', style: "italic" },
    { path: "./fonts/ChipDisp-Semibold.otf", weight: '600', style: "normal" },
    { path: "./fonts/ChipDisp-SemiboldItalic.otf", weight: '600', style: "italic" },
    { path: "./fonts/ChipDisp-Regular.otf", weight: '400', style: "normal" },
    { path: "./fonts/ChipDisp-Italic.otf", weight: '400', style: "italic" },
  ],
  variable: '--font-chip-display',
});

const chipText = localFont({
  src: [
    { path: "./fonts/ChipText-Bold.otf", weight: '800', style: "normal" },
    { path: "./fonts/ChipText-BoldItalic.otf", weight: '800', style: "italic" },
    { path: "./fonts/ChipText-Semibold.otf", weight: '600', style: "normal" },
    { path: "./fonts/ChipText-SemiboldItalic.otf", weight: '600', style: "italic" },
    { path: "./fonts/ChipText-Medium.otf", weight: '500', style: "normal" },
    { path: "./fonts/ChipText-MediumItalic.otf", weight: '500', style: "italic" },
    { path: "./fonts/ChipText-Regular.otf", weight: '400', style: "normal" },
    { path: "./fonts/ChipText-Italic.otf", weight: '400', style: "italic" },
  ],
  variable: '--font-chip-text',
});

const chipMono = localFont({
  src: [
    { path: "./fonts/ChipMono-Medium.otf", weight: '500', style: "normal" },
    { path: "./fonts/ChipMono-Regular.otf", weight: '400', style: "normal" },
  ],
  variable: '--font-chip-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chipDisp.variable} ${chipText.variable} ${chipMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
