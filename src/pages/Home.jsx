import myPhoto from '../assents/myphoto.jpg';

function Home() {
    return (
        <div>
            <h1>Головна сторінка</h1>
            <p>Ласкаво просимо на мій сайт!</p>
            <img
                src={myPhoto}
                alt="Моє фото"
                style={{ width: '300px', borderRadius: '8px', margin: '20px' }}
            />
            <p> Мене звати Половнєва Альона, працюю менеджером з продажів в інтернет-магзині.</p>
            <p>Навчаюсь в комп'ютерній школі "Hillel", Frontend-розробник-початківець.</p>
            <p>
                Запрошую ознайомитись з розділами сайту.
            </p>
        </div>
    );
}

export default Home;