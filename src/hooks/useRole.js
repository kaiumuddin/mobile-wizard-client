import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/AuthProvider";

const useRole = (email) => {
    const user = useContext(AuthContext);
    const [userRole, setUserRole] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            const url = `https://mobile-wizard-server.vercel.app/users/${user?.email}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log("recieved", data);
                    setUserRole(data.role);
                    setIsUserLoading(false);
                });
        }
    }, [user?.email]);
    return [userRole, isUserLoading];

};

export default useRole;