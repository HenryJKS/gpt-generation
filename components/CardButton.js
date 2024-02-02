import React from "react";
import { Card, CardGroup, Button } from "semantic-ui-react";

export default ({isWriting, handleClickService, handleClickAngry, handleClickBoost, handleClickThanks, handleClickGentle}) => {
  return (
    <CardGroup style={{marginTop: '2%'}}>
      <Card color="red">
        <Button onClick={handleClickThanks} disabled={isWriting}>Agradecimento</Button>
      </Card>
      <Card color="blue">
        <Button onClick={handleClickService} disabled={isWriting}>Serviço</Button>
      </Card>
      {/* <Card color="pink">
        <Button onClick={handleClickAngry} disabled={isWriting}>Bravo</Button>
      </Card> */}
            <Card color="green">
        <Button onClick={handleClickBoost} disabled={isWriting}>Melhorar Texto</Button>
      </Card>
      <Card color="yellow">
        <Button onClick={handleClickGentle} disabled={isWriting}>Responder Gentil</Button>
      </Card>
    </CardGroup>
  );
};
