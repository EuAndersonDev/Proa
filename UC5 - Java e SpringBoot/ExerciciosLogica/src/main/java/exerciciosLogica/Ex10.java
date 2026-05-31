package exerciciosLogica;
import java.util.Scanner;

public class Ex10 {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        double salario, aumento, novoSalario;

        System.out.print("Digite o salário atual: ");
        salario = in.nextDouble();

        aumento = salario * 0.15;
        novoSalario = salario + aumento;

        System.out.println("Aumento: R$ " + aumento);
        System.out.println("Novo salário: R$ " + novoSalario);
    }
}