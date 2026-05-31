package trabalhandoCalculos;

import java.util.Scanner;

public class Tabuada {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Digite um número inteiro para calcular a tabuada:");
        int numero = in.nextInt();

        System.out.println("Tabuada do " + numero + ":");
        for (int i = 1; i <= 10; i++) {
            int resultado = numero * i;
            System.out.println(numero + " x " + i + " = " + resultado);
        }
    }
}
