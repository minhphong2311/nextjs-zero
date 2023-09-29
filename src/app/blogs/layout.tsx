export const metadata = {
    title: "Blogs",
    description: "Blogs page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>{children}</>
    );
}
