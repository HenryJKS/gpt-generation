    import React, { useState } from 'react';
    import { TextArea, Form, Container, Button } from 'semantic-ui-react';
    import 'bootstrap/dist/css/bootstrap.min.css';

    function MyComponent() {
        const [textAreaValue, setTextAreaValue] = useState('');
        const [isWriting, setIsWriting] = useState(false);

        const handleChange = (event) => {
            setTextAreaValue(event.target.value);
        };

        const handleClickEducation = async () => {
            setIsWriting(true);
            const response = await fetch('/api/completion/prompt_education', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: textAreaValue }),
            });
            const data = await response.json();
            console.log(data.message);
        
            const messageChars = data.message.split('');
        
            messageChars.forEach((char, index) => {
                setTimeout(() => {
                    setTextAreaValue(prevValue => prevValue + char);
                    if(index === messageChars.length - 1) {
                        setIsWriting(false);
                    }
                }, index * 20);
            });
        };
        

        const handleClickAngry = async () => {
            setIsWriting(true);
            const response = await fetch('/api/completion/prompt_angry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: textAreaValue }),
            });
            const data = await response.json();
            console.log(data.message);
            
            const messageChars = data.message.split('');

            messageChars.forEach((char, index) => {
                setTimeout(() => {
                    setTextAreaValue(prevValue => prevValue + char);
                    if(index === messageChars.length - 1) {
                        setIsWriting(false);
                    }
                }, index * 20);
            });
        };

        const handleClickBoost = async () => {
            setIsWriting(true);
            const response = await fetch('/api/completion/prompt_boost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: textAreaValue }),
            });
            const data = await response.json();
            console.log(data.message);

            setTextAreaValue('');
            
            const messageChars = data.message.split('');

            messageChars.forEach((char, index) => {
                setTimeout(() => {
                    setTextAreaValue(prevValue => prevValue + char);
                    if(index === messageChars.length - 1) {
                        setIsWriting(false);
                    }
                }, index * 20);
            });
        }

        const handleClickThanks = async () => {
            setIsWriting(true);
            const response = await fetch('/api/completion/prompt_thanks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: textAreaValue }),
            })
            const data = await response.json();
            console.log(data.message);

            setTextAreaValue('');
            
            const messageChars = data.message.split('');

            messageChars.forEach((char, index) => {
                setTimeout(() => {
                    setTextAreaValue(prevValue => prevValue + char);
                    if(index === messageChars.length - 1) {
                        setIsWriting(false);
                    }
                }, index * 20);
            });
        }

        return (
            <div className="vh-100"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >   
                <h1 style={{ color: "white", fontSize: "2.0em", fontWeight: "bold", marginBottom: "2%", textAlign: "center"}}>Customer Service Writing Assistant</h1>
                <div>
                    <TextArea
                        placeholder='Escreva algo...'
                        rows={4}
                        style={{ width: "100%", padding: "1%", borderRadius: "5px", marginBottom: "1%", 
                        backgroundColor: "rgba(255, 255, 255, 0.35)", color: "black", fontSize: "1.0em", 
                        fontWeight: "bold", boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", border: "auto", maxHeight: "200px",
                        }}
                        value={textAreaValue}
                        onChange={handleChange}
                        readOnly={isWriting}
                    />
                    <div>
                        <Button onClick={handleClickEducation} disabled={isWriting}>Completar a frase educadamente</Button>
                        <Button onClick={handleClickAngry} disabled={isWriting}>Complete a frase agressivamente</Button>
                        <Button onClick={handleClickBoost} disabled={isWriting}>Aprimorar frase</Button>
                        <Button onClick={handleClickThanks} disabled={isWriting}>Agradecer</Button>
                    </div>
                </div>
            </div>
        );
        
    }   

    export default MyComponent;
