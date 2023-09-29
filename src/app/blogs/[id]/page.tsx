'use client'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';



const ViewDtailBlog = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <Link href='/blogs'>Back</Link>
            <Card className='text-center'>
                <Card.Header>Title: {data?.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>Author: {data?.author}</Card.Footer>
            </Card>
        </div>
    )
}

export default ViewDtailBlog;