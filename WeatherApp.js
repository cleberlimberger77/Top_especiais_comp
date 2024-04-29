import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import axios from 'axios';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a218d8c03ca1bad2764b8c23ca411f8
            `);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Não foi possível verificar sua cidade selecionada:', error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Digite o nome da cidade:"
                value={city}
                onChangeText={text => setCity(text)}
            />
            <Button
                title="Pegando o Weather"
                onPress={fetchWeatherData}
            />
            {weatherData && (
                <View>
                    <Text>Temperature: {weatherData.main.temp}</Text>
                    <Text>Description: {weatherData.weather[0].description}</Text>
                    <Image
                        source={{
                            uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
                        }}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            )}
        </View>
    );
};

export default WeatherApp;