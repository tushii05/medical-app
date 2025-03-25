import { useEffect, useState } from "react";
import { fetchUser } from "../api/auth";

const useSessionTimer = () => {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        let interval;

        const getSessionExpiry = async () => {
            try {
                const res = await fetchUser();
                const expiresAt = res.sessionExpiresAt;

                const updateTime = () => {
                    const remainingTime = expiresAt - Date.now();
                    setTimeLeft(remainingTime > 0 ? remainingTime : 0);
                };

                updateTime();
                interval = setInterval(updateTime, 1000);
            } catch (error) {
                console.error("Error fetching session time", error);
            }
        };

        getSessionExpiry();

        return () => {
            if (interval) clearInterval(interval);
        };
    }, []);

    return timeLeft;
};

export default useSessionTimer;