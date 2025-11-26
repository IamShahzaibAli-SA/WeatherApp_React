import { useEffect, useState } from "react";

function useWeatherInfo(city){
    const [update, setUpdate] = useState(null);

    useEffect(()=>{
        const apiKey = "1035163e744b42001d78406927c365ba";
        const fetchAPI = async () => {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiURL);
            const result = await response.json();
            setUpdate(result[name]);
    
            console.log(result);
            console.log(result.main.temp);
            console.log(result.name);
        }
    
        fetchAPI();
    }, [city]);

    return update;
}

export default useWeatherInfo;