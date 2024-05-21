import { useContext } from "react";
import Item from "./item";
import Listcontext from "./contextList";

const ListItem = () => {
    const context = useContext(Listcontext)
    if (context.work.length) {
        return (
            <>
                <div className='list'>
                    {context.work.map(c => (<Item id={c.id} title={c.title} state={c.state} key={c.id} />))}

                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='list'>
                    <div className='work'>
                        <p>You don't Note anyThing!</p>
                    </div>
                </div>
            </>
        )
    }
}
export default ListItem;
