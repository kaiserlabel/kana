import React from "react";
import { Anchor, Text, Title, Tooltip } from "@mantine/core";
import TitledCard from "./TitledCard";
import { tooltipProps } from "../utilities/tooltip";

function IntroductionCard() {
  const bold = (text: string) => (
    <Text span italic weight="bold">
      {text}
    </Text>
  );

  return (
    <TitledCard title="Sobre" collapsible>
      <Text>
        Esta é a versão adaptada para português brasileiro do <Anchor href="https://vedxyz.github.io/kana/">aplicativo criado por vedxyz</Anchor>. Se você tem domínio do inglês, utilize este aplicativo por lá.
      </Text>
      <Text  mt="sm">
        Caso você nunca tenha aprendido o hiragana e/ou o katakana, recomenda-se que siga pela opção &quot;Aprendizado estruturado&quot; abaixo. Se quer treinar, as outras duas opções são mais indicadas.
      </Text>
      <Title order={4} mt="sm">
        Como usar
      </Title>
      <Text>
        O uso prático deste aplicativo de aprendizado e memorização de Kana é bem simples: após selecionar o modo de uso abaixo, um kana (ou uma palavra dependendo do modo) aparecerá e você deve digitar o som do mesmo
        em nosso alfabeto, utilizando a caixa de texto &quot;romaji&quot;. Se estiver correto, um novo kana (ou palavra) aparecerá na sequência. Se estiver errado, você tenta novamente até acertar.
      </Text>
    </TitledCard>
  );
}

export default IntroductionCard;
