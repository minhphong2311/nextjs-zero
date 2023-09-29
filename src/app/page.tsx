'use client'
// import Image from 'next/image'
// import Link from 'next/link'
import '@/styles/app.module.css'
import AppTable from '@/components/app.table';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  
  if(!data){
    return <div>loading...</div>
  }


  return (
    <div>
      <div>{data?.lent}</div>
      <AppTable blogs={data} />
    </div>
  )
}
