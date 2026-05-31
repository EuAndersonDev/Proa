package exerciciosLogica;
import java.util.Scanner;

public class Ex7 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        double deposito, taxa, montante = 0;

        System.out.print("Digite o valor do depósito mensal: ");
        deposito = in.nextDouble();

        System.out.print("Digite a taxa de juros mensal (%): ");
        taxa = in.nextDouble() / 100;

        for (int i = 1; i <= 12; i++) {
            montante = (montante + deposito) * (1 + taxa);
        }

        System.out.println("Montante após 12 meses: R$ " + montante);
    }
}