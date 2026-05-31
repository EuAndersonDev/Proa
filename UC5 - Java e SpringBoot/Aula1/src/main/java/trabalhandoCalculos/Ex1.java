package trabalhandoCalculos;
import java.util.Scanner;
public class Ex1 {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int numero1 = 10;
        int numero2 = 20;

        System.out.println("Digite o primeiro número inteiro:");
        numero1 = in.nextInt();

        System.out.println("Digite o segundo número inteiro:");
        numero2 = in.nextInt();

        int soma = numero1 + numero2;

        System.out.println("O resultado da soma dos números é: " + soma);
    }
}
