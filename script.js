
const titulo=document.getElementById("titulo");
const op1=document.getElementById("op1");
const op2=document.getElementById("op2");
const texto=document.getElementById("texto");
const fundo1='url("casa.jpg")';
const fundo2='url("india.jpg")';
const fundo3='url("china.jpg")'
var passoatual=0;
const passos=[[
"Um dia desses, acordei com meu avô querendo me liberar da prisão, me dizendo que estava em busca da cura da doença da minha mãe, plausível apenas em território asiático.",
"Ir aos portos para a Índia",1,
"Pegar um avião à China",2
],
["Na Índia fomos interceptados por um grupo de criminosos que disseminavam a doença mortal da minha mãe.",
"Derrotar e Interrogá-los",3,
"Desistir e voltar para casa",4
],
["Ao chegarmos na China, fomos recebidos por um velho amigo de meu avô que nos instruiu a chegar em um curandeiro local.",
"Ir ao curandeiro",5,0,0
],
["Os mercenários indicam seu inimigo mortal, o curandeiro, que vive na China.",
"Pegar um avião à China",2,0,0

],
["Você permite que a sua mãe, decrépita com idade e a doença, descanse em paz.",
"Reiniciar",0,0,0
],
["O curandeiro oferece seus serviços se o dar as presas de um vampiro.",
"Ir ao Egito",6,
"Ir à Europa",7
],
["Ao encontrar o vampiro, você o espanca e leva de volta suas presas ao curandeiro",
"Voltar ao curandeiro e o dar as presas do vampiro",8,0,0
],
["Em uma adega, você encontra um caçador de vampiros que te indica o Egito.",
"Ir ao Egito",6,0,0
],
["Com o remédio em mãos, você volta para casa e salva sua mãe da doença.",
"Reiniciar",0,0,0
]
];
const opcoes=[
"Ir aos portos para a Índia",
"Pegar um avião à China",
"Derrotar e Interrogá-los",
"Desistir e voltar para casa",
"Ir ao curandeiro",
"Ir ao Egito",
"Ir à Europa",
"Voltar ao curandeiro e o dar as presas do vampiro"
];

function renderpasso()
{
texto.innerText=passos[passoatual][0];
op1.innerText=passos[passoatual][1];
if(passos[passoatual][3]!=0){
op2.style.display="";
op2.innerText=passos[passoatual][3];
}
else
{
op2.style.display="none";
}
}

function b1()
{
passoatual=passos[passoatual][2];
renderpasso();
}
function b2()
{
passoatual=passos[passoatual][4];
renderpasso();
}
op1.addEventListener('click',b1);
op2.addEventListener('click',b2);
