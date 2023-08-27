import React from "react";
import axios from "axios";

import { useEffect } from "react";

function MainPage(props){
    
    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get('/users');
                console.log("response.data : ", response.data);
            }catch(err) {
                console.log(err);
            }
        };

        getData();
    }, []);
    

    return(
        <div>
            <h1>hello world</h1>
        </div>
    );
}

export default MainPage;