export interface Sinal {
    id: number;
    title: string;
    subtitle: string;
    url: string;
};

const sinaisAlfabeto: Sinal[] = [
    {
        id: 1,
        title: "Número 25",
        subtitle: "Sinal do número 25",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FN%C3%BAmero%2025.mp4?alt=media&token=771fdf62-7ad6-48f1-bd80-160e1c78c143',
    },
    {
        id: 2,
        title: "Número 45",
        subtitle: "Sinal do número 45",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2F45%20com%20legenda.mp4?alt=media&token=e4e2d8e8-c88e-430c-b61f-006b67f7139b',
    },
    {
        id: 3,
        title: "Calculadora",
        subtitle: "Sinal de calculadora",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FCalculadora%20com%20legenda.mp4?alt=media&token=3c6310b6-8019-491f-80fa-8ea3879e833d',
    },
    {
        id: 4,
        title: "Divisão",
        subtitle: "Sinal de divisão",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FDivis%C3%A3o.mp4?alt=media&token=39883b38-0a03-45b5-86b1-407c2b04db95',
    },
    {
        id: 5,
        title: "Aprender",
        subtitle: "Sinal de aprender",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FAprender.mp4?alt=media&token=49233407-cad5-4955-b83c-2a7d0c99a810',
    },
    {
        id: 6,
        title: "Ler",
        subtitle: "Sinal de ler",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FLer.mp4?alt=media&token=efc6b166-5cc1-4fb5-a42e-ef11c5a6e3a9',
    },
    {
        id: 7,
        title: "Pontuação",
        subtitle: "Sinal de pontuação",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FPontua%C3%A7%C3%A3o.mp4?alt=media&token=6d80edbf-e627-4266-a730-24e223461651',
    },
    {
        id: 8,
        title: "Verbo",
        subtitle: "Sinal de verbo",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FVerbo.mp4?alt=media&token=6a29e7c1-386a-49b6-8e54-f7b738963b18',
    },
    {
        id: 9,
        title: "Colonização",
        subtitle: "Sinal de pontuação",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FColoniza%C3%A7%C3%A3o.mp4?alt=media&token=e948a76d-dcc0-40aa-b2e9-58620a547629',
    },
    {
        id: 10,
        title: "Castelo",
        subtitle: "Sinal de castelo",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FCastelo.mp4?alt=media&token=1876bd42-78cf-4983-a602-1d9495455492',
    },
    {
        id: 11,
        title: "Independência do Brasil",
        subtitle: "Sinal de Independência do Brasil",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FIndepend%C3%AAncia%20do%20Brasil.mp4?alt=media&token=6863add2-eafb-443d-b76a-6820f69e784d',
    },
    {
        id: 12,
        title: "Cultura",
        subtitle: "Sinal de cultura",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FCultura.mp4?alt=media&token=9efd214c-2d47-4b4b-928d-72f313db8030',
    },
    {
        id: 13,
        title: "Americano",
        subtitle: "Sinal de americano",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FAmericano.mp4?alt=media&token=ca6b6380-f2da-431b-8f07-853293a47d50',
    },
    {
        id: 14,
        title: "País",
        subtitle: "Sinal de país",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FPa%C3%ADs.mp4?alt=media&token=c51ccea4-f350-40e5-bc84-4af0dd468eeb',
    },
    {
        id: 15,
        title: "Plano",
        subtitle: "Sinal de plano",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FPlano.mp4?alt=media&token=a537975a-b02c-4d39-90d3-9594633c1fe9',
    },
    {
        id: 16,
        title: "Brasil",
        subtitle: "Sinal de Brasil",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FEstudo%2FCom%20legenda%2FBrasil.mp4?alt=media&token=7b89bee5-f6cf-4ec3-a875-c054a6f35c79',
    },
];

const sinaisRelacoes: Sinal[] = [
    {
        id: 1,
        title: "Oi",
        subtitle: "Sinal de olá",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FOi%20com%20legenda.mp4?alt=media&token=d980d30f-a167-4ef0-b8cd-c46eae6a1785',
    },
    {
        id: 2,
        title: "Bom dia",
        subtitle: "Sinal de bom dia",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FBom%20dia%20com%20legenda.mp4?alt=media&token=21cd507e-11dd-4864-9712-9832efcc6b46',
    },
    {
        id: 3,
        title: "Boa tarde",
        subtitle: "Sinal de boa tarde",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FBoa%20tarde%20com%20legenda.mp4?alt=media&token=f7cd80cd-0624-47a6-a981-f17f0f6fc1ef',
    },
    {
        id: 4,
        title: "Boa noite",
        subtitle: "Sinal de boa noite",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FBoa%20noite%20com%20legenda.mp4?alt=media&token=7a6f57a3-54ee-4754-84ff-ca1b3b4c11ae',
    },
    {
        id: 5,
        title: "Por favor",
        subtitle: "Sinal de por favor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FPor%20favor%20com%20legenda.mp4?alt=media&token=488a568c-f033-4042-8334-205fefbd9831',
    },
    {
        id: 6,
        title: "Tudo Bem",
        subtitle: "Sinal de tudo bem",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FTudo%20bem%20com%20legenda.mp4?alt=media&token=2e165d35-7aee-407b-9f50-4daf8e40abea',
    },
    {
        id: 7,
        title: "Horas",
        subtitle: "Sinal de horas",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FHoras%20com%20legenda.mp4?alt=media&token=2ef23233-aafa-460d-8d89-509c6eb2af3b',
    },
    {
        id: 8,
        title: "Patrão",
        subtitle: "Sinal de patrão",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FPatr%C3%A3o%20com%20legenda.mp4?alt=media&token=5ae90e76-df6f-43f3-a352-ebfa6e03107b',
    },
    {
        id: 9,
        title: "Liderar",
        subtitle: "Sinal de liderar",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FLiderar%20com%20legenda.mp4?alt=media&token=304bad97-d27b-4ca1-9245-20844aedea4a',
    },
    {
        id: 10,
        title: "Supervisor",
        subtitle: "Sinal de supervisor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FSupervisor%20com%20legenda.mp4?alt=media&token=5338ed13-fa35-48eb-9fd6-98563e9819a5',
    },
    {
        id: 11,
        title: "Funcionário",
        subtitle: "Sinal de funcionário",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FFuncion%C3%A1rio%20com%20legenda.mp4?alt=media&token=4a95f974-f1f5-4116-abd0-09857594575c',
    },
    {
        id: 12,
        title: "Grato",
        subtitle: "Sinal de grato",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FGrato%20com%20legenda.mp4?alt=media&token=838cf13b-23a8-4ceb-9c1a-d6c64de7fb95',
    },
    {
        id: 13,
        title: "Obrigado",
        subtitle: "Sinal de obrigado",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FObrigado%20com%20legenda.mp4?alt=media&token=887274d6-7f69-4585-a53d-d633bc77b1bd',
    },
    {
        id: 14,
        title: "Gentileza",
        subtitle: "Sinal de gentileza",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FGentileza%20com%20legenda.mp4?alt=media&token=b13199a7-8246-4ca4-a43a-0c3378fac9f2',
    },
    {
        id: 15,
        title: "De nada",
        subtitle: "Sinal de de nada",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FCom%20legenda%2FDe%20nada%20com%20legenda.mp4?alt=media&token=ad04defc-be42-4057-aad7-c7dd430e958f',
    },
];

const sinaisNatureza: Sinal[] = [
    {
        id: 1,
        title: "Baleia",
        subtitle: "Sinal de baleia",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FBaleia%20com%20legenda.mp4?alt=media&token=e910b422-6631-4e3e-b234-4d637b5ce01a',
    },
    {
        id: 2,
        title: "Peixe",
        subtitle: "Sinal de peixe",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FPeixe%20com%20legenda.mp4?alt=media&token=e3183271-0f34-4e9c-9877-f63c12ba3c34',
    },
    {
        id: 3,
        title: "Polvo",
        subtitle: "Sinal de polvo",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FPolvo%20com%20legenda.mp4?alt=media&token=78aa16db-bf41-4f79-8a33-5e1bccf52d9e',
    },
    {
        id: 4,
        title: "Golfinho",
        subtitle: "Sinal de golfinho",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FGolfinho%20com%20legenda.mp4?alt=media&token=0fb043ea-b324-4cec-9e8b-13aeaddd1eb1',
    },
    {
        id: 5,
        title: "Gato",
        subtitle: "Sinal de gato",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FGato%20com%20legenda.mp4?alt=media&token=bbc3840b-5599-4a0a-8738-a27a0f951f31',
    },
    {
        id: 6,
        title: "Pássaro",
        subtitle: "Sinal de pássaro",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FPassarinho%20com%20legenda.mp4?alt=media&token=91636cda-36bf-41d3-bc40-2fa3c8e6f2fc',
    },
    {
        id: 7,
        title: "Cachorro",
        subtitle: "Sinal de cachorro",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FCachorro%20com%20legenda.mp4?alt=media&token=8a3ebbaa-e150-434a-9f08-1595491ee17c',
    },
    {
        id: 8,
        title: "Coelho",
        subtitle: "Sinal de coelho",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FCoelho%20com%20legenda.mp4?alt=media&token=2991b312-9876-4c5b-8215-304f295c739a',
    },
    {
        id: 9,
        title: "Vaca",
        subtitle: "Sinal de vaca",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FVaca%20com%20legenda.mp4?alt=media&token=78a8d75b-7838-46a9-b828-aaa4f263f31d',
    },
    {
        id: 10,
        title: "Cavalo",
        subtitle: "Sinal de cavalo",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FCavalo%20com%20legenda.mp4?alt=media&token=5c8b6e2b-83ba-4c8f-990f-5e415bb0bda6',
    },
    {
        id: 11,
        title: "Galinha",
        subtitle: "Sinal de galinha",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FGalinha%20com%20legenda.mp4?alt=media&token=5abbf8ae-b3e7-4a2c-8b94-ad5a88e82039',
    },
    {
        id: 12,
        title: "Porco",
        subtitle: "Sinal de porco",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FPorco%20com%20legenda.mp4?alt=media&token=7ed493de-ff12-4dc4-a87c-7c18c0abe18d',
    },
    {
        id: 13,
        title: "Elefante",
        subtitle: "Sinal de elefante",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FElefante%20com%20legenda.mp4?alt=media&token=dfa6c26a-4ccf-4681-a981-3c7c5633e4d0',
    },
    {
        id: 14,
        title: "Leão",
        subtitle: "Sinal de leão",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FLe%C3%A3o%20com%20legenda.mp4?alt=media&token=41ca85d0-2b4b-4d7e-97eb-bb1f08a40069',
    },
    {
        id: 15,
        title: "Macaco",
        subtitle: "Sinal de macaco",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FMacaco%20com%20legenda.mp4?alt=media&token=61b46cdf-dcaf-4fc2-b2e1-2788118f8492',
    },
    {
        id: 16,
        title: "Jacaré",
        subtitle: "Sinal de jacaré",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FAnimais%2FCom%20legenda%2FJacar%C3%A9%20com%20legenda.mp4?alt=media&token=68cb187f-6c6a-4e32-9f7f-2d96b5d7de6f',
    },
];

const sinaisComidas: Sinal[] = [
    {
        id: 1,
        title: "Pastel",
        subtitle: "Sinal de pastel",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FPastel%20com%20legenda.mp4?alt=media&token=6fd24556-f37c-4b72-83ec-667a9741f85e',
    },
    {
        id: 2,
        title: "Coxinha",
        subtitle: "Sinal de coxinha",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCoxinha%20com%20legenda.mp4?alt=media&token=f7d415dc-7db3-447f-b559-9771164ca5e9',
    },
    {
        id: 3,
        title: "Torta",
        subtitle: "Sinal de torta",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FTorta%20com%20legenda.mp4?alt=media&token=d5046ced-048e-4de3-9cf3-de32c04b8717',
    },
    {
        id: 4,
        title: "Pizza",
        subtitle: "Sinal de pizza",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FPizza%20com%20legenda.mp4?alt=media&token=a7f36989-58fc-4595-a333-abd319760cc4',
    },
    {
        id: 5,
        title: "Pudim",
        subtitle: "Sinal de pudim",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FPudim%20com%20legenda.mp4?alt=media&token=ffe5a723-a395-4b12-8b2f-3b360aaf1b9e',
    },
    {
        id: 6,
        title: "Chocolate",
        subtitle: "Sinal de chocolate",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FChocolate%20com%20legenda.mp4?alt=media&token=c8dfe6e7-5cd7-45ed-baf1-6d79826f00db',
    },
    {
        id: 7,
        title: "Bala",
        subtitle: "Sinal de bala",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FBala%20com%20legenda.mp4?alt=media&token=17d59e64-5954-47d0-8b7b-cdb43e562818',
    },
    {
        id: 8,
        title: "Sorvete",
        subtitle: "Sinal de sorvete",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FSorvete%20com%20legenda.mp4?alt=media&token=5155694b-9a30-46dd-bc8d-f842bac546cc',
    },
    {
        id: 9,
        title: "Alface",
        subtitle: "Sinal de alface",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FAlface%20com%20legenda.mp4?alt=media&token=1e3909b5-c18c-4fbf-b2d2-942f654f0e71',
    },
    {
        id: 10,
        title: "Cenoura",
        subtitle: "Sinal de cenoura",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCenoura%20com%20legenda.mp4?alt=media&token=74ef9b87-38f9-404f-875f-cff7b44f0019',
    },
    {
        id: 11,
        title: "Chuchu",
        subtitle: "Sinal de chuchu",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FChuchu%20com%20legenda.mp4?alt=media&token=85154500-b705-426b-a5ef-3b35956dfcef',
    },
    {
        id: 12,
        title: "Couve",
        subtitle: "Sinal de couve",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCouve%20com%20legenda.mp4?alt=media&token=ce4f1046-84e7-4d79-b2e8-c72a4d0fec5e',
    },
    {
        id: 13,
        title: "Arroz",
        subtitle: "Sinal de arroz",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FArroz%20com%20legenda.mp4?alt=media&token=2cddaccc-022b-4ae2-8363-590aaa0fefb5',
    },
    {
        id: 14,
        title: "Feijoada",
        subtitle: "Sinal de feijoada",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FFeijoada%20com%20legenda.mp4?alt=media&token=317f9151-bfad-4c82-9586-62d0cca35f4c',
    },
    {
        id: 15,
        title: "Feijão",
        subtitle: "Sinal de feijão",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FFeij%C3%A3o%20com%20legenda.mp4?alt=media&token=c369d90a-bba0-4962-8348-97ee093608d8',
    },
    {
        id: 16,
        title: "Sopa",
        subtitle: "Sinal de sopa",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FSopa%20com%20legenda.mp4?alt=media&token=cd8f9eaf-9c0c-49fc-ac10-398249a6cafd',
    },

];

const sinaisProfissoes: Sinal[] = [
    {
        id: 1,
        title: "Desenvolvedor",
        subtitle: "Sinal de desenvolvedor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FDesenvolvedor%20com%20legenda.mp4?alt=media&token=e9818a40-1ade-4daf-b4af-681bc6fc5d83',
    },
    {
        id: 2,
        title: "Inteligência Artificial",
        subtitle: "Sinal de inteligência artificial",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FIntelig%C3%AAncia%20Artificial%20com%20legenda.mp4?alt=media&token=33732023-c2cf-44ec-bd14-b08dc027b1b9',
    },
    {
        id: 3,
        title: "Tecnologia",
        subtitle: "Sinal de tecnologia",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FTecnologia%20com%20legenda.mp4?alt=media&token=0f58a11e-2150-47c0-a729-5f46ec222bb3',
    },
    {
        id: 4,
        title: "Design Digital",
        subtitle: "Sinal de design digital",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FDesign%20Digital%20com%20legenda.mp4?alt=media&token=f5e5fbf6-1ed0-47a2-ba3c-c1d8d3ffed0e',
    },
    {
        id: 5,
        title: "Nutricionista",
        subtitle: "Sinal de nutricionista",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FNutricionista%20com%20legenda.mp4?alt=media&token=cad537f0-6a22-44ab-94cf-5c3f420321f1',
    },
    {
        id: 6,
        title: "Consulta",
        subtitle: "Sinal de consulta",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FConsulta%20com%20legenda.mp4?alt=media&token=1c68e504-d856-43ae-a44a-6eb4c56027b4',
    },
    {
        id: 7,
        title: "Médico",
        subtitle: "Sinal de médico",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FM%C3%A9dico%20com%20legenda.mp4?alt=media&token=c2376563-60ba-44e7-aa03-1679124dd7e4',
    },
    {
        id: 8,
        title: "Enfermeira",
        subtitle: "Sinal de enfermeira",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FEnfermeira%20com%20legenda.mp4?alt=media&token=722c4f07-4518-4bc3-96f8-9a2a37a1772b',
    },
    {
        id: 9,
        title: "Segurança",
        subtitle: "Sinal de segurança",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FSeguran%C3%A7a%20com%20legenda.mp4?alt=media&token=69c01828-7b3c-4902-a82f-e52bd94346ac',
    },
    {
        id: 10,
        title: "Uber",
        subtitle: "Sinal de Uber",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FUber%20com%20legenda.mp4?alt=media&token=6d6383ec-bf45-4806-81b0-efcd1148cafe',
    },
    {
        id: 11,
        title: "Garçom",
        subtitle: "Sinal de garçom",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FGar%C3%A7om%20com%20legenda.mp4?alt=media&token=7d5483dd-5b5b-49ad-bb20-52d6543a4ac4',
    },
    {
        id: 12,
        title: "Professor",
        subtitle: "Sinal de professor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FProfessor%20com%20legenda.mp4?alt=media&token=51aafea6-595f-4a84-937e-11bb4ed863b0',
    },
    {
        id: 13,
        title: "Pagamento",
        subtitle: "Sinal de pagamento",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FPagamento%20com%20legenda.mp4?alt=media&token=6be6d998-9ec2-4e8e-8f1a-eaee1c1c2a8b',
    },
    {
        id: 14,
        title: "Preço",
        subtitle: "Sinal de preço",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FPre%C3%A7o%20com%20legenda.mp4?alt=media&token=79e502c1-9bb8-44d0-8548-0a74cdf87aad',
    },
    {
        id: 15,
        title: "Vendedor",
        subtitle: "Sinal de vendedor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FVendedor%20com%20legenda.mp4?alt=media&token=02e17bbd-c75d-4e17-9978-2497286ad7cd',
    },
    {
        id: 16,
        title: "Ajuda",
        subtitle: "Sinal de ajuda",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FAjuda%20com%20legenda.mp4?alt=media&token=9eb9a455-8472-4367-b5eb-af765ad2c2d1',
    },
];

const sinaisTransporte: Sinal[] = [
    {
        id: 1,
        title: "Sinalização",
        subtitle: "Sinal de sinalização",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FSinaliza%C3%A7%C3%A3o%20com%20legenda.mp4?alt=media&token=ab42dac6-046b-4be8-81d7-4e5b5acc1c2b',
    },
    {
        id: 2,
        title: "Bloqueada",
        subtitle: "Sinal de bloqueada",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FBloqueada%20com%20legenda.mp4?alt=media&token=52cf92a0-d081-4f60-9ae9-8224dd12fa3d',
    },
    {
        id: 3,
        title: "Semáforo",
        subtitle: "Sinal de semáforo",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FSem%C3%A1foro%20com%20legenda.mp4?alt=media&token=1be87095-39f8-4eb1-95c2-f11cbb492ada',
    },
    {
        id: 4,
        title: "Parar",
        subtitle: "Sinal de parar",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FParar%20com%20legenda.mp4?alt=media&token=3ece66a2-9ee3-4d17-ae6b-09114e6670f1',
    },
    {
        id: 5,
        title: "Carro",
        subtitle: "Sinal de carro",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FCarro%20com%20legenda.mp4?alt=media&token=5f1437d9-623b-4ca8-93a1-b1a1ea6511a3',
    },
    {
        id: 6,
        title: "Moto",
        subtitle: "Sinal de moto",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FMoto%20com%20legenda.mp4?alt=media&token=387db7cd-c23c-482d-9d87-d04a1aae0dee',
    },
    {
        id: 7,
        title: "Metro",
        subtitle: "Sinal de metro",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FMetro%20com%20legenda.mp4?alt=media&token=7d6a3464-e858-4512-bb4b-3b0d20d94aca',
    },
    {
        id: 8,
        title: "Ônibus",
        subtitle: "Sinal de ônibus",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2F%C3%94nibus%20com%20legenda.mp4?alt=media&token=03974e3b-24af-4c76-b9c9-63b63c5182d6',
    },
    {
        id: 9,
        title: "Ponto de ônibus",
        subtitle: "Sinal de ponto de ônibus",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FPonto%20de%20%C3%B4nibus%20com%20legendda.mp4?alt=media&token=bb3deb18-1f77-4352-ac55-e44bc8396386',
    },
    {
        id: 10,
        title: "Rodoviária",
        subtitle: "Sinal de rodoviária",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FRodovi%C3%A1ria%20com%20legenda.mp4?alt=media&token=fdff6692-9d4f-4816-97e7-adbeb93ef0a8',
    },
    {
        id: 11,
        title: "Terminal",
        subtitle: "Sinal de terminal",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FTerminal%20com%20legenda.mp4?alt=media&token=17ddda77-e517-4ebc-8bd0-5396ebffd4a3',
    },
    {
        id: 12,
        title: "Passe de ônibus",
        subtitle: "Sinal de passe de ônibus",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FPasse%20de%20%C3%B4nibus%20com%20legenda.mp4?alt=media&token=f96635b8-006b-438d-bbe8-6af378d20011',
    },
    {
        id: 13,
        title: "Estação",
        subtitle: "Sinal de estação",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FEsta%C3%A7%C3%A3o%20legenda.mp4?alt=media&token=922fc0a0-70f9-425c-bd6d-873da6573b13',
    },
    {
        id: 14,
        title: "Linha Amarela",
        subtitle: "Sinal de Linha Amarela",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FLinha%20amarela%20com%20legenda.mp4?alt=media&token=ebb99254-97ed-46f0-a90d-414b63eea5ce',
    },
    {
        id: 15,
        title: "Plataforma",
        subtitle: "Sinal de plataforma",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FPlataforma%20com%20legenda.mp4?alt=media&token=27e527da-5027-49ba-a7c3-0b9ae0ab1a5b',
    },
    {
        id: 16,
        title: "Informação",
        subtitle: "Sinal de Informação",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FTransporte%2FCom%20legenda%2FInforma%C3%A7%C3%A3o%20com%20legenda.mp4?alt=media&token=a560dbed-3681-49f5-aed1-dc065bd919cc',
    },
];

export { sinaisAlfabeto, sinaisRelacoes, sinaisNatureza, sinaisComidas, sinaisProfissoes, sinaisTransporte };