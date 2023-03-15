import { redirect } from "react-router";
import AddForm from "~/components/addForm";
import ModalDialog from "~/components/utils/modal";
import { deleteitem, updateItemData } from "~/data/expense.server";
export default function DetailItem(){
    return(
        <>
            <ModalDialog>
                <AddForm/>
            </ModalDialog>
        </>
    )
}

export async function action({params, request}:any){
    const itemId = params.id;
    if(request.method === 'PATCH'){
        const formData = await request.formData()
        const dataItem = Object.fromEntries(formData)
        await updateItemData(itemId,dataItem);
        return redirect('..')
    }
    else if(request.method === 'DELETE'){
        await deleteitem(itemId);
        return redirect('..');
    }
}