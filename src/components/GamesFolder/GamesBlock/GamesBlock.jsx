import React, { useState } from 'react';
import ZoroForm from "./../../ZoroForm/ZoroForm.jsx";
import jetx from "./../../../assets/img/JetX.jpg";
import football from "./../../../assets/img/FootballX.jpg";
import spinx from "./../../../assets/img/SpinX.jpg";
import capadacia from "./../../../assets/img/Cappadocia.jpg";
import jetx3 from "./../../../assets/img/JetX3.jpg";
import turbomines from "./../../../assets/img/turbomines.jpg";
import limbo from "./../../../assets/img/limbo.jpg";
import keno from "./../../../assets/img/keno.jpg";
import dice from "./../../../assets/img/dice.jpg";
import princese from "./../../../assets/img/princese.jpg";
import stairs from "./../../../assets/img/stairs.jpg";
import neko from "./../../../assets/img/neko.jpg";
import mines from "./../../../assets/img/mines.jpg";
import javelinx from "./../../../assets/img/javelinx.jpg";
import turboplinko from "./../../../assets/img/turboplinko.jpg";
import tiger from "./../../../assets/img/tiger.jpg";
import warewoolf from "./../../../assets/img/warewoolf.jpg";
import tsar from "./../../../assets/img/tsar.jpg";
import forge from "./../../../assets/img/forge.png";
import cowboy from "./../../../assets/img/Cowboy.jpg";
import aztec from "./../../../assets/img/Aztec.jpg";
import samurai from "./../../../assets/img/Samurai.jpg";
import funfruit from "./../../../assets/img/FunFruit.jpg";
import burningice from "./../../../assets/img/BurningIce.jpg";
import hunterX from "./../../../assets/img/hunterX.png";
import helicopter from "./../../../assets/img/helicopter.png";
import crashduel from "./../../../assets/img/crashduel.png";
import emirate from "./../../../assets/img/emirate.jpg";
import taboo from "./../../../assets/img/er-taboo.jpg";
import tank from "./../../../assets/img/tank.jpg";
import AusDemTal from "./../../../assets/img/AusDemTal.jpg";
import TheRiseofAi from "./../../../assets/img/TheRiseofAi.jpg";
import AlmightySpartaDice from "./../../../assets/img/AlmightySpartaDice.jpg";
import Zombies100 from "./../../../assets/img/Zombies100.jpg";
import Cupid from "./../../../assets/img/cupid.jpg";
import water from "./../../../assets/img/watertiger.jpg";


import "./GamesBlock.css";

const GamesData = [
    { id: 1, name: "Jet X", img: jetx, producer: "SmartSoft" },
    { id: 2, name: "Football X", img: football, producer: "Turbo Games" },
    { id: 3, name: "SpinX", img: spinx, producer: "SmartSoft" },
    { id: 4, name: "Cappadocia", img: capadacia, producer: "Turbo Games" },
    { id: 5, name: "Jet X3", img: jetx3, producer: "SmartSoft" },
    { id: 6, name: "Turbo Mines", img: turbomines, producer: "Turbo Games" },
    { id: 7, name: "Limbo Rider", img: limbo, producer: "Turbo Games" },
    { id: 8, name: "Magic Keno", img: keno, producer: "Turbo Games" },
    { id: 9, name: "Dice Twice", img: dice, producer: "Turbo Games" },
    { id: 10, name: "Save the Princess", img: princese, producer: "Turbo Games" },
    { id: 11, name: "stairs", img: stairs, producer: "Turbo Games" },
    { id: 12, name: "Neko", img: neko, producer: "Turbo Games" },
    { id: 13, name: "Mines", img: mines, producer: "SmartSoft" },
    { id: 14, name: "JavelinX", img: javelinx, producer: "SmartSoft" },
    { id: 15, name: "Turbo Plinko", img: turboplinko, producer: "Turbo Games" },
    { id: 16, name: "Fortune Tiger", img: tiger, producer: "Turbo Games" },
    { id: 17, name: "Werewolf's Hunt", img: warewoolf, producer: "Turbo Games" },
    { id: 18, name: "Tsar Treasures", img: tsar, producer: "SmartSoft" },
    { id: 19, name: "Forge of Wealth", img: forge, producer: "SmartSoft" },
    { id: 20, name: "Cowboy", img: cowboy, producer: "Turbo Games" },
    { id: 21, name: "Aztec", img: aztec, producer: "Turbo Games" },
    { id: 22, name: "Samurai", img: samurai, producer: "Turbo Games" },
    { id: 23, name: "FunFruit", img: funfruit, producer: "Turbo Games" },
    { id: 24, name: "Burning Ice", img: burningice, producer: "Turbo Games" },
    { id: 25, name: "HunterX", img: hunterX, producer: "SmartSoft" },
    { id: 26, name: "HelicopterX", img: helicopter, producer: "SmartSoft" },
    { id: 27, name: "Crash Duel X", img: crashduel, producer: "SmartSoft" },
    { id: 28, name: "The Emirate", img: emirate, producer: "SmartSoft" },
    { id: 29, name: "Taboo", img: taboo, producer: "SmartSoft" },
    { id: 30, name: "Cash Tank", img: tank, producer: "Turbo Games" },
    { id: 31, name: "Aus Dem Tal", img: AusDemTal, producer: "Endorphina" },
    { id: 32, name: "The Rise of Ai", img: TheRiseofAi, producer: "Endorphina" },
    { id: 33, name: "Almighty Sparta Dice", img: AlmightySpartaDice, producer: "Endorphina" },
    { id: 34, name: "Zombies 100", img: Zombies100 , producer: "Endorphina" },
    { id: 35, name: "Cupid", img: Cupid , producer: "Endorphina" },
    { id: 36, name: "Water Tiger", img: water , producer: "Endorphina" },

];

const GamesBlock = ({ show }) => {
    const gamesToShow = show === 1 ? GamesData : GamesData.slice(0, 18);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleFormOpen = () => {
        setIsFormVisible(true);
    };

    const handleFormClose = () => {
        setIsFormVisible(false);
    };

    return (
        <>
            {gamesToShow.map(({ id, name, img, producer }) => (
                <div className="block" key={id}>
                    <div
                        className="content"
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "100% !important",
                        }}
                        aria-label={name}
                    >
                        <div className="hover">
                            <div className="title">
                                <p>{producer}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2 hovereffect">
                                <a href="#!" className="d-flex gap-3 m-0 p-0 prostosus" onClick={() => handleFormOpen({ name, producer })}>
                                    <div className="play_now">
                                        <p>שחק על אמת</p>
                                    </div>
                                    <div className="svg">
                                        <PlayIcon />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gamename text-center">
                        <p>{name}</p>
                    </div>
                </div>
            ))}
        
        {isFormVisible && <ZoroForm onClose={handleFormClose}/>}
        </>
    );
};

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
        <g className="icon">
            <path d="M 15.6875 10.636719 C 13.808594 9.527344 11.6875 11.035156 11.6875 13.050781 L 11.6875 20.949219 C 11.6875 22.964844 13.808594 24.472656 15.6875 23.363281 L 22.375 19.414062 C 24.179688 18.351562 24.179688 15.648438 22.375 14.585938 Z M 13.8125 13.050781 C 13.8125 12.769531 13.949219 12.574219 14.109375 12.472656 C 14.265625 12.375 14.4375 12.367188 14.609375 12.464844 L 21.296875 16.414062 C 21.484375 16.527344 21.605469 16.738281 21.605469 17 C 21.605469 17.261719 21.484375 17.472656 21.296875 17.585938 L 14.609375 21.535156 C 14.4375 21.632812 14.265625 21.625 14.109375 21.527344 C 13.949219 21.425781 13.8125 21.230469 13.8125 20.949219 Z M 13.8125 13.050781 "/>
            <path d="M 17 1.769531 C 8.589844 1.769531 1.769531 8.589844 1.769531 17 C 1.769531 25.410156 8.589844 32.230469 17 32.230469 C 25.410156 32.230469 32.230469 25.410156 32.230469 17 C 32.230469 8.589844 25.410156 1.769531 17 1.769531 Z M 3.894531 17 C 3.894531 9.761719 9.761719 3.894531 17 3.894531 C 24.238281 3.894531 30.105469 9.761719 30.105469 17 C 30.105469 24.238281 24.238281 30.105469 17 30.105469 C 9.761719 30.105469 3.894531 24.238281 3.894531 17 Z M 3.894531 17 "/>
        </g>
    </svg>
);

export default GamesBlock;
