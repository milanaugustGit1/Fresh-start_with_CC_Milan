/*
### 3️⃣ Print all even numbers between 1 and 20

Output:

```
2 4 6 8 10 12 14 16 18 20

```

Hint: `%` exists for a reason.
*/
for(let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}