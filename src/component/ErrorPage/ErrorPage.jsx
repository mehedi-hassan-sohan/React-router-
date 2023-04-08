import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const {error, status } =useRouteError
    return (
        <div>
            <h1>Error 404 {status|| "400"}</h1>
            <H1>{error?.message }</H1>
        </div>
    );
};

export default ErrorPage;