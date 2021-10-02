const cardContainer = document.querySelector(".card-container")


const cardData = [
    { heading: "heading1", content: "dfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading2", content: "lfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading3", content: "kfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading4", content: "jfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading5", content: "gfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading6", content: "gfbhjhdsbfjhbjhf", id: 1 },
    { heading: "heading7", content: "ffbhjhdsbfjhbjhf", id: 1 },
];

const createNotes = (array) => {
    array.forEach(cardObj => {
        const { heading, content, id } = cardObj;
        const card = document.createElement("div")
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header">
        <div class="card-heading">${heading}</div>
        <div class="edit-note">
            <img src="../../assets/edit-note.svg" alt="">
        </div>
    </div>
    <div class="card-content"> ${content}</div>`

        card.innerHTML = insideHtml;
        cardContainer.appendChild(card)


    });
};

createNotes(cardData);
