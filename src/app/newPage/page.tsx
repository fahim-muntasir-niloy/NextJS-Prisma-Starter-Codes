import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

// connecting the form data to the server

async function createTodo(data:FormData) {
    "use server"
    
    const title = data.get("title")?.valueOf()

    if (typeof(title) !=="string" || title.length === 0){
        throw new Error ("Invalid Item")
    }

    await prisma.tODO.create({data:{title, complete:false}})

    redirect("/")
}

export default function newPage(){
    return(
        <>

        <header className="flex justify-around items-start mb-5">
            <h1 className="text-2xl">New Item</h1>
        </header>

        
        <div className="flex items-start gap-3 justify-center">

            <form action={createTodo} className="flex gap-3 mb-3">
                <input type="text" 
                name="title"
                className="border border-slate-400 bg-transparent rounded p-2 outline-none focus-within:border-slate-800"
                />

                {/* Create Button */}

                <button type="submit" className="bg-transparent hover:bg-green-500 text-green-500
                hover:text-white p-2 border border-green-500 hover:border-transparent rounded">
                    Create
                </button>

                {/* Cancel button */}

                <Link href="..." className="bg-transparent hover:bg-red-500 text-red-700 
                hover:text-white p-2 border border-red-500 hover:border-transparent rounded">
                    Cancel
                </Link>
            </form>
        </div>
        
        
        </>
    )
}