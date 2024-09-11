import { useEffect, useState } from "react"
import { jsAxios } from "../../assets/js/jpaxios"
import { Link } from "react-router-dom"
import alerts from "../../alert/sweatalert"
import axios from "axios"
import { Toast } from "../../assets/js/sweatAlert"

const Post = (props) => {
    const { QuesAlert } = props
    const [post, setUsers] = useState([])
    const [MainPost, setMainUsers] = useState([])
    const deleteHandler = async (userId) => {
        QuesAlert("مطمئنی", "راه برگشت برای پست وجود نداره؟", "warning", true).then(res => {
            if (res.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
                    res => {
                        if (res.status === 200) {
                            let newListUsers = MainPost.filter(u => u.id !== userId)
                            setUsers(newListUsers)
                            setMainUsers(newListUsers)
                            Toast.fire({
                                icon: "success",
                                title: "فایل شما حذف شد"
                            });
                        } else {
                            props.Toast.fire({
                                icon: "error",
                                title: "فایل شما حذف نشد"
                            });
                        }
                    }
                )
            }
        })
    }
    const handleSearch = (id) => {
        if (id === "") {
            setUsers(MainPost)

        } else {

            setUsers(MainPost.filter(c => c.userId == id))
        }
    }
    useEffect(() => {
        const getUser = jsAxios('/posts').then(
            res => {
                setUsers(res.data)
                setMainUsers(res.data)
            }
        ).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h1 className="bg-dark w-100 text-center m-0 pt-4 pb-5">پست ها</h1>
            <div className="w-100 bg-dark p-4 d-flex justify-content-between  flex-row-reverse align-items-center ">
                <div className=" col-10 col-lg-4 ">
                    <input type="number" onChange={(e) => handleSearch(e.target.value)} className="form-control text-end " id="search" placeholder="جستجو کن" />
                </div>
                <Link to='/post/add' ><i className="fa fa-plus-square-o fa-3x text-light"></i></Link>
            </div>

            {MainPost.length ? (
                <div className="col-12 table-responsive-md mb-2">
                    <table className="table table-dark table-hover text-end w700">
                        <thead>
                            <tr>
                                <th scope="col">مدیریت</th>
                                <th scope="col">متن</th>
                                <th scope="col">موضوع</th>
                                <th scope="col">نشانه کاربر</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map(user => (

                                <tr key={user.id}>
                                    <td>
                                        <i onClick={() => deleteHandler(user.id)} className="pointer-corsur fa fa-trash-o hover-white"></i>
                                        <Link to={`/post/add/${user.id}`}>
                                            <i className="fa fa-pencil-square-o mx-2 hover-white text-light "></i>

                                        </Link>
                                        <Link to={`/post/comments/${user.id}`}>
                                            <i class="fa fa-commenting-o mx-2 hover-white text-light " aria-hidden="true"></i>
                                        </Link>

                                    </td>
                                    <td>{user.body}</td>
                                    <td>{user.title}</td>
                                    <td className="pointer-corsur" onClick={() => handleSearch(user.userId)}>{user.userId}</td>
                                    <th>{user.id}</th>
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
export default alerts(Post)