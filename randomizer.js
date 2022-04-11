const greeting=["Hello,","Hi,","Nice to meet you,", "Pleased to meet you,","Dear Sir or Madam,"]
const messages=['It is certain',
    'It is decidedly so',
    'Reply hazy try again',
    'Cannot predict now',
    'Do not count on it',
    'My sources say no',
    'Outlook not so good',
    'Signs point to yes',
]
const randomMessage=(arr)=>{
    const size=arr.length;
    const rind=Math.floor(Math.random()*size);
    return arr[rind];
}
const outputMessage=()=>{
    const firstPart=randomMessage(greeting);
    const secondPart=randomMessage(messages);
    return firstPart+" Stranger\n"+secondPart;
}

console.log(outputMessage())