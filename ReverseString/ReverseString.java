public class ReverseString {

    private static String reverse(String str) {
        char[] reversed = new char[str.length()];
        
        for (int i = str.length() - 1, j = 0; i >= 0; i--, j++) {
            reversed[j] = str.charAt(i);
        }
        
        return new String(reversed);
    }
}
