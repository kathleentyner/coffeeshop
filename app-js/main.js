import { AddBeanForm } from "./addbean.js";

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
const allBeans = document.querySelector("#beanList");
const addBean = document.querySelector("#addBeanForm");
addBean.innerHTML = AddBeanForm()

button.addEventListener("click", () => {
    getAllBeans()
        .then(beanVarieties => {
        
            let html = "<ul>"

            beanVarieties.forEach(variety => {
                html += `<li value=${variety.Id}>${variety.name}: From ${variety.region} | ${variety.notes}</li>`
            });

            html += "</ul>"
            allBeans.innerHTML = html
        })
});

function getAllBeans() {
    return fetch(url).then(resp => resp.json());
}

export const sendBean = (newBean) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBean)
    }

    return fetch(url, fetchOptions)
        .then(response => response.json())
        .then(() => {
            addBean.dispatchEvent(new CustomEvent("stateChanged"))
        })

}