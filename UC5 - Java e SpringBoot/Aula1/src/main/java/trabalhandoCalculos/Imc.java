package trabalhandoCalculos;
import java.util.Scanner;
public class Imc {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        float peso;
        float altura;

        System.out.println("Digite o peso em kg:");
        peso = in.nextFloat();
        System.out.println("Digite a altura em metros:");
        altura = in.nextFloat();

        float imc = peso / (altura * altura);

        System.out.println("O IMC é: " + imc);
    }
}