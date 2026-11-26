# NANN — Especificação consolidada do projeto

## Identidade
- Marca da plataforma: **NANN**.
- Personagem/assistente: **Nann** (masculino).
- Direção visual: preto e marrom escuro, laranja/âmbar, branco/creme, iluminação quente e atmosfera urbana/musical.
- Não recriar nem substituir o avatar original do Nann. Usar o arquivo original aprovado pelo responsável quando ele estiver disponível.

## Experiência da plataforma
- Página inicial com lançamentos em destaque, biblioteca musical, player, votações e comunidade.
- Visitantes podem explorar conteúdo; recursos de participação podem exigir conta.
- Cada lançamento pode ter áudio e vídeo opcional. Sem vídeo, exibir a capa.
- Links externos priorizados: Spotify, YouTube/YouTube Music e Instagram.
- Comunidade com publicações, comentários, reações e moderação.
- Painel do artista para cadastrar faixas, capas, áudio, vídeo, descrições, letras, votações e conteúdo da comunidade.

## Assistente Nann
O Nann deve ser um personagem conversacional integrado à experiência musical, não apenas um FAQ.

### Conhecimento por faixa
No painel de cada música, permitir cadastrar:
- História e conceito da música.
- Processo de composição e produção.
- Significado de versos e metáforas.
- Curiosidades, inspirações e referências.
- Participações e bastidores.
- Informações autorizadas para divulgação e informações reservadas.

A IA deve usar o conteúdo autorizado como fonte factual. Não pode inventar fatos, bastidores, declarações ou intenções do artista. Quando oferecer interpretação própria, deve identificá-la como interpretação.

### Perguntas sugeridas
- Exibir perguntas clicáveis na página de cada música.
- Modelo híbrido: a IA pode sugerir perguntas com base no conteúdo cadastrado e o artista também pode criar as próprias.
- O artista pode editar, excluir, ativar/desativar e ordenar as perguntas de cada faixa.
- Exemplos: “Como essa música foi criada?”, “Qual foi a inspiração?”, “Tem alguma história por trás dela?”, “O que significa esse trecho?” e “Como foi a gravação?”.

### Personalidade e tom
- O Nann fala de forma simples, direta, natural e respeitosa.
- Deve ser engraçado, com humor pontual e comentários espertos, sem piadas forçadas nem brincadeira constante.
- Pode brincar e zoar levemente a própria música quando apropriado.
- Deve tratar o artista como seu patrão, de forma natural. Exemplo: “Se o patrão não me contou, não vou inventar. Mas posso dar minha interpretação.”
- Quando não souber um fato, deve admitir que não tem essa informação e pode continuar a conversa com humor leve, sem apresentar suposição como verdade.
- O painel deve permitir ajustar intensidade do humor, liberdade de conversa, permissão para brincar com a música e assuntos proibidos. As regras de veracidade e segurança não podem ser desligadas.

### Interface de conversa
- Botão contextual: “Converse com o Nann sobre esta música”.
- Mostrar sugestões de perguntas clicáveis.
- Permitir conversa livre além das perguntas sugeridas.
- O contexto da faixa deve acompanhar a conversa para evitar respostas genéricas.

## Requisitos técnicos para produção
A versão de produção precisa de backend seguro, autenticação, banco de dados e armazenamento persistente de mídia. A IA deve ser chamada pelo servidor (ou função segura), nunca expondo chave de API no navegador. Implementar controle de acesso por perfil, moderação, limites de uso, proteção contra abuso e registro das configurações por faixa.

## Estado do pacote incluído
Os arquivos `index.html`, `style.css` e `app.js` são um protótipo estático inicial. Uploads, votos, publicações e chat ainda são demonstrações locais; não há autenticação, banco de dados, armazenamento persistente nem IA conectada. Esta especificação consolida os requisitos aprovados para a próxima implementação. O avatar original ainda precisa ser fornecido/integrado como arquivo de mídia aprovado.
