import java.util.*;

public class EulerProject {
    public static void main(String[] args) {

        long result = sumAllPrimesBelow(10);
        System.out.println("The answer is: " + result);
    }

    // https://projecteuler.net/problem=10
    private static long sumAllPrimesBelow(long n) { //10 -> 17

        long sum = 0;
        for (long i = 2; i < n; i++) {             // i = 10
            if (isPrime(i)) sum += i;            // sum = 17
        }
        return sum;                               // 17
    }

    private static boolean isPrime2(int n) {
        for (int i = 2; i <= n/2; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }


    // https://projecteuler.net/problem=17
    private static int numberLetterCountsFromOneTo(int n) {
        String thousand = "thousand";
        String hundred = "hundred";
        String and = "and";
        String ty = "ty";
        String teen = "teen";

        return 0;

        // Map<Integer, String> numToLetters = Map.of(
        //     1, "one",
        //     2, "two",
        //     3, "three",
        //     4, "four",
        //     5, "five",
        //     6, "six",
        //     7, "seven",
        //     8, "eight",
        //     9, "nine",
        //     10, "ten",
        //     11, "eleven",
        //     12, "twelve");

        // Map<Integer, String> oddPrefixes = Map.of(
        //     13, "thir",
        //     15, "fif",
        //     18, "eigh",
        //     20, "twen",
        //     30, "thir",
        //     40, "for",
        //     50, "fif"
        // );

        // int letterCount = 0;
        // for (int i = 1; i <= 1000; i++) {
        //     if (i <= 12) {
        //         letterCount += numToLetters.get(i).length();
        //     } else {
        //         if (i <= 19) {
        //             if (oddPrefixes.keys().contains(i)) {
        //                 letterCount += (oddPrefixes(i).length() + teen.length());
        //             } else {
        //                 int lastDigit = getLastDigit(i);
        //                 letterCount += (numToLetters.get(lastDigit).length() + teen.length());
        //             }
        //         } else if (i <= 99) {
        //             if (oddPrefixes.keys().contains(i)) {
        //                 letterCount += (oddPrefixes(i).length() + ty.length());
        //             } else {
        //                 int lastDigit = getLastDigit(i);
        //                 letterCount += ( numToLetters.get(lastDigit).length());
        //             }
        //         } else {

        //         }
        //     }
        // }
    }

    private static int getFirstDigit(int n) {
        return Character.getNumericValue(String.valueOf(n).charAt(0));
    }

    private static int getLastDigit(int n) {
        String number = String.valueOf(n);
        return Character.getNumericValue(number.charAt(number.length() - 1));
    }

    // https://projecteuler.net/problem=7
    private static long findTheNthPrime(int n) { // 6. expected: 13
        int nthPrime = 0; 
        long number = 1;
        while (nthPrime <= n) {          // 5 < 6
            number++;                   // 13  
            if (isPrime(number)) {      // 
                nthPrime++;             // 6
            }
        }
        return number;                  //
    }

    // https://projecteuler.net/problem=6
    private static long sumSquareDifferenceOfNumbersOneTo(int n) { // 3. expected: 22
        long sum = 0; 
        long sumOfSquares = 0;

        for (long i = 1; i <= n; i++) {         // i = 4
            sum += i;                           // 6
            sumOfSquares += i*i;                // 14
        }

        long squareOfSum = sum*sum;             // 6*6 = 36
        return squareOfSum - sumOfSquares;      // 36 - 14 = 22
    }

    // https://projecteuler.net/problem=5
    private static int findSmallestNumberEvenlyDivisiblebyAllNumbersFromOneTo(int n) { 
        int answer = n;                     // answer = 3
        for (int i = 1; i <= n; i++) {      // i = 1; i <=3; 
            if (answer % i != 0) {          // 6 % 4 =  0   
                answer++;                   // 6
                i = 1;                      // 
            }
        }
        return answer;                      // 6
    }


    // https://projecteuler.net/problem=4
    // palindrome numbers 91 X 99 = 9009 - largest palindrome from the product of two 2-digit numbers
    private static Integer largestPalindromeOfProductOfTwoThreeDigitNumbers() {
        
        int answer = 0;
        for (int x = 100; x < 1000; x++) {
            for (int y = 100; y < 1000; y++) {
                int product = x * y;
                if (isPalindrome(product) && product > answer) answer = product;
            }
        }
        return answer;
    }

    private static boolean isPalindrome(int n) {
        String numberString = String.valueOf(n);
        int length = numberString.length();
        if (length % 2 == 0) {
            int front = 0; 
            int back = length - 1;
            while (front < back) {
                if (numberString.charAt(front) != numberString.charAt(back)) {
                    return false;
                }
                front++;
                back--;
            }
            System.out.println("A palindrome was found: " + n);
            return true;
        }
        return false;
    }

    // 3. https://projecteuler.net/problem=3
    // prime factors of 13195 are 5, 7, 13, 29
    // largest prime factor of 600851475143
    // long n = 600851475143L;
    private static long largestPrimeFactorOf(long n) {
        // n = 13195 / 2 = 6597
        for (long potenitalFactor = n / 2; potenitalFactor > 1; potenitalFactor--) {
            boolean isFactor = n % potenitalFactor == 0;
            boolean isPrime = isPrime(potenitalFactor);
            if (isFactor && isPrime) {
                return potenitalFactor;
            }
            System.out.print(potenitalFactor);
            System.out.print(": " + isFactor);
            System.out.println(": " + isPrime);

        }
        return 1;
    }

    private static boolean isPrime(long number) {
        for (long i = 2; i <= number/2; i++) {
            if (number % i == 0) return false;
        }
        return true;
    }

}
