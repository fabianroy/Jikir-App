import { useState } from "react";
import { IoIosInfinite } from "react-icons/io";

const Home = () => {

    const [count, setCount] = useState(0);

    var audio = new Audio('/src/assets/pause.wav');

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleClick7 = () => {
        setCount(count + 1);
        if (count == 7) {
            audio.play();
            setCount(7);
        }
    }

    const handleClick33 = () => {
        setCount(count + 1);
        if (count == 33) {
            audio.play();
            setCount(33);
        }
    }
    
    const handleClick100 = () => {
        setCount(count + 1);
        if (count == 100) {
            audio.play();
            setCount(100);
        }
    }

    const handleReset = () => {
        setCount(0);
    }


    return (
        <div className="w-2/4 mx-auto flex flex-col items-center mt-20">
            <h2 className="text-4xl text-center mb-10 font-semibold">Tasbih</h2>
            <div className="w-60 h-60 rounded-full bg-green-600 flex justify-center items-center">
                <p className="text-7xl text-white font-bold">{count}</p>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-2 md:gap-8">
                <button className="btn bg-green-600 text-white text-2xl" onClick={handleClick}><IoIosInfinite/></button>
                <button className="btn bg-green-600 text-white text-xl" onClick={handleClick7}>7</button>
                <button className="btn bg-green-600 text-white text-xl" onClick={handleClick33}>33</button>
                <button className="btn bg-green-600 text-white text-xl" onClick={handleClick100}>100</button>
                <button className="btn bg-orange-600 text-white text-xl" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Home;
