document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtns = document.querySelectorAll(".ctrAmount .ctr:first-child");
    const increaseBtns = document.querySelectorAll(".ctrAmount .ctr:last-child");
    const deleteBtns = document.querySelectorAll(".icoDelete");
    const totalElement = document.getElementById("total");
    const pricesElement = document.getElementById("prices");
    const deliveryCost = parseFloat(document.getElementById("delver").textContent);

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".artOrder").forEach(article => {
            const amount = parseInt(article.querySelector(".amount").textContent);
            const price = parseFloat(article.querySelector(".totalArt").textContent.replace("€", ""));
            total += amount * price;
        });
        pricesElement.textContent = total.toFixed(2);
        totalElement.textContent = (total + deliveryCost).toFixed(2);
    }

    decreaseBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            let amountSpan = this.nextElementSibling;
            let amount = parseInt(amountSpan.textContent);
            if (amount > 1) {
                amount--;
                amountSpan.textContent = amount + "x";
                updateTotal();
            }
        });
    });

    increaseBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            let amountSpan = this.previousElementSibling;
            let amount = parseInt(amountSpan.textContent);
            amount++;
            amountSpan.textContent = amount + "x";
            updateTotal();
        });
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            this.closest(".artOrder").remove();
            updateTotal();
        });
    });

    updateTotal();

    // Create and append the checkout button section
    const checkoutSection = document.createElement("section");
    checkoutSection.id = "artKase";
    checkoutSection.innerHTML = `
        <button id="btnBuy" class="CT" type="submit">
            Zur Kasse
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.87 274.78">
                <defs>
                    <style>
                        .d { fill: #fff; }
                        .e { fill: currentColor; }
                    </style>
                </defs>
                <g id="a" />
                <g id="b">
                    <g id="c">
                        <circle class="e" cx="361.74" cy="221.84" r="21.29" />
                        <path class="e" d="M110.2,99.53l84.48,132.08c2.92,4.57,8.55,6.61,13.72,4.98l167.07-52.61c5-1.57,8.4-6.21,8.4-11.45v-10.83c0-8.02-7.72-13.79-15.41-11.51l-143.07,42.29c-5.28,1.56-10.94-.67-13.74-5.41l-4.33-7.32c-3.93-6.65-.64-15.24,6.73-17.56l161.41-50.83c5-1.57,8.4-6.21,8.4-11.45v-16.58c0-8.12-7.89-13.9-15.63-11.45l-179.51,56.87c-7.2,2.28-15.03-.71-18.87-7.21l-2.56-4.33c-3.92-6.63-.66-15.19,6.67-17.54L375.53,35.12c4.97-1.59,8.34-6.21,8.34-11.43V12.01c0-8.14-7.94-13.92-15.69-11.43L116.63,81.63c-7.49,2.41-10.67,11.27-6.43,17.9Z" />
                        <path class="e" d="M107.17,73.23l8.48-3.16c8.14-3.04,11.29-12.91,6.4-20.1L93.02,7.27c-3.27-4.82-9.28-6.97-14.87-5.32L9.62,22.11C2.98,24.06-1.08,30.75,.25,37.54l2.51,12.84c1.58,8.06,9.97,12.82,17.7,10.04l41.49-14.94c5.46-1.96,11.56-.2,15.12,4.38l14.83,19.05c3.6,4.62,9.78,6.37,15.27,4.32Z" />
                        <circle class="e" cx="252.03" cy="253.49" r="21.29" />
                        <circle class="d" cx="252.03" cy="253.49" r="10.37" />
                        <circle class="d" cx="361.74" cy="221.84" r="10.37" />
                    </g>
                </g>
            </svg>
        </button>
    `;

    document.body.appendChild(checkoutSection);
});
