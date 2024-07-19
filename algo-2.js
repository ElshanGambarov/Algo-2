document.getElementById('calculateBtn').addEventListener('click', function() {
    const countOfThreeDigitNumbersEndingInZero = countThreeDigitNumbersEndingInZero();
    document.getElementById('result').innerText = `Sonu 0 ilə bitən 3 rəqəmli ədədlərin sayı: ${countOfThreeDigitNumbersEndingInZero}`;
});

function countThreeDigitNumbersEndingInZero() {
    let count = 0;
    for (let i = 100; i < 1000; i++) {
        if (i % 10 === 0) {
            count++;
        }
    }
    return count;
}