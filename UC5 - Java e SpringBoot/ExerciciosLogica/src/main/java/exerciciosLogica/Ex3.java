package exerciciosLogica;
import java.util.Scanner;

public class Ex3 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        double base, altura, area;

        System.out.print("Digite a base do triângulo: ");
        base = in.nextDouble();

        System.out.print("Digite a altura do triângulo: ");
        altura = in.nextDouble();

        area = (base * altura) / 2;

        System.out.println("Área do triângulo = " + area);
    }
}