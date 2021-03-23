import React from 'react';
import NotificationCard from './notificationcard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Dashboard() {
    let notificationCard = [
        {
            cardTitle: "Earnings(Monthly)",
            value: 40000,
            currency: "$",
            color: "border-left-primary",
            icon: "fa-calendar",
            textColor:"text-primary",
            isProgress: false
        },
        {
            cardTitle: "Earnings(Annual)",
            value: 215000,
            currency: "$",
            color: "border-left-success",
            icon: "fa-dollar-sign",
            textColor:"text-success",
            isProgress: false
        },
        {
            cardTitle: "Tasks",
            value: 50,
            color: "border-left-info",
            icon: "fa-clipboard-list",
            textColor:"text-info",
            isProgress: true
        },
        {
            cardTitle: "Pending Requests",
            value: 18,
            color: "border-left-warning",
            icon: "fa-comments",
            textColor:"text-warning",
            isProgress: false
        }


    ]
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                {
                    notificationCard.map((item) => {
                        return <NotificationCard data={item}></NotificationCard>
                    })
                }
            </div>

        </>
    )
}

export default Dashboard;