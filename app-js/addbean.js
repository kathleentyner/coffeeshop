import { sendBean } from "./main.js"

const addBean = document.querySelector("#addBeanForm")

export const AddBeanForm = () => {
    return `
        <div> 
            <label for="name" class="form-label">Bean Name</label>
            <input type="text" name="beanname" class="form-control">
        </div>
        <div>
            <label for="region" class="form-label">Region</label>
            <input type="text" name="region" class="form-control">
        </div>
        <div>
            <label for="notes" class="form-label">Notes</label>
            <input type="text" name="notes" class="form-control">
        </div>

        <button class="button" id="addBeanButton">Add Bean</button>
    `
}



// listens for button click on form, takes the data, and sends a request to store in the API
addBean.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addBean") {

        const beanname = document.querySelector("input[name='beanname']").value
        const region = document.querySelector("input[name='region']").value
        const notes = document.querySelector("input[name='notes']").value

        const dataToSendToAPI = {
            Name: beanname,
            Region: region,
            Notes: notes
        }

        sendBean(dataToSendToAPI)

    }
})