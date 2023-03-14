import { redirect } from "react-router";
import { deleteitem } from "~/data/expense.server";
export default function DetailItem(){
    return(
        <main>
            <div>hello</div>
        </main>
    )
}

export async function action({params}:any){
    const itemId = params.id;
    await deleteitem(itemId);
    return redirect('expenses');
}