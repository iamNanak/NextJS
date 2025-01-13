

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <h2>NavItems</h2>
        {children}
      </>
  );
}
