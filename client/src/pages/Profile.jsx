import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { getUsers } from '../api/index';
import { PodcastCard } from '../components/PodcastCard.jsx';

const Profile = () => {
    const [user, setUser] = useState(null);
    const { currentUser } = useSelector(state => state.user);
    const [name, setName] = useState("");

    const token = localStorage.getItem("podstreamtoken");
    
    const getUser = async () => {
        try {
            const res = await getUsers(token);
            setUser(res.data);
            setName(res.data.name);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            getUser();
        }
    }, [currentUser]);

    return (
        <div style={{ padding: "20px 30px", paddingBottom: "200px", height: "100%", overflowY: "scroll", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "120px", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ paddingLeft: "3rem", "@media (max-width: 768px)": { paddingLeft: "0rem" } }}>
                    <Avatar sx={{ height: 165, width: 165, fontSize: '24px' }} src={user?.img}>{user?.name.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color: "#000", fontSize: "34px", fontWeight: 500 }}>{name}</div>
                    <div style={{ color: "#2b6fc2", fontSize: "14px", fontWeight: 400 }}>Email: {user?.email}</div>
                </div>
            </div>

            {currentUser && user?.podcasts.length > 0 && (
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px 30px" }}>
                    <div style={{ color: "#000", fontSize: "24px", fontWeight: 540, display: "flex", justifyContent: "space-between", alignItems: "center" }}>Your Uploads</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", padding: "18px 6px", justifyContent: "center" }}>
                        {user?.podcasts.map((podcast) => (
                            <PodcastCard podcast={podcast} user={user} key={podcast.id} />
                        ))}
                    </div>
                </div>
            )}

            {currentUser && user?.podcasts.length === 0 && (
                <div style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px 30px" }}>
                    <div style={{ color: "#000", fontSize: "24px", fontWeight: 540, display: "flex", justifyContent: "space-between", alignItems: "center" }}>Your Uploads</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 0" }}>
                        <button style={{ fontSize: "14px", cursor: "pointer", textDecoration: "none", color: "#2b6fc2", border: "1px solid #2b6fc2", borderRadius: "12px", width: "100%", maxWidth: "70px", padding: "8px 10px", textAlign: "center" }}>Upload</button>
                    </div>
                </div>
            )}

            <div style={{ backgroundColor: "#f5f5f5", borderRadius: "10px", padding: "20px 30px" }}>
                <div style={{ color: "#000", fontSize: "24px", fontWeight: 540, display: "flex", justifyContent: "space-between", alignItems: "center" }}>Your Favourites</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", padding: "18px 6px", justifyContent: "center" }}>
                    {user && user?.favorits.map((podcast) => (
                        <PodcastCard podcast={podcast} user={user} key={podcast.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;