import React from "react";
// , icon, showCancelButton, confirmButtonColor, cancelButtonColor, confirmButtonText, cancelButtonText
import Swal from "sweetalert2";
const alerts = (MainComponents) => {
    const Newcomponet = (props) => {
        const QuesAlert = (title, text, icon,showCancelButton) => {
            return Swal.fire({
                title,
                text,
                icon,
                showCancelButton,
                confirmButtonColor: "gray",
                cancelButtonColor: "#d33",
                confirmButtonText: "بله مطمئن هستم",
                cancelButtonText: "لغو"
            })
        }
        return (
            <MainComponents {...props} QuesAlert={QuesAlert} />
        )
    }
    return Newcomponet
}
export default alerts;