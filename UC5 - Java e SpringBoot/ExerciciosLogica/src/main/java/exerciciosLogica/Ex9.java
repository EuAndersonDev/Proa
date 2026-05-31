package exerciciosLogica;
import java.util.Scanner;

public class Ex9 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int anos, meses, dias, totalDias;

        System.out.print("Digite a quantidade de anos: ");
        anos = in.nextInt();

        System.out.print("Digite a quantidade de meses: ");
        meses = in.nextInt();

        System.out.print("Digite a quantidade de dias: ");
        dias = in.nextInt();

        totalDias = (anos * 365) + (meses * 30) + dias;

        System.out.println("Você tem aproximadamente " + totalDias + " dias de vida.");

    }
}