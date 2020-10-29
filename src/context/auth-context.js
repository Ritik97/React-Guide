import React from 'react';

const authContext = React.createContext({
    authenticated: null,
    login: () => { }
});


export default authContext;