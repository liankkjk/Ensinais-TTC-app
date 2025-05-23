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
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FOla.mp4?alt=media&token=c8ccb65c-de92-49ee-8b61-7e7e7a0fff65',
    },
    {
        id: 1,
        title: "Bom dia",
        subtitle: "Sinal de bom dia",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FBom%20dia%20com%20legenda.mp4?alt=media&token=e97fd878-063b-49ff-b48f-65f89c93bd4a',
    },
    {
        id: 2,
        title: "Boa tarde",
        subtitle: "Sinal de boa tarde",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FRela%C3%A7%C3%B5es%2FBoa%20tarde%20com%20legenda.mp4?alt=media&token=8304e91c-0039-4a92-8992-f5a83ef21131',
    },
    {
        id: 3,
        title: "Boa noite",
        subtitle: "Sinal de boa noite",
        url: '',
    },
    {
        id: 4,
        title: "Por favor",
        subtitle: "Sinal de por favor",
        url: '',
    },
    {
        id: 5,
        title: "Tudo Bem",
        subtitle: "Sinal de tudo bem",
        url: '',
    },
    {
        id: 6,
        title: "Horas",
        subtitle: "Sinal de horas",
        url: '',
    },
    {
        id: 7,
        title: "Patrão",
        subtitle: "Sinal de patrão",
        url: '',
    },
    {
        id: 8,
        title: "Liderar",
        subtitle: "Sinal de liderar",
        url: '',
    },
    {
        id: 9,
        title: "Supervisor",
        subtitle: "Sinal de supervisor",
        url: '',
    },
    {
        id: 10,
        title: "Funcionário",
        subtitle: "Sinal de funcionário",
        url: '',
    },
    {
        id: 11,
        title: "Grato",
        subtitle: "Sinal de grato",
        url: '',
    },
    {
        id: 12,
        title: "Obrigado",
        subtitle: "Sinal de obrigado",
        url: '',
    },
    {
        id: 10,
        title: "Gentileza",
        subtitle: "Sinal de gentileza",
        url: '',
    },
    {
        id: 10,
        title: "De nada",
        subtitle: "Sinal de de nada",
        url: '',
    },
];

const sinaisNatureza: Sinal[] = [
    {
        id: 1,
        title: "Baleia",
        subtitle: "Sinal de baleia",
        url: '',
    },
    {
        id: 2,
        title: "Peixe",
        subtitle: "Sinal de peixe",
        url: '',
    },
    {
        id: 3,
        title: "Polvo",
        subtitle: "Sinal de polvo",
        url: '',
    },
    {
        id: 3,
        title: "Golfinho",
        subtitle: "Sinal de golfinho",
        url: '',
    },
    {
        id: 4,
        title: "Gato",
        subtitle: "Sinal de gato",
        url: '',
    },
    {
        id: 5,
        title: "Pássaro",
        subtitle: "Sinal de pássaro",
        url: '',
    },
    {
        id: 6,
        title: "Cachorro",
        subtitle: "Sinal de cachorro",
        url: '',
    },
    {
        id: 7,
        title: "Coelho",
        subtitle: "Sinal de coelho",
        url: '',
    },
    {
        id: 8,
        title: "Vaca",
        subtitle: "Sinal de vaca",
        url: '',
    },
    {
        id: 9,
        title: "Cavalo",
        subtitle: "Sinal de cavalo",
        url: '',
    },
    {
        id: 10,
        title: "Galinha",
        subtitle: "Sinal de galinha",
        url: '',
    },
    {
        id: 11,
        title: "Porco",
        subtitle: "Sinal de porco",
        url: '',
    },
    {
        id: 12,
        title: "Elefante",
        subtitle: "Sinal de elefante",
        url: '',
    },
    {
        id: 13,
        title: "Leão",
        subtitle: "Sinal de leão",
        url: '',
    },
    {
        id: 14,
        title: "Macaco",
        subtitle: "Sinal de macaco",
        url: '',
    },
    {
        id: 15,
        title: "Jacaré",
        subtitle: "Sinal de jacaré",
        url: '',
    },

];

const sinaisComidas: Sinal[] = [
    {
        id: 1,
        title: "Pastel",
        subtitle: "Sinal de pastel",
        url: '',
    },
    {
        id: 1,
        title: "Coxinha",
        subtitle: "Sinal de coxinha",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCoxinha%20com%20legenda.mp4?alt=media&token=f7d415dc-7db3-447f-b559-9771164ca5e9',
    },
    {
        id: 2,
        title: "Torta",
        subtitle: "Sinal de torta",
        url: '',
    },
    {
        id: 3,
        title: "Pizza",
        subtitle: "Sinal de pizza",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FPizza%20com%20legenda.mp4?alt=media&token=a7f36989-58fc-4595-a333-abd319760cc4',
    },
    {
        id: 4,
        title: "Pudim",
        subtitle: "Sinal de pudim",
        url: '',
    },
    {
        id: 5,
        title: "Chocolate",
        subtitle: "Sinal de chocolate",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FChocolate%20com%20legenda.mp4?alt=media&token=c8dfe6e7-5cd7-45ed-baf1-6d79826f00db',
    },
    {
        id: 6,
        title: "Bala",
        subtitle: "Sinal de bala",
        url: '',
    },
    {
        id: 7,
        title: "Sorvete",
        subtitle: "Sinal de sorvete",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FSorvete%20com%20legenda.mp4?alt=media&token=5155694b-9a30-46dd-bc8d-f842bac546cc',
    },
    {
        id: 8,
        title: "Alface",
        subtitle: "Sinal de alface",
        url: '',
    },
    {
        id: 9,
        title: "Cenoura",
        subtitle: "Sinal de cenoura",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCenoura%20com%20legenda.mp4?alt=media&token=74ef9b87-38f9-404f-875f-cff7b44f0019',
    },
    {
        id: 10,
        title: "Chuchu",
        subtitle: "Sinal de chuchu",
        url: '',
    },
    {
        id: 11,
        title: "Couve",
        subtitle: "Sinal de couve",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FCouve%20com%20legenda.mp4?alt=media&token=ce4f1046-84e7-4d79-b2e8-c72a4d0fec5e',
    },
    {
        id: 12,
        title: "Arroz",
        subtitle: "Sinal de arroz",
        url: '',
    },
    {
        id: 13,
        title: "Feijoada",
        subtitle: "Sinal de feijoada",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FFeijoada%20com%20legenda.mp4?alt=media&token=317f9151-bfad-4c82-9586-62d0cca35f4c',
    },
    {
        id: 14,
        title: "Feijão",
        subtitle: "Sinal de feijão",
        url: '',
    },
    {
        id: 15,
        title: "Sopa",
        subtitle: "Sinal de sopa",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FComidas%2FCom%20legenda%2FSopa%20com%20legenda.mp4?alt=media&token=cd8f9eaf-9c0c-49fc-ac10-398249a6cafd',
    },

];

const sinaisProfissoes: Sinal[] = [
    {
        id: 1,
        title: "Ajuda",
        subtitle: "Sinal de Ajuda",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FAjuda%20com%20legenda.mp4?alt=media&token=9eb9a455-8472-4367-b5eb-af765ad2c2d1',
    },
    {
        id: 1,
        title: "Consulta",
        subtitle: "Sinal de Consulta",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FConsulta%20com%20legenda.mp4?alt=media&token=1c68e504-d856-43ae-a44a-6eb4c56027b4',
    },
    {
        id: 2,
        title: "Desenvolvedor",
        subtitle: "Sinal de desenvolvedor",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FDesenvolvedor%20com%20legenda.mp4?alt=media&token=e9818a40-1ade-4daf-b4af-681bc6fc5d83',
    },
    {
        id: 3,
        title: "Design Digital",
        subtitle: "Sinal de design digital",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FDesign%20Digital%20com%20legenda.mp4?alt=media&token=f5e5fbf6-1ed0-47a2-ba3c-c1d8d3ffed0e',
    },
    {
        id: 4,
        title: "Enfermeira",
        subtitle: "Sinal de enfermeira",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FEnfermeira%20com%20legenda.mp4?alt=media&token=722c4f07-4518-4bc3-96f8-9a2a37a1772b',
    },
    {
        id: 5,
        title: "Preço",
        subtitle: "Sinal de preço",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FPre%C3%A7o%20com%20legenda.mp4?alt=media&token=79e502c1-9bb8-44d0-8548-0a74cdf87aad',
    },
    {
        id: 6,
        title: "Uber",
        subtitle: "Sinal de Uber",
        url: 'https://firebasestorage.googleapis.com/v0/b/ensinais-tcc.firebasestorage.app/o/videos%2FProfiss%C3%B5es%2FCom%20legenda%2FUber%20com%20legenda.mp4?alt=media&token=6d6383ec-bf45-4806-81b0-efcd1148cafe',
    },
    
        /*id: 7,
        title: "Tudo Bem",
        subtitle: "Sinal de afirmação",
        url: '',
    },
    {
        id: 8,
        title: "Família",
        subtitle: "Sinal de família",
        url: '',
    },
    {
        id: 9,
        title: "Mãe",
        subtitle: "Sinal de mãe",
        url: '',
    },
    {
        id: 10,
        title: "Pai",
        subtitle: "Sinal de pai",
        url: '',
    },
    {
        id: 11,
        title: "Irmão",
        subtitle: "Sinal de irmão",
        url: '',
    },
    {
        id: 12,
        title: "Filho",
        subtitle: "Sinal de filho",
        url: '',
    },
    {
        id: 13,
        title: "Amigo",
        subtitle: "Sinal de amigo",
        url: '',
    },
    {
        id: 14,
        title: "Colega",
        subtitle: "Sinal de colega",
        url: '',
    },
    {
        id: 15,
        title: "Chefe",
        subtitle: "Sinal de chefe",
        url: '',
    },*/

];

const sinaisTransporte: Sinal[] = [
    {
        id: 1,
        title: "Oi",
        subtitle: "Sinal de olá",
        url: '',
    },
    {
        id: 1,
        title: "Bom dia",
        subtitle: "Sinal de bom dia",
        url: '',
    },
    {
        id: 2,
        title: "Boa tarde",
        subtitle: "Sinal de boa tarde",
        url: '',
    },
    {
        id: 3,
        title: "Boa noite",
        subtitle: "Sinal de boa noite",
        url: '',
    },
    {
        id: 4,
        title: "Por favor",
        subtitle: "Sinal de por favor",
        url: '',
    },
    {
        id: 5,
        title: "Obrigado/a",
        subtitle: "Sinal de obrigado/a",
        url: '',
    },
    {
        id: 6,
        title: "Desculpe",
        subtitle: "Sinal de por favor",
        url: '',
    },
    {
        id: 7,
        title: "Tudo Bem",
        subtitle: "Sinal de afirmação",
        url: '',
    },
    {
        id: 8,
        title: "Família",
        subtitle: "Sinal de família",
        url: '',
    },
    {
        id: 9,
        title: "Mãe",
        subtitle: "Sinal de mãe",
        url: '',
    },
    {
        id: 10,
        title: "Pai",
        subtitle: "Sinal de pai",
        url: '',
    },
    {
        id: 11,
        title: "Irmão",
        subtitle: "Sinal de irmão",
        url: '',
    },
    {
        id: 12,
        title: "Filho",
        subtitle: "Sinal de filho",
        url: '',
    },
    {
        id: 13,
        title: "Amigo",
        subtitle: "Sinal de amigo",
        url: '',
    },
    {
        id: 14,
        title: "Colega",
        subtitle: "Sinal de colega",
        url: '',
    },
    {
        id: 15,
        title: "Chefe",
        subtitle: "Sinal de chefe",
        url: '',
    },

];

export { sinaisAlfabeto, sinaisRelacoes, sinaisNatureza, sinaisComidas, sinaisProfissoes, sinaisTransporte };