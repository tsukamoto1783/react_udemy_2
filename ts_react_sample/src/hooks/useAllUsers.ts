import { useState } from 'react';
import { UserProfile } from '../types/userProfile';
import axios from "axios";
import { UserType } from '../types/api/user';

export const useAllUsers = () => {
    const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const getUsers = () => {
        setLoading(true);
        setError(false);

        axios.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const data = res.data.map((user) => ({
                    id: user.id,
                    name: `${user.name}(${user.username})`,
                    email: user.email,
                    address: `${user.address.city}${user.address.suite}${user.address.street}`,
                }));
                setUserProfile(data);
            }).catch(() => {
                setError(true);

            }).finally(() => {
                setLoading(false);
            });
    };

    return { getUsers, userProfile, loading, error }

};