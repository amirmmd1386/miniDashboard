import axios from "axios";
import { useEffect, useId } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Toast } from "../../assets/js/sweatAlert";
import {updateUser,setUser} from '../../assets/js/crud'
import { jsAxios } from "../../assets/js/jpaxios";
export const Add = () => {
    let { userId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: ""
    })
 

    const addHandler = (event) => {
        event.preventDefault();
        if (!userId) {
            setUser(data)
        }
        else {
            updateUser(userId,data)
        }
    }
    useEffect(() => {
        if (userId) {
            jsAxios.get(`/users/${userId}`).then(res =>
                setData({
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email
                })
            )
        }
    }, [])
    return (
        <div className="col-12 d-flex justify-content-center mt-5 ">
            <form action="" className="col-11 col-lg-4 bg-dark p-3 rounded-3 " onSubmit={addHandler} method="get">
                <h1 className="text-center">{userId ? "ویرایش" : "ثبت"}</h1>
                <div className=" text-end">
                    <label className="form-label">نام</label>
                    <input type="text" className="form-control text-end mb-3" id="" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                </div>
                <div className=" text-end">
                    <label className="form-label">نام کاربری</label>
                    <input type="text" className="form-control text-end mb-3" id="" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} required />
                </div>
                <div className=" text-end">
                    <label className="form-label">ایمیل</label>
                    <input type="email" className="form-control text-end mb-3" id="" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
                </div>
                <div className="col-12 d-flex justify-content-end gap-2">
                    <Link className="btn btn-outline-danger" to={'/user'}>برگشت</Link>
                    {/* <button  onClick={() => navigate(-1)}>برگشت</button> */}
                    <button
                        type="submit"
                        className="btn btn-outline-success "
                    >
                        {userId ? "ویرایش" : "ثبت"}
                    </button>

                </div>

            </form>
        </div>
    )
}
