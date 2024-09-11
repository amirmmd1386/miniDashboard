import { useEffect, useState } from "react"
import { jsAxios } from "../../assets/js/jpaxios"
import { useParams } from "react-router-dom"
import alerts from "../../alert/sweatalert";

export const CommentModal = (props) => {
    const {commentId} = useParams();
    const [comments , setComments] = useState({});
    const { QuesAlert } = props
    useEffect(() => {
        jsAxios.get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`).then(res=>{
            console.log(res);
            setComments(res.data)
        })
    }, [])
    return (
        <>
            <h1 className="bg-dark w-100 text-center m-0 pt-4 pb-5">کامنت ها</h1>
            {comments.length ? (
                <div className="col-12 table-responsive-md mb-2">
                    <table className="table table-dark table-hover text-end w700">
                        <thead>
                            <tr>
                                <th scope="col">مدیریت</th>
                                <th scope="col">متن</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col">نام</th>
                                <th scope="col">نشانه پست</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map(comment => (

                                <tr key={comment.id}>
                                    <td>
                                        <i  className="pointer-corsur fa fa-trash-o hover-white"></i>
                                    </td>
                                    <td>{comment.body}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.name}</td>
                                    <td>{comment.postId}</td>
                                    <th>{comment.id}</th>
                                </tr>


                            ))}
                        </tbody>
                    </table>
                </div>

            ) : (
                <p className="h2 m-2 mt-5 bg-dark p-3 rounded-3 text-center ">
                    <div className="spinner-border text-muted"></div>
                </p>

            )}
        </>
    )
}
export default alerts(CommentModal)