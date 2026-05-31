
package exerciciosLogica;
import java.util.Scanner;

public class Ex6 {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n1, n2;

        System.out.print("Digite o primeiro número inteiro: ");
        n1 = in.nextInt();
        System.out.print("Digite o segundo número inteiro: ");
        n2 = in.nextInt();

        int n3 = n1;
        n1 = n2;
        n2 = n3;

        System.out.println("Após a troca, o primeiro número é: " + n1);
        System.out.println("Após a troca, o segundo número é: " + n2);
    }
}