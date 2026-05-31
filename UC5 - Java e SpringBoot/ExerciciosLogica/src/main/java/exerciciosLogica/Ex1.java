package exerciciosLogica;
import java.util.*;
public class Ex1 {
    public static void main(String[] args) {
        //Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Soma: " + (a + b));
        System.out.println("Subtração: " + (a - b));
        System.out.println("Multiplicação: " + (a * b));
        if (b != 0) {
            System.out.println("Divisão: " + (a / b));
        } else {
            System.out.println("Divisão: Não é possível dividir por zero.");
        }

    }
}
