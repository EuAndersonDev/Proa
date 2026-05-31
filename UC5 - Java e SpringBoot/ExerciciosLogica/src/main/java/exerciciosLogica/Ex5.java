package exerciciosLogica;
import java.util.Scanner;

public class Ex5 {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double salarioBase, comissao, salarioLiquido;

        System.out.print("Digite o salário base: ");
        salarioBase = in.nextDouble();

        comissao = salarioBase * 0.05;

        salarioLiquido = salarioBase + comissao;

        System.out.println("Comissão = " + comissao);
        System.out.println("Salário líquido = " + salarioLiquido);
    }
}