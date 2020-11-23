using System;
using System.Collections.Generic;
using System.Linq;

class Program
{

    static void Main(string[] args)
    {
        DobroCubo();
        CalculoMedia();
        CorridaDasTatarugas();
        UltrapassandoV();
        MundoDeOZ();

    }

    private static void MundoDeOZ()
    {
        string input = Console.ReadLine();
        var list = new List<string>();
        do
        {
            if (!string.IsNullOrWhiteSpace(input))
            {
                list.Add(input);
            }
            input = Console.ReadLine();
        } while (!string.IsNullOrWhiteSpace(input));

        var listSemDuplicidade = list.Distinct().ToArray();

        Console.WriteLine(listSemDuplicidade.Length);
    }

    private static void UltrapassandoV()
    {
        int R = int.Parse(Console.ReadLine());
        int V = 0;
        int soma = 0;
        int contaN = 0;

        while (V <= R)
        {
            V = int.Parse(Console.ReadLine());
        }

        while (soma <= V)
        {
            soma += R;
            R++;
            contaN++;
        }
        Console.WriteLine(contaN);
    }

    private static void CorridaDasTatarugas()
    {
        string line = Console.ReadLine();
        do
        {
            string[] tartarugas;
            if (!string.IsNullOrWhiteSpace(line))
            {
                tartarugas = Console.ReadLine().Split(" ");
                int velocidade = 0;

                foreach (var item in tartarugas)
                {
                    if (Int32.Parse(item) > velocidade)
                        velocidade = Int32.Parse(item);
                }

                if (velocidade < 10)
                {
                    Console.WriteLine(1);
                }
                else if (velocidade >= 10 && velocidade < 20)
                {
                    Console.WriteLine(2);
                }
                else
                {
                    Console.WriteLine(3);
                }
            }
            line = Console.ReadLine();
        } while (!string.IsNullOrWhiteSpace(line));
    }

    private static void CalculoMedia()
    {
        int count = 0;
        double media = 0;
        do
        {
            double nota = double.Parse(Console.ReadLine());
            if (nota < 0 || nota > 10)
            {
                Console.WriteLine("nota invalida");
            }
            else
            {
                count++;
                media += nota;
            }
        } while (count < 2);

        Console.WriteLine("media = " + (media / 2).ToString("N2"));
    }

    private static void DobroCubo()
    {
        int input = int.Parse(Console.ReadLine());

        for (int i = 1; i <= input; i++)
        {
            var dobro = i * i;
            var cubo = dobro * i;
            Console.WriteLine(i + " " + dobro + " " + cubo);
        }
    }

}