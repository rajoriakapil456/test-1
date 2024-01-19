export default function decorate(block){
    //decorating the quote
    const quoteDiv = block.querySelector(':scope > div > div');
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `"${quoteDiv.innerHTML}"`;
    quoteDiv.parentElement.replaceWith(blockquote);

    //decorating the author
    const authorDiv = block.querySelector(':scope > div > div');
    if(authorDiv){
        const p = document.createElement('p');
        p.innerHTML = `<em> ${authorDiv.innerHTML}</em>`;
        authorDiv.parentElement.replaceWith(p);
    }
}