'use client'
import Link from 'next/link'
import { Button } from 'react-bootstrap';

const admin = () => {
    return (
        <div>
            <Button variant="primary">Test</Button>
            <Link href="/">Home</Link>
        </div>
    )
}
export default admin;