const input = document.getElementById("input");
const add = document.getElementById("add");
const outcont = document.getElementById("output_container");

add.addEventListener("click", create);

function create() {
  if (input.value === "") {
    return;
  } else {
    console.log(input.value);

    //Create div that holds input value and buttons
    const button_and_answerHolder = document.createElement("div");
    button_and_answerHolder.classList.add("button_and_answerHolder");

    // Create div for input value
    const answerHolder = document.createElement("div");
    answerHolder.classList.add("holder");
    answerHolder.innerText = input.value;

    // Create trash Button
    const check_button = document.createElement("button");
    check_button.classList.add("check_button");
    check_button.innerHTML = '<i class="fas fa-check"></i>';

    // Create check Button
    const trash_button = document.createElement("button");
    trash_button.classList.add("trash_button");
    trash_button.innerHTML = '<i class="fas fa-trash"></i>';

    // Append buttons to input div
    button_and_answerHolder.appendChild(answerHolder);
    button_and_answerHolder.appendChild(trash_button);
    button_and_answerHolder.appendChild(check_button);

    // Append to a Container
    outcont.appendChild(button_and_answerHolder);

    input.value = "";
    trash_button.addEventListener("click", () => {
      button_and_answerHolder.remove();
    });

    check_button.addEventListener("click", () =>
      answerHolder.classList.toggle("completed")
    );

    updateLS();
  }
}
