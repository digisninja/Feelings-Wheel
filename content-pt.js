// Brazilian Portuguese for the feelings wheel. Loaded after content.js:
// it adds Portuguese as the third language to every entry there.

const PT_NAMES = {
  Happy: 'Feliz', Playful: 'Brincalhão', Aroused: 'Excitado', Cheeky: 'Atrevido',
  Content: 'Satisfeito', Free: 'Livre', Joyful: 'Alegre',
  Interested: 'Interessado', Curious: 'Curioso', Inquisitive: 'Investigativo',
  Proud: 'Orgulhoso', Successful: 'Bem-sucedido', Confident: 'Confiante',
  Accepted: 'Aceito', Respected: 'Respeitado', Valued: 'Valorizado',
  Powerful: 'Poderoso', Courageous: 'Corajoso', Creative: 'Criativo',
  Peaceful: 'Em paz', Loving: 'Amoroso', Thankful: 'Grato',
  Trusting: 'Confiando', Sensitive: 'Sensível', Intimate: 'Íntimo',
  Optimistic: 'Otimista', Hopeful: 'Esperançoso', Inspired: 'Inspirado',

  Surprised: 'Surpreso', Startled: 'Sobressaltado', Shocked: 'Chocado', Dismayed: 'Consternado',
  Confused: 'Confuso', Disillusioned: 'Desiludido', Perplexed: 'Perplexo',
  Amazed: 'Maravilhado', Astonished: 'Atônito', Awe: 'Admirado',
  Excited: 'Animado', Eager: 'Entusiasmado', Energetic: 'Enérgico',

  Bad: 'Mal', Bored: 'Entediado', Indifferent: 'Indiferente', Apathetic: 'Apático',
  Busy: 'Ocupado', Pressured: 'Pressionado', Rushed: 'Apressado',
  Stressed: 'Estressado', Overwhelmed: 'Sobrecarregado', 'Out of control': 'Fora de controle',
  Tired: 'Cansado', Sleepy: 'Sonolento', Unfocused: 'Disperso',

  Fearful: 'Com medo', Scared: 'Assustado', Helpless: 'Desamparado', Frightened: 'Apavorado',
  Anxious: 'Ansioso', Worried: 'Preocupado',
  Insecure: 'Inseguro', Inadequate: 'Inadequado', Inferior: 'Inferior',
  Weak: 'Fraco', Worthless: 'Sem valor', Insignificant: 'Insignificante',
  Rejected: 'Rejeitado', Excluded: 'Excluído', Persecuted: 'Perseguido',
  Threatened: 'Ameaçado', Nervous: 'Nervoso', Exposed: 'Exposto',

  Angry: 'Com raiva', 'Let down': 'Decepcionado', Betrayed: 'Traído', Resentful: 'Ressentido',
  Humiliated: 'Humilhado', Disrespected: 'Desrespeitado', Ridiculed: 'Ridicularizado',
  Bitter: 'Amargurado', Indignant: 'Indignado', Violated: 'Violado',
  Mad: 'Bravo', Furious: 'Furioso', Jealous: 'Ciumento',
  Aggressive: 'Agressivo', Provoked: 'Provocado', Hostile: 'Hostil',
  Frustrated: 'Frustrado', Infuriated: 'Enfurecido', Annoyed: 'Irritado',
  Distant: 'Distante', Withdrawn: 'Retraído', Numb: 'Anestesiado',
  Critical: 'Crítico', Skeptical: 'Cético', Dismissive: 'Desdenhoso',

  Disgusted: 'Enojado', Disapproving: 'Desaprovador', Judgmental: 'Julgador', Embarrassed: 'Envergonhado',
  Disappointed: 'Desapontado', Appalled: 'Estarrecido', Revolted: 'Revoltado',
  Awful: 'Péssimo', Nauseated: 'Nauseado', Detestable: 'Detestável',
  Repelled: 'Repelido', Horrified: 'Horrorizado', Hesitant: 'Hesitante',

  Sad: 'Triste', Lonely: 'Solitário', Isolated: 'Isolado', Abandoned: 'Abandonado',
  Vulnerable: 'Vulnerável', Victimized: 'Vitimizado', Fragile: 'Frágil',
  Despair: 'Desesperado', Grief: 'Luto', Powerless: 'Impotente',
  Guilty: 'Culpado', Ashamed: 'Com vergonha', Remorseful: 'Arrependido',
  Depressed: 'Deprimido', Empty: 'Vazio', Hurt: 'Magoado',
};

const PT_CORE = {
  Happy: {
    mean: 'Uma sensação geral de que as coisas vão bem — prazer, leveza ou conexão.',
    need: 'A felicidade costuma indicar que uma necessidade está sendo atendida: conexão, sentido, diversão ou progresso. Perceber o que está funcionando ajuda você a criar mais disso.',
    body: 'Leveza no peito, ombros relaxados, respiração solta, vontade de sorrir ou se mexer.',
    stay: 'Saboreie: pare por 20 segundos e deixe-se perceber de verdade essa sensação boa. Momentos bons ficam mais marcados quando você se demora neles.',
    dig: 'O que exatamente tornou este momento bom — e como você poderia criar mais momentos assim?',
    shiftIntro: 'Sentimentos bons não precisam ser consertados. Aqui estão formas de levá-lo adiante.',
    shift: [
      'Compartilhe com alguém — dizer em voz alta torna tudo maior.',
      'Anote o que causou isso, para voltar a ler nos dias mais difíceis.',
      'Use a energia: comece algo que você vem adiando.',
      'Agradeça a alguém que ajudou a tornar este momento possível.',
    ],
  },
  Surprised: {
    mean: 'Uma reação a algo inesperado — pode pender para o encanto ou para o alarme.',
    need: 'A surpresa mostra que suas expectativas não bateram com a realidade. Ela pede uma pausa para você atualizar sua visão do que está acontecendo.',
    body: 'Sobrancelhas erguidas, uma inspiração rápida, um choque de alerta, um instante de paralisia.',
    stay: 'Deixe o susto assentar. Respire devagar uma vez antes de decidir se isso é bom, ruim ou nenhum dos dois.',
    dig: 'O que você esperava que acontecesse, e o que essa diferença diz a você?',
    shift: [
      'Busque os fatos: escreva o que realmente aconteceu, separado do que você imagina que significa.',
      'Dê tempo: evite grandes decisões na primeira hora depois de um choque.',
      'Se for algo empolgante, escolha um próximo passo concreto enquanto a energia está alta.',
      'Converse com alguém para entender melhor.',
    ],
  },
  Bad: {
    mean: 'Um estado baixo, esgotado ou fora do eixo — muitas vezes menos uma emoção e mais um sinal de que seus recursos estão acabando.',
    need: 'Geralmente, uma necessidade de descanso, recuperação, foco ou mudança de ritmo.',
    body: 'Peso, cansaço, inquietação, mente enevoada, respiração curta.',
    stay: 'Permita-se estar abaixo dos 100%. Pouca energia é informação, não fracasso.',
    dig: 'O que tem drenado sua energia ultimamente, e o que costuma recarregá-la?',
    shift: [
      'Faça uma recarga básica: água, comida, uma caminhada curta ou 10 minutos de ar fresco.',
      'Encolha a lista: escolha a coisa mais importante de hoje e deixe o resto para depois.',
      'Faça uma pausa de verdade — longe das telas — por pelo menos 15 minutos.',
      'Proteja o sono desta noite: defina um horário para parar de trabalhar.',
    ],
  },
  Fearful: {
    mean: 'Uma resposta a ameaça ou incerteza — sua mente se preparando para algo dar errado.',
    need: 'O medo aponta para uma necessidade de segurança, certeza ou apoio. Ele tenta proteger você, mesmo quando o perigo é incerto.',
    body: 'Coração acelerado, peito apertado, respiração curta, frio na barriga, músculos tensos, dificuldade de ficar parado.',
    stay: 'Diga a si mesmo: “Isto é medo, e ele está tentando me proteger.” Coloque a mão no peito e solte o ar devagar, por mais tempo do que inspira.',
    dig: 'Qual é o pior que você teme que aconteça — e qual a real probabilidade disso?',
    shift: [
      'Ancore-se com o 5-4-3-2-1: nomeie 5 coisas que você vê, 4 que pode tocar, 3 que ouve, 2 cheiros e 1 sabor.',
      'Separe os fatos: escreva “O que sei com certeza?” e “O que estou imaginando?”',
      'Diminua o tamanho: escolha uma pequena ação que você pode fazer na próxima hora.',
      'Procure alguém de confiança e conte do que você tem medo.',
    ],
  },
  Angry: {
    mean: 'Uma onda de energia em resposta a algo que parece injusto, bloqueado ou prejudicial.',
    need: 'A raiva costuma proteger um limite, um valor ou um senso de justiça. Ela também pode encobrir um sentimento mais delicado, como mágoa ou medo.',
    body: 'Calor no rosto, mandíbula ou punhos cerrados, ombros tensos, coração acelerado, vontade de agir.',
    stay: 'Perceba a energia sem agir por ela ainda. Solte o ar devagar e deixe a raiva estar ali — você pode escolher o que fazer com ela depois.',
    dig: 'Que limite ou valor parece ter sido ultrapassado — e o que tornaria isso justo?',
    shift: [
      'Pause antes de responder: espere 20–30 minutos antes de enviar aquela mensagem ou ter aquela conversa.',
      'Libere a energia pelo corpo: uma caminhada rápida, uma corrida ou apertar e soltar os punhos.',
      'Nomeie o limite: complete “O que eu preciso aqui é…” e decida se e como dizer isso.',
      'Olhe por baixo: pergunte-se se há mágoa ou medo escondidos sob a raiva.',
    ],
  },
  Disgusted: {
    mean: 'Uma forte sensação de que algo é errado, ofensivo ou inaceitável — para os seus sentidos ou para os seus valores.',
    need: 'O nojo protege você do que parece nocivo ou contaminante, incluindo comportamentos que entram em choque com seus valores.',
    body: 'Nariz franzido, virar o rosto, garganta apertada, enjoo, vontade de se afastar.',
    stay: 'Reconheça a reação: “Isto vai contra algo que importa para mim.” Permita-se dar um passo atrás, física ou mentalmente.',
    dig: 'Com qual valor ou padrão seu isto entra em choque?',
    shift: [
      'Crie distância: afaste-se da situação, conversa ou feed que está causando isso.',
      'Nomeie o valor: que princípio parece violado? Escreva.',
      'Cheque o julgamento: isto é sobre a ação, ou estou julgando a pessoa inteira?',
      'Faça algo que “limpe”: lave o rosto, mude de ambiente, pegue ar fresco.',
    ],
  },
  Sad: {
    mean: 'Uma resposta a perda, decepção ou desconexão — algo de que você gostava está faltando.',
    need: 'A tristeza costuma apontar para uma necessidade de conforto, conexão ou tempo para viver o luto e deixar ir.',
    body: 'Peito pesado, nó na garganta, vontade de chorar, pouca energia, vontade de se recolher.',
    stay: 'Permita-se sentir. A tristeza tende a passar mais facilmente quando não é empurrada para longe. Enrole-se em algo quentinho e deixe as lágrimas virem, se vierem.',
    dig: 'O que você perdeu, ou do que sente falta, agora?',
    shift: [
      'Procure alguém: mande uma mensagem para uma pessoa que faz você se sentir seguro.',
      'Mova-se com gentileza: uma caminhada lenta ao ar livre, de preferência durante o dia.',
      'Faça uma pequena gentileza para si — uma bebida quente, uma música que você ama, um banho.',
      'Escreva o que você perdeu ou do que sente falta, e o que isso significava para você.',
    ],
  },
};

// [meaning, [situations]]
const PT_MID = {
  Playful: ['Leve e pronto para se divertir; com vontade de brincar, provocar ou fazer graça.', ['Brincando com amigos próximos durante o jantar.', 'Tentando algo bobo só porque é divertido.']],
  Content: ['Satisfeito com como as coisas estão; nada precisa mudar agora.', ['Uma manhã de domingo tranquila, sem nada marcado.', 'Terminar um dia em que tudo foi feito.']],
  Interested: ['Sua atenção é atraída por algo e você quer saber mais.', ['Mergulhar num documentário ou artigo que você não consegue largar.', 'Conhecer alguém cujo trabalho fascina você.']],
  Proud: ['Contente com algo que você fez, ou com algo de que faz parte.', ['Receber um bom retorno sobre um projeto ao qual você se dedicou.', 'Ver alguém que você orientou ter sucesso.']],
  Accepted: ['Sentir que você pertence e é bem-vindo como é.', ['Ser incluído nos planos sem precisar pedir.', 'Compartilhar algo vulnerável e ser recebido com carinho.']],
  Powerful: ['Sentir-se capaz, forte e com poder de fazer as coisas acontecerem.', ['Defender-se numa conversa difícil.', 'Terminar um treino ou desafio puxado.']],
  Peaceful: ['Calmo e assentado por dentro; em paz consigo e com o que está ao redor.', ['Sentado à beira da água, sem precisar estar em lugar nenhum.', 'Resolver um conflito e sentir a tensão ir embora.']],
  Trusting: ['Sentir segurança suficiente para contar com alguém ou se abrir.', ['Deixar um amigo ver você num dia ruim.', 'Entregar uma tarefa importante a um colega em quem você acredita.']],
  Optimistic: ['Esperar coisas boas pela frente; acreditar que vai dar certo.', ['Começar um novo emprego ou uma nova fase.', 'Ver os primeiros sinais de que seu esforço está dando resultado.']],

  Startled: ['Um sobressalto repentino com algo inesperado, antes de você entender o que significa.', ['Um barulho alto, ou alguém surgindo atrás de você.', 'Uma notícia inesperada no meio de um dia comum.']],
  Confused: ['Sem conseguir entender o que está acontecendo; as coisas não se encaixam.', ['Receber sinais contraditórios de alguém importante para você.', 'Instruções no trabalho que se contradizem.']],
  Amazed: ['Tocado por algo extraordinário — maior ou melhor do que o esperado.', ['Ver uma paisagem de tirar o fôlego pela primeira vez.', 'Ver alguém fazer algo que você achava impossível.']],
  Excited: ['Expectativa cheia de energia por algo bom que está chegando.', ['A noite antes de uma viagem.', 'Receber sinal verde para uma ideia que você ama.']],

  Bored: ['Pouco estimulado; nada parece envolvente ou significativo agora.', ['Tarefas repetitivas sem fim à vista.', 'Uma longa espera sem nada para fazer.']],
  Busy: ['Demandas demais sobre seu tempo e sua atenção ao mesmo tempo.', ['Reuniões seguidas, sem tempo para pensar.', 'Equilibrar prazos do trabalho e necessidades da família.']],
  Stressed: ['Sentir que as demandas são maiores do que você consegue dar conta.', ['Um grande prazo enquanto outra coisa dá errado.', 'Preocupações com dinheiro se acumulando.']],
  Tired: ['Esgotado física ou mentalmente; seu tanque de energia está baixo.', ['Várias noites mal dormidas.', 'O fim de uma semana longa e exigente.']],

  Scared: ['Medo imediato de algo que parece perigoso agora.', ['Ouvir um barulho estranho em casa à noite.', 'Esperar o resultado de um exame médico.']],
  Anxious: ['Preocupação com o que pode acontecer — medo apontado para o futuro.', ['Os dias antes de uma grande apresentação ou entrevista.', 'Não ter resposta de alguém e ficar imaginando o porquê.']],
  Insecure: ['Duvidar de si ou do seu lugar; sem certeza de ser bom o bastante.', ['Comparar-se com os outros nas redes sociais.', 'Entrar num lugar onde todos parecem mais experientes.']],
  Weak: ['Sentir que falta força para lidar com o que está à sua frente.', ['Falhar de novo em algo em que você está se esforçando muito.', 'Não conseguir ajudar alguém que você ama.']],
  Rejected: ['Medo de, ou mágoa por, ser afastado ou não ser escolhido.', ['Não ser convidado quando os outros foram.', 'Uma candidatura de emprego ou um relacionamento que termina em um não.']],
  Threatened: ['Sentir que algo que você valoriza — segurança, status, um relacionamento — está em risco.', ['Rumores de demissões no trabalho.', 'Alguém questionando seu papel ou sua reputação.']],

  'Let down': ['Raiva porque alguém não cumpriu quando você contava com essa pessoa.', ['Um amigo cancela em cima da hora — de novo.', 'Uma promessa no trabalho é quebrada sem aviso.']],
  Humiliated: ['Raiva e vergonha depois de ser diminuído na frente dos outros.', ['Ser corrigido com dureza numa reunião.', 'Um erro privado sendo exposto publicamente.']],
  Bitter: ['Raiva persistente por uma injustiça antiga que não foi resolvida.', ['Alguém levou o crédito pelo seu trabalho meses atrás.', 'Um conflito familiar que nunca foi reparado.']],
  Mad: ['Raiva pura e quente — forte e à flor da pele.', ['Alguém fecha você no trânsito.', 'Ouvir uma mentira na sua cara.']],
  Aggressive: ['Raiva empurrando para o ataque — vontade de revidar ou dominar.', ['Uma discussão que não para de escalar.', 'Sentir-se encurralado e querer atacar primeiro.']],
  Frustrated: ['Raiva por estar impedido de algo que você quer ou precisa.', ['A tecnologia falhar logo antes de um prazo.', 'Explicar-se mais uma vez e ainda não ser entendido.']],
  Distant: ['Raiva que ficou em silêncio — afastar-se em vez de falar.', ['Dar um gelo em alguém depois de uma briga.', 'Desligar-se de uma equipe que vive ignorando você.']],
  Critical: ['Raiva expressa apontando defeitos e julgando.', ['Picotar o trabalho de um colega depois que ele irritou você.', 'Notar tudo o que o parceiro faz de errado.']],

  Disapproving: ['Julgar algo como errado ou inaceitável pelos seus padrões.', ['Ver alguém tratar um garçom com grosseria.', 'Uma decisão no trabalho que vai contra seus valores.']],
  Disappointed: ['Desapontado com um comportamento muito abaixo do que você esperava.', ['Descobrir que alguém que você admirava agiu mal.', 'Uma organização quebrando as próprias promessas.']],
  Awful: ['Uma sensação visceral de que algo é nojento ou profundamente errado.', ['Ver ou sentir o cheiro de algo podre.', 'Ouvir falar de crueldade.']],
  Repelled: ['Uma vontade forte de se afastar de algo ou alguém.', ['Alguém chegando perto demais ou tocando você sem convite.', 'Um conteúdo que você preferia não ter visto.']],

  Lonely: ['Tristeza pela falta de conexão — sentir-se só, mesmo entre pessoas.', ['Mudar para uma cidade nova onde você não conhece ninguém.', 'Um fim de semana em que todos parecem ter planos.']],
  Vulnerable: ['Sentir-se exposto e fácil de ferir, sem a proteção de sempre.', ['Compartilhar algo pessoal e não saber como foi recebido.', 'Passar por uma doença ou uma grande mudança de vida.']],
  Despair: ['Uma perda profunda de esperança; sentir que as coisas não vão melhorar.', ['Uma sequência de reveses sem trégua.', 'Perder alguém ou algo central na sua vida.']],
  Guilty: ['Tristeza por algo que você fez, ou deixou de fazer, que foi contra seus valores.', ['Explodir com alguém que você ama.', 'Quebrar uma promessa feita a um amigo.']],
  Depressed: ['Um humor baixo, pesado e duradouro que drena o interesse e a energia. Se durar semanas, conversar com um profissional pode ajudar muito.', ['Semanas em que nada parece prazeroso.', 'Dias seguidos de dificuldade para sair da cama.']],
  Hurt: ['Dor emocional causada pelas palavras ou ações de alguém.', ['Um comentário descuidado de alguém próximo.', 'Ser deixado de lado pelos amigos.']],
};

const PT_LEAF = {
  'Playful/Aroused': 'Excitado e cheio de energia, muitas vezes com uma faísca física ou romântica — mais intenso que atrevido.',
  'Playful/Cheeky': 'Travessura leve e provocadora — ousadia brincalhona, sem maldade.',
  'Content/Free': 'Sem peso, sem nada segurando você — uma satisfação que parece espaço.',
  'Content/Joyful': 'Felicidade brilhante e borbulhante — com mais energia do que apenas sentir-se livre.',
  'Interested/Curious': 'Vontade de explorar ou descobrir — um interesse aberto e brincalhão.',
  'Interested/Inquisitive': 'Fazer perguntas e cavar mais fundo — curiosidade com foco.',
  'Proud/Successful': 'Orgulho por alcançar uma meta ou um resultado.',
  'Proud/Confident': 'Confiança nas próprias capacidades — orgulho que olha para a frente, não para trás.',
  'Accepted/Respected': 'Sentir que os outros levam você a sério e valorizam sua opinião.',
  'Accepted/Valued': 'Sentir que você importa e que sua contribuição é apreciada — mais caloroso que ser respeitado.',
  'Powerful/Courageous': 'Disposto a encarar algo difícil apesar do medo.',
  'Powerful/Creative': 'Cheio de ideias e de energia para criar algo novo.',
  'Peaceful/Loving': 'Afeto caloroso e cuidado por alguém ou algo.',
  'Peaceful/Thankful': 'Grato pelo que você tem, ou pelo que alguém fez.',
  'Trusting/Sensitive': 'Aberto e sintonizado com os sentimentos dos outros, e atento aos seus.',
  'Trusting/Intimate': 'Uma proximidade profunda em que você pode ser totalmente você com alguém.',
  'Optimistic/Hopeful': 'Acreditar que algo bom é possível, mesmo que não seja certo.',
  'Optimistic/Inspired': 'Movido a agir por algo ou alguém — esperança com energia por trás.',

  'Startled/Shocked': 'Atordoado por algo inesperado e muitas vezes indesejado — um choque mais forte que um sobressalto.',
  'Startled/Dismayed': 'Chocado e desanimado ao mesmo tempo — surpresa misturada com decepção.',
  'Confused/Disillusioned': 'Confuso porque algo em que você acreditava acabou não sendo verdade.',
  'Confused/Perplexed': 'Intrigado e sem conseguir entender algo.',
  'Amazed/Astonished': 'Tão surpreso que é difícil acreditar.',
  'Amazed/Awe': 'Encanto diante de algo vasto ou belo que faz você se sentir pequeno de um jeito bom.',
  'Excited/Eager': 'Ansioso e impaciente para que algo comece.',
  'Excited/Energetic': 'Cheio de energia física e disposição — empolgação no corpo.',

  'Bored/Indifferent': 'Não se importar muito com algo específico, para um lado ou para o outro.',
  'Bored/Apathetic': 'Uma falta mais ampla de interesse ou motivação — quase nada importa. Se durar, vale conversar com alguém.',
  'Busy/Pressured': 'Empurrado por expectativas ou prazos de fora.',
  'Busy/Rushed': 'Sem tempo suficiente — correndo de uma coisa para a outra.',
  'Stressed/Overwhelmed': 'Tanta coisa acontecendo que você não consegue absorver tudo nem acompanhar.',
  'Stressed/Out of control': 'Sentir que perdeu o controle do que está acontecendo — estresse que vira caos.',
  'Tired/Sleepy': 'Seu corpo precisa de descanso ou sono.',
  'Tired/Unfocused': 'Cansaço mental; difícil se concentrar ou pensar com clareza.',

  'Scared/Helpless': 'Com medo, e sentindo que não pode fazer nada a respeito.',
  'Scared/Frightened': 'Medo agudo e intenso no momento.',
  'Anxious/Overwhelmed': 'Ansiedade se acumulando até parecer demais para aguentar.',
  'Anxious/Worried': 'Pensar repetidamente no que pode dar errado.',
  'Insecure/Inadequate': 'Sentir que você não é suficiente para o que estão pedindo.',
  'Insecure/Inferior': 'Sentir-se menos que as outras pessoas — a comparação está no centro.',
  'Weak/Worthless': 'Sentir que você não tem valor. É uma crença dolorosa, não um fato.',
  'Weak/Insignificant': 'Sentir-se sem importância ou invisível, como se você não importasse.',
  'Rejected/Excluded': 'Ser deixado de fora de um grupo ou atividade.',
  'Rejected/Persecuted': 'Sentir-se alvo deliberado ou tratado injustamente ao longo do tempo.',
  'Threatened/Nervous': 'Inquieto e tenso, esperando algo ruim.',
  'Threatened/Exposed': 'Ser visto quando você não quer — desprotegido ou descoberto.',

  'Let down/Betrayed': 'Magoado e com raiva porque alguém em quem você confiava quebrou essa confiança.',
  'Let down/Resentful': 'Raiva contínua por um tratamento injusto — ela cresce quando não é tratada.',
  'Humiliated/Disrespected': 'Sentir que seu valor ou seus limites foram ignorados.',
  'Humiliated/Ridiculed': 'Ser zombado ou motivo de risada.',
  'Bitter/Indignant': 'Raiva diante da injustiça — raiva com a sensação de estar certo.',
  'Bitter/Violated': 'Sentir que algo pessoal — seu corpo, espaço, privacidade ou direitos — foi invadido.',
  'Mad/Furious': 'Raiva intensa e difícil de conter.',
  'Mad/Jealous': 'Raiva misturada com medo de perder alguém ou algo para outra pessoa.',
  'Aggressive/Provoked': 'Sentir que alguém apertou seus botões de propósito.',
  'Aggressive/Hostile': 'Hostil e pronto para brigar — raiva dirigida a uma pessoa.',
  'Frustrated/Infuriated': 'Frustração que ferveu até virar fúria.',
  'Frustrated/Annoyed': 'Irritação leve e repetida — menor, mas persistente.',
  'Distant/Withdrawn': 'Afastar-se das pessoas para se proteger.',
  'Distant/Numb': 'Desligado, como se suas emoções tivessem sido abaixadas ou desligadas.',
  'Critical/Skeptical': 'Duvidar do que dizem a você; ainda sem disposição para acreditar.',
  'Critical/Dismissive': 'Tratar algo ou alguém como indigno da sua atenção.',

  'Disapproving/Judgmental': 'Formar opiniões duras sobre as escolhas ou o caráter dos outros.',
  'Disapproving/Embarrassed': 'Desconforto por alguém, ou por estar associado a essa pessoa.',
  'Disappointed/Appalled': 'Chocado com algo que você considera moralmente errado.',
  'Disappointed/Revolted': 'Nojo forte — não querer nenhuma relação com aquilo.',
  'Awful/Nauseated': 'Literalmente sentir o estômago embrulhado.',
  'Awful/Detestable': 'Algo parece odioso ou totalmente inaceitável.',
  'Repelled/Horrified': 'Choque e nojo diante de algo terrível.',
  'Repelled/Hesitant': 'Segurar-se porque algo parece estranho.',

  'Lonely/Isolated': 'Separado dos outros, seja pelas circunstâncias ou por se afastar.',
  'Lonely/Abandoned': 'Deixado para trás por alguém que deveria ter ficado.',
  'Vulnerable/Victimized': 'Ferido ou explorado por outra pessoa.',
  'Vulnerable/Fragile': 'Fácil de quebrar agora; não precisaria de muito para desmoronar.',
  'Despair/Grief': 'Tristeza profunda por uma perda — de uma pessoa, uma relação ou uma esperança.',
  'Despair/Powerless': 'Sentir que nada que você faça pode mudar a situação.',
  'Guilty/Ashamed': 'Sentir-se mal por quem você é, não só pelo que fez.',
  'Guilty/Remorseful': 'Arrependimento por uma ação específica, com vontade de reparar.',
  'Depressed/Inferior': 'Humor baixo ligado a sentir-se menos que os outros.',
  'Depressed/Empty': 'Oco, como se não houvesse nada dentro — uma ausência mais do que uma dor.',
  'Hurt/Embarrassed': 'Magoado e constrangido depois de um momento de exposição.',
  'Hurt/Disappointed': 'Triste porque algo ou alguém não saiu como você esperava.',
};

// Attach Portuguese as index 2 everywhere ([en, zh, pt]), and reshape
// MID_INFO into { mean: [en, zh, pt], sits: [[en…], [zh…], [pt…]] }.
for (const [key, info] of Object.entries(CORE_INFO)) {
  const pt = PT_CORE[key];
  for (const f of ['mean', 'need', 'body', 'stay', 'dig', 'shiftIntro']) if (info[f]) info[f].push(pt[f]);
  info.shift.forEach((s, i) => s.push(pt.shift[i]));
}
for (const [key, [meanEn, meanZh, sitsEn, sitsZh]] of Object.entries(MID_INFO)) {
  const [meanPt, sitsPt] = PT_MID[key];
  MID_INFO[key] = { mean: [meanEn, meanZh, meanPt], sits: [sitsEn, sitsZh, sitsPt] };
}
for (const [key, info] of Object.entries(LEAF_INFO)) info.push(PT_LEAF[key]);
