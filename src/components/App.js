import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
    // write your code here
    var timer;
    const [inputTime, setInputTime] = useState(0);
    const countDownTimer = (e) => {
        if (e.which === 13) {
            clearInterval(timer);
            setInputTime(0);
            let input = Math.floor(document.getElementById("timeCount").value);
            if (input === "0" || input === "" || input <= 0 || typeof input != "number") return;
            input = Number(input);
            // console.log("insude function");
            setInputTime(input);
            timer = setInterval(() => {
                console.log("timeron");
                setInputTime((prev) => prev - 1);
            }, 1000);
        }
    };
    useEffect(() => {
        if (inputTime <= 0) {
            clearInterval(timer);
            setInputTime(0);
        }
    }, [inputTime]);

    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="wrapper">
            <div id="whole-center">
                <h1>
                    Reverse countdown for
                    <input
                        id="timeCount"
                        onKeyDown={(e) => {
                            countDownTimer(e);
                        }}
                    />{" "}
                    sec.
                </h1>
            </div>
            <div id="current-time">{/* remaining time */ inputTime}</div>
        </div>
    );
};

export default App;
