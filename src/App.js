import React, { useEffect, useState } from 'react'

const App = () => {
  const [search, setSearch] = useState("Punjab");
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState('null');
  const [desp, setDesp] = useState('null');
  // const [iconfound, setIconfound] = useState('null');
  const fetchAPI = async () => {
    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=`;
      const data = await fetch(api);
      const con = await data.json();
      setCity(con.main);
      console.log(con.weather[0]);
      // console.log();
      setIcon(con.weather[0].icon);
      setDesp(con.weather[0].description);
      // console.log(con);
      // const iconmain=con;
      // const api2 = `https://crossorigin.me/https://openweathermap.org/img/wn/${icon}@2x.png`;
      // setIconfound(imgUrl);
      // console.log(con2);

    }
    catch (e) {
      // alert("Error");
      console.log(e);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, [search], [icon])
  return (
    <>
      <div className='outer_div'>
        <div className='web_div'>
          <div className='head'>
            <h1>City Weather</h1>
            <input type='text' className='input_city' placeholder='Search..' onChange={(e) => setSearch(e.target.value)} />
          </div>

          {
            !city ? (<h1>No City Found 😕</h1>) : (
              <>
                <h1>{search}</h1>
                <h2>Max Temp:{city.temp_min} | Min Temp: {city.temp_max}</h2>
                <h2 style={{
                  color: '#f30590',
                  fontSize: 'xx-large',
                  textShadow: '2px 2px 4px rgba(243, 5, 144, 0.7)',
                }}>{desp}</h2>
                <img className="img_animation" src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt='image' />
              </>)
          }

        </div>
      </div>


    </>
  )
}

export default App;

