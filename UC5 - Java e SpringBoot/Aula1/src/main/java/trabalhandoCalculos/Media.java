package trabalhandoCalculos;

import java.util.Scanner;

public class Media {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.println("Digite a primeira nota:");
        float nota1 = in.nextFloat();

        System.out.println("Digite a segunda nota:");
        float nota2 = in.nextFloat();

        System.out.println("Digite a terceira nota:");
        float nota3 = in.nextFloat();

        System.out.println("Digite a quarta nota:");
        float nota4 = in.nextFloat();

        float media = (nota1 + nota2 + nota3 + nota4) / 4;

        System.out.println("A média das notas é: " + media);
    }
}
