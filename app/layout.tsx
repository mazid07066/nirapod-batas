import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "নিরাপদ বাতাস | RMG Air Monitoring",
  description:
    "বাংলাদেশের তৈরি পোশাক শিল্পের জন্য রিয়েল-টাইম বায়ু মান পর্যবেক্ষণ, ঝুঁকি বিশ্লেষণ এবং জোনভিত্তিক শিল্প নিরাপত্তা ড্যাশবোর্ড",
  keywords: [
    "নিরাপদ বাতাস",
    "RMG air monitoring",
    "Bangladesh industrial safety",
    "air quality dashboard",
    "ThingSpeak IoT project",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}