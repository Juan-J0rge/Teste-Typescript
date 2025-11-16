//converter tipos no TS
/**
 * primeiramente irei falar do namespace, quando declaramos 2 variaveis iguais no TS ele não aceita
 * não importa se os arquivos forem diferentes. Então tenhos q criar pastas, não no VSCODE, mas
 * pastas virtuais, no proprio arquivo.
 * 
 * dentro do namespace é necessario ';'
 */

namespace casting {
    let idade: any = 20;
    //conversão - idade as number
    (idade as number);
    (idade as string);
    (idade as string[]);

    let nome: string = 35 as unknown as string;
}