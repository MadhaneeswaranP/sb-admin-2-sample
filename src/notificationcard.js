import React from "react";

function NotificationCard(props) {
    return (
        <>
            <div class="col-xl-3 col-md-6 mb-4 notification-card" onClick={()=> alert(props.data.cardTitle +" : "+props.data.value)}>
                <div class={`card shadow h-100 py-2 ${props.data.color}`}>
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class={`text-xs font-weight-bold ${props.data.textColor} text-uppercase mb-1`}>
                                    {props.data.cardTitle}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{props.data.currency}{props.data.value}</div>
                            </div>
                            <div class="col-auto">
                                <i class={`fas ${props.data.icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationCard;