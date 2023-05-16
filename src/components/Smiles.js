import { useState } from "react";

export default function Smiles () {
    const [smile1, setSmile1] = useState(0);
    const [smile2, setSmile2] = useState(0);
    const [smile3, setSmile3] = useState(0);
    const [smile4, setSmile4] = useState(0);
    const [smile5, setSmile5] = useState(0);
    const [result, setResult] = useState(null);

    const countSmiles = (e) => {
        switch (e.target.id) {
            case 'smile1': setSmile1(smile1 + 1);
                break;
            case 'smile2': setSmile2(smile2 + 1);
                break;
            case 'smile3': setSmile3(smile3 + 1);
                break;
            case 'smile4': setSmile4(smile4 + 1);
                break;
            case 'smile5': setSmile5(smile5 + 1);
                break;
            default: break;
        };
    };

    const showResult = () => {
        const arr = [smile1, smile2, smile3, smile4, smile5];
        let maxNum = smile1;
        let maxNumInd = 0;
        arr.map((el, index) => {
            if(el > maxNum) {
                maxNum = el;
                maxNumInd = index;
            };
        });
        switch (maxNumInd) {
            case 0: setResult('\u{1F604}');
                break;
            case 1: setResult('\u{1F923}');
                break;
            case 2: setResult('\u{1F970}');
                break;
            case 3: setResult('\u{1F60E}');
                break;
            case 4: setResult('\u{1F4A9}');
                break;
            default: break;
        };
    };

    return (
        <div className="smiles">
            <ul className="smiles__list" onClick={countSmiles}>
                <li className="smiles__item" id="smile1">&#x1F604;<span> - {smile1} </span></li>
                <li className="smiles__item" id="smile2">&#x1F923;<span> - {smile2} </span></li>
                <li className="smiles__item" id="smile3">&#x1F970;<span> - {smile3} </span></li>
                <li className="smiles__item" id="smile4">&#x1F60E;<span> - {smile4} </span></li>
                <li className="smiles__item" id="smile5">&#x1F4A9;<span> - {smile5} </span></li>
            </ul>
            <button className="smiles__button" onClick={showResult}>Show Results</button>
            {result && <p className="smiles__result">Result: {result}</p>}
        </div>
    );
};