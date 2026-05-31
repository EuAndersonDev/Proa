package exerciciosLogica;
import java.util.Scanner;

public class Ex4 {
    static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        double nota1, nota2, nota3, media;

        System.out.print("Digite a primeira nota: ");
        nota1 = in.nextDouble();

        System.out.print("Digite a segunda nota: ");
        nota2 = in.nextDouble();

        System.out.print("Digite a terceira nota: ");
        nota3 = in.nextDouble();

        media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

        System.out.println("Média ponderada = " + media);
    }
}