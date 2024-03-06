function fibonacci(n) {
    let fibo = [0, 1], i = 2;

    while (fibo[i - 1] + fibo[i - 2] <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    i--;
    fibo[i] === n ? console.log(`Pertence a sequência na casa nº ${i}`) : console.log('Não pertence a Sequência');
}

fibonacci(13); // Pertence a sequência na casa nº 7
fibonacci(14); // Não pertence a Sequência
fibonacci(21); // Pertence a sequência na casa nº 8
fibonacci(22); // Não pertence a Sequência
fibonacci(34); // Pertence a sequência na casa nº 9