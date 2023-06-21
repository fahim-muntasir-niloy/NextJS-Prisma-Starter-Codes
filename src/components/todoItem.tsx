// creating functional todoItem component

type TodoItemProps = {
    id: String,
    title: String,
    complete: Boolean

}

export function TodoItem({id,title,complete} : TodoItemProps ){
    return (
        <li className="flex gap-1 items-center">
            <input id="id" type="checkbox" className="cursor-pointer peer" />
            <label htmlFor="id" className="cursor-pointer peer-checked:line-through text-slate-500">
                {title}
                </label>
        </li>
    )
} 