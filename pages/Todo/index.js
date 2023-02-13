
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/todo.module.css'
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    return {
      props: {
        todos,
      },
    };
}

export default function Todoapp({todos}) {
  return (
    <>
      <Head>
        <title>Todoapp</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="icon" href="/img/leloi.jpg" />
      </Head>
      <div>
          <Link href={"/"} >Todoapp</Link>
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <h1>{todo.id}</h1>
                <p>{todo.title}</p>
                <hr></hr>
              </div>
              
            ))
          }
      </div>
    </>
    
  )
}
{/* <Image 
          src={"/img/leloi.jpg"}
          width={144}
          height={144}
        /> */}