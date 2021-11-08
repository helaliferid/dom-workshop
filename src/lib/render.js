export const render = (element,obj,color,bgColor) => {
    let output=document.createElement('div');
    output.innerHTML=JSON.stringify(obj,undefined,3);
    output.style.color=color;
    output.style.backgroundColor=bgColor;
    element.appendChild(output);
}