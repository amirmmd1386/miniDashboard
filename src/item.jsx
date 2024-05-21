import { useContext } from "react";
import Listcontext from "./contextList";

const Item = (props) => {
    const context = useContext(Listcontext)
    const deleteItem = (idDel) => {
        let items = context.work.filter(item => item.id !== idDel)
        context.setWork(items)
        console.log(context.work);
    }
    const isState = (idState) => {
        let index = context.work.findIndex(c => c.id === idState)
        context.work[index].state = !context.work[index].state
        let item = context.work.map(item => item)
        context.setWork(item)
    }

    return (
        <>
            <div className='work' style={{ borderBottom: props.state ? '2px solid green' : '2px solid red', borderTop: props.state ? '2px solid green' : '2px solid red' }}><p>{props.state ? (<del>{props.title}</del>) : props.title}</p><div><span onClick={() => isState(props.id)} style={{ color: props.state ? 'green' : 'red' }}>{props.state ? 'Done' : 'Failed'}</span><span className="del" onClick={() => deleteItem(props.id)}>Delete</span></div></div>
        </>
    )
}
export default Item;