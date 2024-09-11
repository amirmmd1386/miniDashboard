import { useEffect, useId, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setPost, updatePost } from '../../assets/js/crud'
import { jsAxios } from "../../assets/js/jpaxios";
const init = {
    postdata: {
        id: '',
        userId: '',
        title: '',
        body: ''
    },
    user: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case "changePost":
            return { ...state, postdata: action.payload }
            break;
        case "setUser":
            return { ...state, user: action.payload }
            break;
        case "inputValue":
            return {
                ...state, postdata: {
                    ...state.postdata,
                    [action.propName]: action.propValue
                }
            }
            break;
        default:
            break;
    }
}

export const Addpost = () => {
    let { userId } = useParams();
    const [post, dispath] = useReducer(reducer, init)
    const handleValue = (e, propName) => {
        dispath({
            type: 'inputValue',
            propName: propName,
            propValue: e.target.value
        })
    }
    const addHandler = (event) => {
        event.preventDefault();
        if (!userId) {
            setPost(post.postdata)
        }
        else {
            updatePost(userId, post.postdata)
        }
    }
    useEffect(() => {
        jsAxios.get('/users').then(res => {
            dispath({
                type: "setUser",
                payload: res.data
            })
        })
        if (userId) {
            jsAxios.get(`/posts/${userId}`).then(res =>
                dispath({
                    type: "changePost",
                    payload: res.data
                })
            )
        }
    }, [])
    if (userId && post.postdata.userid == "") {
        return (
            <p className="h2 m-2 mt-5 bg-dark p-3 rounded-3 text-center ">
                <div className="spinner-border text-muted"></div>
            </p>
        )
    } else {

        return (
            <div className="col-12 d-flex justify-content-center mt-5 ">
                <form action="" className="col-11 col-lg-4 bg-dark p-3 rounded-3 " onSubmit={addHandler} method="get">
                    <h1 className="text-center">{userId ? "ویرایش" : "ثبت"}</h1>
                    <div className=" text-end">
                        <div className="mb-3">
                            <label className="form-label">نام کاربری</label>
                            <select className="form-select text-end" value={post.postdata.userId} onChange={(e) => handleValue(e, 'userId')}>
                                {
                                    post.user.map(c => 
                                        (
                                            <option key={c.id} value={c.id}>{c.username}</option>
                                        )
                                    )
                                }
                            </select>
                        </div>

                    </div>
                    <div className=" text-end">
                        <label className="form-label">شناسه کاربر</label>
                        <input type="text" className="form-control text-end mb-3" id="" value={post.postdata.userId} onChange={(e) => handleValue(e, 'userId')} required />
                    </div>
                    <div className=" text-end">
                        <label className="form-label">موضوع</label>
                        <input type="text" className="form-control text-end mb-3" id="" value={post.postdata.title} onChange={(e) => handleValue(e, 'title')} required />
                    </div>
                    <div className=" text-end">
                        <div className="mb-3">
                            <label className="form-label">متن</label>
                            <textarea className="form-control text-end mb-3" value={post.postdata.body} onChange={(e) => handleValue(e, 'body')} name="" id="" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end gap-2">
                        <Link className="btn btn-outline-danger" to={'/post'}>برگشت</Link>
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

}
