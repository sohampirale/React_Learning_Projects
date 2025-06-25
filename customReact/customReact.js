const rootElem = document.querySelector(".root");

// const reactElem={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         tagrt:"_blank"
//     },
//     children:"Click to visite google"
// }

// const renderer=(reactElem)=>{

//     const attributes=Object.entries(reactElem.props).map(([key,value])=>{
//         return `${key}="${value}"`
//     }).join(" ");

//     let HTML=`<${reactElem.type} ${attributes}>${reactElem.children}<${reactElem.type}/>`
//     rootElem.innerHTML+=HTML;
// }


// const renderer2=(reactElem)=>{
//     const domElem=document.createElement()
// }

// function clickHandler(){
//     renderer(reactElem);
// }

const renderer=(reactElem)=>{
    const domElem=document.createElement(reactElem.type);
    for(let i=0;i<reactElem.attributes.length;i++){
        domElem.setAttribute(reactElem.attributes[i][0],reactElem.attributes[i][1]);
    }
    domElem.setAttribute('class',reactElem.classes);
    domElem.innerHTML=reactElem.children;
    rootElem.appendChild(domElem);
}

let reactElem={};

const createReactElement=()=>{
    const type=prompt('Enter type : ');
    const nAttributes=(Number)(prompt('Enter no of attrbutes you have : '));
    const attributes=[];
    for(let i=0;i<nAttributes;i++){
        const key=prompt("ENter attribute key : ");
        const value=prompt('Enter attribute value : ');
        const temp=[key,value];
        attributes.push(temp);
    }
    const nClasses=(Number)(prompt("Enter no of classes you have for this element : "));
    let classes='';
    for(let i=0;i<nClasses;i++){
        const classname=prompt("Enter "+i+'th classname of it : ');
        classes+=` ${classname}`;
    }
    const children=prompt('Enter children(innerHTML) of it :');
    reactElem={
        type,
        attributes,
        classes,
        children
    }
    renderer(reactElem);
}

