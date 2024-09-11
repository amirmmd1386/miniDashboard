import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "../../assets/js/sweatAlert";
import { jsAxios } from "../../assets/js/jpaxios";
import alerts from "../../alert/sweatalert";
const User = (props) => {
    const { QuesAlert } = props
    const [users, setUsers] = useState([])
    const [Mainusers, setMainUsers] = useState([])
    const deleteHandler = async (userId) => {
        QuesAlert("مطمئنی", "راه برگشت برای کاربر وجود نداره؟", "warning", true).then(res => {
            if (res.isConfirmed) {
                axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
                    res => {
                        if (res.status === 200) {
                            let newListUsers = Mainusers.filter(u => u.id !== userId)
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
    useEffect(() => {
        const getUser = jsAxios('/users').then(
            res => {
                setUsers(res.data)
                setMainUsers(res.data)
            }
        ).catch((err) => console.log(err))
    }, [])
    const handleSearch = (e) => {

        setUsers(Mainusers.filter(c => c.username.toUpperCase().includes(e.target.value.toUpperCase())))
    }
    return (
        <>
            <h1 className="bg-dark w-100 text-center m-0 pt-4 pb-5">مدیریت کاربران</h1>
            <div className="w-100 bg-dark p-4 d-flex justify-content-between  flex-row-reverse align-items-center ">
                <div className=" col-10 col-lg-4 ">
                    <input type="search" onChange={handleSearch} className="form-control text-end " id="search" placeholder="جستجو کن" />
                </div>
                <Link to='/user/add' ><i className="fa fa-plus-square-o fa-3x text-light"></i></Link>
            </div>

            {Mainusers.length ? (
                <div className="col-12 table-responsive-sm mb-2">
                    <table className="table table-dark table-hover text-end" >
                        <thead>
                            <tr>
                                <th scope="col">مدیریت</th>
                                <th scope="col">ایمیل</th>
                                <th scope="col">نام کاربری</th>
                                <th scope="col">نام</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (

                                <tr key={user.id}>
                                    <td>
                                        <i onClick={() => deleteHandler(user.id)} className="fa fa-trash-o hover-white"></i>
                                        <Link to={`user/add/${user.id}`}>
                                            <i className="fa fa-pencil-square-o mx-2 hover-white text-light "></i>
                                        </Link>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
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

export default alerts(User)