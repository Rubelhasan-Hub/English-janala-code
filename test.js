

const createElement = (arr) => {
    const htmlElements = arr.map(el => `<span class="btn ">${el}</span>`)
    console.log(htmlElements.join(" "));
}

const synonyms = ["hello", "h1", "hello"];
createElement(synonyms);