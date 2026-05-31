package exerciciosLogica;

import java.util.Scanner;

public class Ex2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double raio, area, perimetro;

        System.out.print("Digite o raio do círculo: ");
        raio = in.nextDouble();

        area = 3.14 * raio * raio;
        perimetro = 2 * 3.14 * raio;

        System.out.println("Área = " + area);
        System.out.println("Perímetro = " + perimetro);
    }
}