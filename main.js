const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const Modal = {
    wrapper: document.getElementById("modal-wrapper"),
    btnClose: document.getElementById("close"),
    text: document.querySelector('#result span'),

    open() {
        Modal.wrapper.classList.add('open')
    },

    close() {
        Modal.wrapper.classList.remove("open")
    },

    result() {
        Modal.text.innerText = "Seu IMC é de " + IMC(inputWeight.value, inputHeight.value)
    }
}

form.onsubmit = function(event) {
    event.preventDefault()
    Modal.open()
    Modal.result()
}

function IMC(inputWeight, inputHeight){
    return (inputWeight /((inputHeight / 100) ** 2)).toFixed(2)

}

Modal.btnClose.addEventListener("click", function() {
    Modal.close()
})
