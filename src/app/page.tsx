import { prisma } from "@/db";
import Link from "next/link";
import { todo } from "node:test";

export default async function Home(){

  const todos = await prisma.tODO.findMany()

  return(
    <>
    <header className="flex justify-around items-left mb-4">
    <h1 className="text-xl">This is NextJS</h1>
    <Link className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/newPage">Add New</Link>
    </header>
    <div className="m-2 p-4 shadow-xl">
    <ul>
      {todos.map(todo=>(
        <li key={todo.id}> {todo.title} </li> 

        // https://www.youtube.com/watch?v=NgayZAuTgwM&t=149s
      ))}
    </ul>
    </div>
    

    </>
    
)
}