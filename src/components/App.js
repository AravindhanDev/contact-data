import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import axios from "axios"

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60c9fdff6e43e4d42641d9eb"

const App = () => {
    const [contacts, setContacts] = useState({ data: [] })
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`${BASE_URL}/user?limit=10`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setContacts(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    return ( <div >
        <Header />
        <List loading = {loading} contacts = {contacts}/>
        <Footer / >
        </div>
    );
};

export default App;


// App ID 60c9fdff6e43e4d42641d9eb
