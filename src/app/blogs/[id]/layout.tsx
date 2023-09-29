import { Metadata } from "next";

type Props = {
    params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blog - ${params.id}`,
    };
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
