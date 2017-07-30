import java.util.Scanner;
import java.lang.Math.*;

public class rod_cut
{
    public static void main(String []args)
    {
       
        functions function=new functions();
        function.get_Pieces();
        function.get_Revenue();
        function.Print_Revenue();
        function.calculateOverallRevenue();
        function.printResult();

    }
       
}

class functions
{
    int Total_pieces;
    int[] Revenue = new int[1000];
    int[] overallRevenue=new int[5001];
    Scanner scan = new Scanner(System.in);
    int[] arr = new int[2];

    public void get_Pieces()
    {
        System.out.println("Hii,Please enter the number of pieces in which rod could be cut");
        this.Total_pieces= this.scan.nextInt();
    }

    public void get_Revenue()
    {
        for(int i = 1 ; i <= this.Total_pieces ; i++)
        {
            System.out.println("Enter the Revenue for piece of length  " + i);
            this.Revenue[i]= this.scan.nextInt();
        }
    }

    public void Print_Revenue()
    {
        System.out.println("The values are:");
        for(int i = 1 ; i <= this.Total_pieces ; i++)
        {
            System.out.println(i+"---"+this.Revenue[i]+"\n");
        }
    }

    public void calculateOverallRevenue()
    {
        this.Revenue[0]=0;
        for(int i = 0 ; i <= Math.floor((this.Total_pieces)/2) ; i++)
        {
            this.overallRevenue[i]=this.Revenue[i] + this.Revenue[this.Total_pieces - i];
        }
    }

    public int[] calculateMaxRevenue()
    {
        int max=this.overallRevenue[0];
        int parts=0;
        int[] array = new int[2];

        for(int j = 1 ; j <= Math.floor((this.Total_pieces)/2) ; j++)
        {
            if(max < this.overallRevenue[j])
            {
                max=this.overallRevenue[j];
                parts=j;
            }
        }
        array[0]=max;
        array[1]=parts;

        return array;
    }

    public void printResult()
    {
        int left_pieces=this.Total_pieces-this.arr[1];
        this.arr=this.calculateMaxRevenue();
        System.out.println("The maximum revenue received is " + this.arr[0]+" when the rod is cut into "+this.arr[1]+" and "+left_pieces+" parts " );
    }

}
