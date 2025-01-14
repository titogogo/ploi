import Choices from "choices.js";

export default function initChoices(elementId, type = 'choices') {
    if (type === 'tags') {
        const choicesTags = document.getElementById(elementId);
        const color = choicesTags.dataset.color;
        if (choicesTags) {
            const choices = new Choices(choicesTags,{
                delimiter: ',',
                editItems: true,
                removeItemButton: true,
                addItems: true,
                allowHTML: false,
                classNames: {
                    item: 'badge rounded-pill choices-' + color
                },
                addItemText: (value) => {
                    return `Press Enter to add "${value}"`;
                },
            });
        }
    } else {
        const element = document.getElementById(elementId);
        new Choices(element, {
            allowHTML: true
        });
    }
}
