document.addEventListener("DOMContentLoaded", () => {
    console.log('Document is ready');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const transactionForm = document.getElementById('transaction-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;
            console.log('Login Form Submitted', {email, password});
            // Aqui você pode fazer a lógica de autenticação do usuário
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = registerForm.name.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            console.log('Register Form Submitted', {name, email, password});
            // Aqui você pode fazer a lógica de cadastro do usuário
        });
    }

    if (transactionForm) {
        transactionForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const type = transactionForm.type.value;
            const amount = transactionForm.amount.value;
            const categoy = transactionForm.category.value;
            const date = transactionForm.date.value;
            const description = transactionForm.description.value;
            console.log('Transaction Form Submitted', {type, amount, categoy, date, description});
            // Aqui você pode fazer a lógica de transação do usuário
        });
    }
});