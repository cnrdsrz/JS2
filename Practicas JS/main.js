

const myForm = (e) => {
    e.preventDefault();
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');

    numero1.value === numero2.value ? window.alert('Los números son iguales')
}
