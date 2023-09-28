'use client'
import Image from 'next/image'
import Link from 'next/link'
import '@/styles/app.module.css'
import AppTable from '@/components/app.table';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() =>{
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, [])

  return (
    <div>
      <AppTable />
    </div>
  )
}
