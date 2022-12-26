import React from "react";
import './style.css';
import {Alert, AlertTitle} from "@mui/material";

const NotFoundPage = () => {
    return (
        <div>
            <div className="not-found">
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Проверьте правильность запроса:  <strong>такой страницы не существует!</strong>
                </Alert>
            </div>
        </div>
    )
}

export default NotFoundPage;