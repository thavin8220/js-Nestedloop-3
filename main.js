let a;
let c;
let i,j;
for(i=1;i<=5;i++){
    a=65;
    for(j=1;j<=i;j++){
        c=String.fromCharCode(a);
        a++
       document.write(c)
    }
    document.write("<br>")
}




