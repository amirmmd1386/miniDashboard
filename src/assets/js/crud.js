import axios from "axios"
import { Toast } from "./sweatAlert"
import { jsAxios } from "../../assets/js/jpaxios";
import Swal from "sweetalert2";

export const setUser = async (data) => {
    const set = await jsAxios.post('/users', data).then(res => {
        if (res.status == 201) {
            Toast.fire(
                {
                    icon: 'success',
                    text: `ثبت کاربر انجام شد`
                }
            )
        }
    }).catch(err => Toast.fire({
        icon: 'error',
        text: '!!!!!!خطا'
    }))
}
export const updateUser = async (userId, data) => {
    const update = await jsAxios.put(`/users/${userId}`, data).then(res => {
        console.log(res.status);
        if (res.status == 200) {
            Toast.fire(
                {
                    icon: 'success',
                    text: `ویرایش کاربر انجام شد`
                }
            )
        }
    }).catch(err => Toast.fire({
        icon: 'error',
        text: '!!!!!!خطا'
    }))
}



