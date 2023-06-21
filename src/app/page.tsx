import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/todoItem"



async function getTodos(){
  return await prisma.tODO.findMany()
}

export default async function Home(){

  const todos = await getTodos()

  // await prisma.tODO.create({data:{title:"todo_1", complete:false}})
  return(
    <>
    <header className="flex justify-around items-left mb-4">
    <h1 className="text-xl">This is NextJS</h1>
    <Link className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="/newPage">Add New</Link>
    </header>
    
    <div className="m-2 p-4 shadow-xl">
    <ul>
      {todos.map(todo=>(
        <TodoItem key={todo.id} {...todo}/> 
      ))}
    </ul>
    </div>
    

    </>
    
)
}