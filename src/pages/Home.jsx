import React,{ useState,useEffect,useRef } from 'react';
import '../style/home.scss'

const Home = () => {
    const [weather, setWeather] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());
    const canvasRef = useRef(null);
    let animationFrameId;

    const API_Key = 'ee6f378df5a56bb6db3498e0d3e4a5e6';
    const city = 'seoul'
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`

    useEffect(()=>{
        fetch(weatherAPI)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('오류발생', error));

        const timer = setInterval(()=>{
            setDateTime(new Date());
        },1000)
        return() => clearInterval(timer);
    },[weatherAPI])

    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) {
            console.error("🚨 canvasRef가 null입니다!");
            return;
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
            console.error("🚨 캔버스 getContext('2d')를 가져오지 못했습니다!");
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const getSeason = (month) => {
            if(month>=3 && month <=5) return 'spring';
            if(month>=6 && month <=8) return 'summer';
            if(month>=9 && month <=11) return 'autumn';
            return 'winter';
        }

        const season = getSeason(dateTime.getMonth()+1);
        let particles = []
        let particleCount =50;

        const images ={
            spring: '/spring.png' ,
            summer: '/summer.png',
            autumn: '/autumn.png',
            winter: '/winter.png'
        }

        const particleImage = new Image();
        particleImage.src = images[season];

        particleImage.onload = () => {
            console.log(`✅ ${season} 이미지가 로드되었습니다.`);
            initParticles();
            animate();
        }

        particleImage.onerror = () => {
            console.error(`🚨 ${season} 이미지 로드 실패! 파일 경로를 확인하세요.`);
        };

        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 20 + 40;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 + 1;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 -1;
            }
            update(){
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if(this.y > canvas.height){
                    this.y = -this.size;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw(){
                ctx.save();
                ctx.globalCompositeOperation = 'source-over';
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.drawImage(particleImage, -this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }
        const initParticles = () => {
            particles = [];
            for(let i=0; i < particleCount; i++){
                particles.push(new Particle());
            }
        }
        const animate = () =>{
            ctx.clearRect(0,0,canvas.width,canvas.height);
            particles.forEach((particle)=>{
                particle.update();
                particle.draw();
            })
            animationFrameId = requestAnimationFrame(animate);
        }

        return() => {
            cancelAnimationFrame(animate);
        }
    },[dateTime.getMonth()]);




 return (
    <div className='home'>
        <div className='outBox'>
            <div className='imgBox'></div>
            <canvas ref={canvasRef}></canvas>
        </div>
        <div className='weatherBox'>
            <h1> {dateTime.toLocaleDateString()}</h1>
            <h3> {dateTime.toLocaleTimeString()}</h3>
            {
                weather ? (
                    <div>
                        <p>도시 : {weather.name}</p>
                        <p>온도 : {weather.main.temp}도</p>
                        <p>습도 : {weather.main.humidity}%</p>
                    </div>
             ): (<p>날씨 정보를 불러오는 중...</p> )
            }
        </div>
    </div>
  )
}

export default Home