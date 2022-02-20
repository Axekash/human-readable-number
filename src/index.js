module.exports = function toReadable (number) {
  
    const array = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
        'thirty',
        'thirty one',
        'thirty two',
        'thirty three',
        'thirty four',
        'thirty five',
        'thirty six',
        'thirty seven',
        'thirty eight',
        'thirty nine',
        'forty',
        'forty one',
        'forty two',
        'forty three',
        'forty four',
        'forty five',
        'forty six',
        'forty seven',
        'forty eight',
        'forty nine',
        'fifty',
        'fifty one',
        'fifty two',
        'fifty three',
        'fifty four',
        'fifty five',
        'fifty six',
        'fifty seven',
        'fifty eight',
        'fifty nine',
        'sixty',
        'sixty one',
        'sixty two',
        'sixty three',
        'sixty four',
        'sixty five',
        'sixty six',
        'sixty seven',
        'sixty eight',
        'sixty nine',
        'seventy',
        'seventy one',
        'seventy two',
        'seventy three',
        'seventy four',
        'seventy five',
        'seventy six',
        'seventy seven',
        'seventy eight',
        'seventy nine',
        'eighty',
        'eighty one',
        'eighty two',
        'eighty three',
        'eighty four',
        'eighty five',
        'eighty six',
        'eighty seven',
        'eighty eight',
        'eighty nine',
        'ninety',
        'ninety one',
        'ninety two',
        'ninety three',
        'ninety four',
        'ninety five',
        'ninety six',
        'ninety seven',
        'ninety eight',
        'ninety nine',
        'one hundred',
        'one hundred one',
        'one hundred two',
        'one hundred three',
        'one hundred four',
        'one hundred five',
        'one hundred six',
        'one hundred seven',
        'one hundred eight',
        'one hundred nine',
        'one hundred ten',
        'one hundred eleven',
        'one hundred twelve',
        'one hundred thirteen',
        'one hundred fourteen',
        'one hundred fifteen',
        'one hundred sixteen',
        'one hundred seventeen',
        'one hundred eighteen',
        'one hundred nineteen',
        'one hundred twenty',
        'one hundred twenty one',
        'one hundred twenty two',
        'one hundred twenty three',
        'one hundred twenty four',
        'one hundred twenty five',
        'one hundred twenty six',
        'one hundred twenty seven',
        'one hundred twenty eight',
        'one hundred twenty nine',
        'one hundred thirty',
        'one hundred thirty one',
        'one hundred thirty two',
        'one hundred thirty three',
        'one hundred thirty four',
        'one hundred thirty five',
        'one hundred thirty six',
        'one hundred thirty seven',
        'one hundred thirty eight',
        'one hundred thirty nine',
        'one hundred forty',
        'one hundred forty one',
        'one hundred forty two',
        'one hundred forty three',
        'one hundred forty four',
        'one hundred forty five',
        'one hundred forty six',
        'one hundred forty seven',
        'one hundred forty eight',
        'one hundred forty nine',
        'one hundred fifty',
        'one hundred fifty one',
        'one hundred fifty two',
        'one hundred fifty three',
        'one hundred fifty four',
        'one hundred fifty five',
        'one hundred fifty six',
        'one hundred fifty seven',
        'one hundred fifty eight',
        'one hundred fifty nine',
        'one hundred sixty',
        'one hundred sixty one',
        'one hundred sixty two',
        'one hundred sixty three',
        'one hundred sixty four',
        'one hundred sixty five',
        'one hundred sixty six',
        'one hundred sixty seven',
        'one hundred sixty eight',
        'one hundred sixty nine',
        'one hundred seventy',
        'one hundred seventy one',
        'one hundred seventy two',
        'one hundred seventy three',
        'one hundred seventy four',
        'one hundred seventy five',
        'one hundred seventy six',
        'one hundred seventy seven',
        'one hundred seventy eight',
        'one hundred seventy nine',
        'one hundred eighty',
        'one hundred eighty one',
        'one hundred eighty two',
        'one hundred eighty three',
        'one hundred eighty four',
        'one hundred eighty five',
        'one hundred eighty six',
        'one hundred eighty seven',
        'one hundred eighty eight',
        'one hundred eighty nine',
        'one hundred ninety',
        'one hundred ninety one',
        'one hundred ninety two',
        'one hundred ninety three',
        'one hundred ninety four',
        'one hundred ninety five',
        'one hundred ninety six',
        'one hundred ninety seven',
        'one hundred ninety eight',
        'one hundred ninety nine',
        'two hundred',
        'two hundred one',
        'two hundred two',
        'two hundred three',
        'two hundred four',
        'two hundred five',
        'two hundred six',
        'two hundred seven',
        'two hundred eight',
        'two hundred nine',
        'two hundred ten',
        'two hundred eleven',
        'two hundred twelve',
        'two hundred thirteen',
        'two hundred fourteen',
        'two hundred fifteen',
        'two hundred sixteen',
        'two hundred seventeen',
        'two hundred eighteen',
        'two hundred nineteen',
        'two hundred twenty',
        'two hundred twenty one',
        'two hundred twenty two',
        'two hundred twenty three',
        'two hundred twenty four',
        'two hundred twenty five',
        'two hundred twenty six',
        'two hundred twenty seven',
        'two hundred twenty eight',
        'two hundred twenty nine',
        'two hundred thirty',
        'two hundred thirty one',
        'two hundred thirty two',
        'two hundred thirty three',
        'two hundred thirty four',
        'two hundred thirty five',
        'two hundred thirty six',
        'two hundred thirty seven',
        'two hundred thirty eight',
        'two hundred thirty nine',
        'two hundred forty',
        'two hundred forty one',
        'two hundred forty two',
        'two hundred forty three',
        'two hundred forty four',
        'two hundred forty five',
        'two hundred forty six',
        'two hundred forty seven',
        'two hundred forty eight',
        'two hundred forty nine',
        'two hundred fifty',
        'two hundred fifty one',
        'two hundred fifty two',
        'two hundred fifty three',
        'two hundred fifty four',
        'two hundred fifty five',
        'two hundred fifty six',
        'two hundred fifty seven',
        'two hundred fifty eight',
        'two hundred fifty nine',
        'two hundred sixty',
        'two hundred sixty one',
        'two hundred sixty two',
        'two hundred sixty three',
        'two hundred sixty four',
        'two hundred sixty five',
        'two hundred sixty six',
        'two hundred sixty seven',
        'two hundred sixty eight',
        'two hundred sixty nine',
        'two hundred seventy',
        'two hundred seventy one',
        'two hundred seventy two',
        'two hundred seventy three',
        'two hundred seventy four',
        'two hundred seventy five',
        'two hundred seventy six',
        'two hundred seventy seven',
        'two hundred seventy eight',
        'two hundred seventy nine',
        'two hundred eighty',
        'two hundred eighty one',
        'two hundred eighty two',
        'two hundred eighty three',
        'two hundred eighty four',
        'two hundred eighty five',
        'two hundred eighty six',
        'two hundred eighty seven',
        'two hundred eighty eight',
        'two hundred eighty nine',
        'two hundred ninety',
        'two hundred ninety one',
        'two hundred ninety two',
        'two hundred ninety three',
        'two hundred ninety four',
        'two hundred ninety five',
        'two hundred ninety six',
        'two hundred ninety seven',
        'two hundred ninety eight',
        'two hundred ninety nine',
        'three hundred',
        'three hundred one',
        'three hundred two',
        'three hundred three',
        'three hundred four',
        'three hundred five',
        'three hundred six',
        'three hundred seven',
        'three hundred eight',
        'three hundred nine',
        'three hundred ten',
        'three hundred eleven',
        'three hundred twelve',
        'three hundred thirteen',
        'three hundred fourteen',
        'three hundred fifteen',
        'three hundred sixteen',
        'three hundred seventeen',
        'three hundred eighteen',
        'three hundred nineteen',
        'three hundred twenty',
        'three hundred twenty one',
        'three hundred twenty two',
        'three hundred twenty three',
        'three hundred twenty four',
        'three hundred twenty five',
        'three hundred twenty six',
        'three hundred twenty seven',
        'three hundred twenty eight',
        'three hundred twenty nine',
        'three hundred thirty',
        'three hundred thirty one',
        'three hundred thirty two',
        'three hundred thirty three',
        'three hundred thirty four',
        'three hundred thirty five',
        'three hundred thirty six',
        'three hundred thirty seven',
        'three hundred thirty eight',
        'three hundred thirty nine',
        'three hundred forty',
        'three hundred forty one',
        'three hundred forty two',
        'three hundred forty three',
        'three hundred forty four',
        'three hundred forty five',
        'three hundred forty six',
        'three hundred forty seven',
        'three hundred forty eight',
        'three hundred forty nine',
        'three hundred fifty',
        'three hundred fifty one',
        'three hundred fifty two',
        'three hundred fifty three',
        'three hundred fifty four',
        'three hundred fifty five',
        'three hundred fifty six',
        'three hundred fifty seven',
        'three hundred fifty eight',
        'three hundred fifty nine',
        'three hundred sixty',
        'three hundred sixty one',
        'three hundred sixty two',
        'three hundred sixty three',
        'three hundred sixty four',
        'three hundred sixty five',
        'three hundred sixty six',
        'three hundred sixty seven',
        'three hundred sixty eight',
        'three hundred sixty nine',
        'three hundred seventy',
        'three hundred seventy one',
        'three hundred seventy two',
        'three hundred seventy three',
        'three hundred seventy four',
        'three hundred seventy five',
        'three hundred seventy six',
        'three hundred seventy seven',
        'three hundred seventy eight',
        'three hundred seventy nine',
        'three hundred eighty',
        'three hundred eighty one',
        'three hundred eighty two',
        'three hundred eighty three',
        'three hundred eighty four',
        'three hundred eighty five',
        'three hundred eighty six',
        'three hundred eighty seven',
        'three hundred eighty eight',
        'three hundred eighty nine',
        'three hundred ninety',
        'three hundred ninety one',
        'three hundred ninety two',
        'three hundred ninety three',
        'three hundred ninety four',
        'three hundred ninety five',
        'three hundred ninety six',
        'three hundred ninety seven',
        'three hundred ninety eight',
        'three hundred ninety nine',
        'four hundred',
        'four hundred one',
        'four hundred two',
        'four hundred three',
        'four hundred four',
        'four hundred five',
        'four hundred six',
        'four hundred seven',
        'four hundred eight',
        'four hundred nine',
        'four hundred ten',
        'four hundred eleven',
        'four hundred twelve',
        'four hundred thirteen',
        'four hundred fourteen',
        'four hundred fifteen',
        'four hundred sixteen',
        'four hundred seventeen',
        'four hundred eighteen',
        'four hundred nineteen',
        'four hundred twenty',
        'four hundred twenty one',
        'four hundred twenty two',
        'four hundred twenty three',
        'four hundred twenty four',
        'four hundred twenty five',
        'four hundred twenty six',
        'four hundred twenty seven',
        'four hundred twenty eight',
        'four hundred twenty nine',
        'four hundred thirty',
        'four hundred thirty one',
        'four hundred thirty two',
        'four hundred thirty three',
        'four hundred thirty four',
        'four hundred thirty five',
        'four hundred thirty six',
        'four hundred thirty seven',
        'four hundred thirty eight',
        'four hundred thirty nine',
        'four hundred forty',
        'four hundred forty one',
        'four hundred forty two',
        'four hundred forty three',
        'four hundred forty four',
        'four hundred forty five',
        'four hundred forty six',
        'four hundred forty seven',
        'four hundred forty eight',
        'four hundred forty nine',
        'four hundred fifty',
        'four hundred fifty one',
        'four hundred fifty two',
        'four hundred fifty three',
        'four hundred fifty four',
        'four hundred fifty five',
        'four hundred fifty six',
        'four hundred fifty seven',
        'four hundred fifty eight',
        'four hundred fifty nine',
        'four hundred sixty',
        'four hundred sixty one',
        'four hundred sixty two',
        'four hundred sixty three',
        'four hundred sixty four',
        'four hundred sixty five',
        'four hundred sixty six',
        'four hundred sixty seven',
        'four hundred sixty eight',
        'four hundred sixty nine',
        'four hundred seventy',
        'four hundred seventy one',
        'four hundred seventy two',
        'four hundred seventy three',
        'four hundred seventy four',
        'four hundred seventy five',
        'four hundred seventy six',
        'four hundred seventy seven',
        'four hundred seventy eight',
        'four hundred seventy nine',
        'four hundred eighty',
        'four hundred eighty one',
        'four hundred eighty two',
        'four hundred eighty three',
        'four hundred eighty four',
        'four hundred eighty five',
        'four hundred eighty six',
        'four hundred eighty seven',
        'four hundred eighty eight',
        'four hundred eighty nine',
        'four hundred ninety',
        'four hundred ninety one',
        'four hundred ninety two',
        'four hundred ninety three',
        'four hundred ninety four',
        'four hundred ninety five',
        'four hundred ninety six',
        'four hundred ninety seven',
        'four hundred ninety eight',
        'four hundred ninety nine',
        'five hundred',
        'five hundred one',
        'five hundred two',
        'five hundred three',
        'five hundred four',
        'five hundred five',
        'five hundred six',
        'five hundred seven',
        'five hundred eight',
        'five hundred nine',
        'five hundred ten',
        'five hundred eleven',
        'five hundred twelve',
        'five hundred thirteen',
        'five hundred fourteen',
        'five hundred fifteen',
        'five hundred sixteen',
        'five hundred seventeen',
        'five hundred eighteen',
        'five hundred nineteen',
        'five hundred twenty',
        'five hundred twenty one',
        'five hundred twenty two',
        'five hundred twenty three',
        'five hundred twenty four',
        'five hundred twenty five',
        'five hundred twenty six',
        'five hundred twenty seven',
        'five hundred twenty eight',
        'five hundred twenty nine',
        'five hundred thirty',
        'five hundred thirty one',
        'five hundred thirty two',
        'five hundred thirty three',
        'five hundred thirty four',
        'five hundred thirty five',
        'five hundred thirty six',
        'five hundred thirty seven',
        'five hundred thirty eight',
        'five hundred thirty nine',
        'five hundred forty',
        'five hundred forty one',
        'five hundred forty two',
        'five hundred forty three',
        'five hundred forty four',
        'five hundred forty five',
        'five hundred forty six',
        'five hundred forty seven',
        'five hundred forty eight',
        'five hundred forty nine',
        'five hundred fifty',
        'five hundred fifty one',
        'five hundred fifty two',
        'five hundred fifty three',
        'five hundred fifty four',
        'five hundred fifty five',
        'five hundred fifty six',
        'five hundred fifty seven',
        'five hundred fifty eight',
        'five hundred fifty nine',
        'five hundred sixty',
        'five hundred sixty one',
        'five hundred sixty two',
        'five hundred sixty three',
        'five hundred sixty four',
        'five hundred sixty five',
        'five hundred sixty six',
        'five hundred sixty seven',
        'five hundred sixty eight',
        'five hundred sixty nine',
        'five hundred seventy',
        'five hundred seventy one',
        'five hundred seventy two',
        'five hundred seventy three',
        'five hundred seventy four',
        'five hundred seventy five',
        'five hundred seventy six',
        'five hundred seventy seven',
        'five hundred seventy eight',
        'five hundred seventy nine',
        'five hundred eighty',
        'five hundred eighty one',
        'five hundred eighty two',
        'five hundred eighty three',
        'five hundred eighty four',
        'five hundred eighty five',
        'five hundred eighty six',
        'five hundred eighty seven',
        'five hundred eighty eight',
        'five hundred eighty nine',
        'five hundred ninety',
        'five hundred ninety one',
        'five hundred ninety two',
        'five hundred ninety three',
        'five hundred ninety four',
        'five hundred ninety five',
        'five hundred ninety six',
        'five hundred ninety seven',
        'five hundred ninety eight',
        'five hundred ninety nine',
        'six hundred',
        'six hundred one',
        'six hundred two',
        'six hundred three',
        'six hundred four',
        'six hundred five',
        'six hundred six',
        'six hundred seven',
        'six hundred eight',
        'six hundred nine',
        'six hundred ten',
        'six hundred eleven',
        'six hundred twelve',
        'six hundred thirteen',
        'six hundred fourteen',
        'six hundred fifteen',
        'six hundred sixteen',
        'six hundred seventeen',
        'six hundred eighteen',
        'six hundred nineteen',
        'six hundred twenty',
        'six hundred twenty one',
        'six hundred twenty two',
        'six hundred twenty three',
        'six hundred twenty four',
        'six hundred twenty five',
        'six hundred twenty six',
        'six hundred twenty seven',
        'six hundred twenty eight',
        'six hundred twenty nine',
        'six hundred thirty',
        'six hundred thirty one',
        'six hundred thirty two',
        'six hundred thirty three',
        'six hundred thirty four',
        'six hundred thirty five',
        'six hundred thirty six',
        'six hundred thirty seven',
        'six hundred thirty eight',
        'six hundred thirty nine',
        'six hundred forty',
        'six hundred forty one',
        'six hundred forty two',
        'six hundred forty three',
        'six hundred forty four',
        'six hundred forty five',
        'six hundred forty six',
        'six hundred forty seven',
        'six hundred forty eight',
        'six hundred forty nine',
        'six hundred fifty',
        'six hundred fifty one',
        'six hundred fifty two',
        'six hundred fifty three',
        'six hundred fifty four',
        'six hundred fifty five',
        'six hundred fifty six',
        'six hundred fifty seven',
        'six hundred fifty eight',
        'six hundred fifty nine',
        'six hundred sixty',
        'six hundred sixty one',
        'six hundred sixty two',
        'six hundred sixty three',
        'six hundred sixty four',
        'six hundred sixty five',
        'six hundred sixty six',
        'six hundred sixty seven',
        'six hundred sixty eight',
        'six hundred sixty nine',
        'six hundred seventy',
        'six hundred seventy one',
        'six hundred seventy two',
        'six hundred seventy three',
        'six hundred seventy four',
        'six hundred seventy five',
        'six hundred seventy six',
        'six hundred seventy seven',
        'six hundred seventy eight',
        'six hundred seventy nine',
        'six hundred eighty',
        'six hundred eighty one',
        'six hundred eighty two',
        'six hundred eighty three',
        'six hundred eighty four',
        'six hundred eighty five',
        'six hundred eighty six',
        'six hundred eighty seven',
        'six hundred eighty eight',
        'six hundred eighty nine',
        'six hundred ninety',
        'six hundred ninety one',
        'six hundred ninety two',
        'six hundred ninety three',
        'six hundred ninety four',
        'six hundred ninety five',
        'six hundred ninety six',
        'six hundred ninety seven',
        'six hundred ninety eight',
        'six hundred ninety nine',
        'seven hundred',
        'seven hundred one',
        'seven hundred two',
        'seven hundred three',
        'seven hundred four',
        'seven hundred five',
        'seven hundred six',
        'seven hundred seven',
        'seven hundred eight',
        'seven hundred nine',
        'seven hundred ten',
        'seven hundred eleven',
        'seven hundred twelve',
        'seven hundred thirteen',
        'seven hundred fourteen',
        'seven hundred fifteen',
        'seven hundred sixteen',
        'seven hundred seventeen',
        'seven hundred eighteen',
        'seven hundred nineteen',
        'seven hundred twenty',
        'seven hundred twenty one',
        'seven hundred twenty two',
        'seven hundred twenty three',
        'seven hundred twenty four',
        'seven hundred twenty five',
        'seven hundred twenty six',
        'seven hundred twenty seven',
        'seven hundred twenty eight',
        'seven hundred twenty nine',
        'seven hundred thirty',
        'seven hundred thirty one',
        'seven hundred thirty two',
        'seven hundred thirty three',
        'seven hundred thirty four',
        'seven hundred thirty five',
        'seven hundred thirty six',
        'seven hundred thirty seven',
        'seven hundred thirty eight',
        'seven hundred thirty nine',
        'seven hundred forty',
        'seven hundred forty one',
        'seven hundred forty two',
        'seven hundred forty three',
        'seven hundred forty four',
        'seven hundred forty five',
        'seven hundred forty six',
        'seven hundred forty seven',
        'seven hundred forty eight',
        'seven hundred forty nine',
        'seven hundred fifty',
        'seven hundred fifty one',
        'seven hundred fifty two',
        'seven hundred fifty three',
        'seven hundred fifty four',
        'seven hundred fifty five',
        'seven hundred fifty six',
        'seven hundred fifty seven',
        'seven hundred fifty eight',
        'seven hundred fifty nine',
        'seven hundred sixty',
        'seven hundred sixty one',
        'seven hundred sixty two',
        'seven hundred sixty three',
        'seven hundred sixty four',
        'seven hundred sixty five',
        'seven hundred sixty six',
        'seven hundred sixty seven',
        'seven hundred sixty eight',
        'seven hundred sixty nine',
        'seven hundred seventy',
        'seven hundred seventy one',
        'seven hundred seventy two',
        'seven hundred seventy three',
        'seven hundred seventy four',
        'seven hundred seventy five',
        'seven hundred seventy six',
        'seven hundred seventy seven',
        'seven hundred seventy eight',
        'seven hundred seventy nine',
        'seven hundred eighty',
        'seven hundred eighty one',
        'seven hundred eighty two',
        'seven hundred eighty three',
        'seven hundred eighty four',
        'seven hundred eighty five',
        'seven hundred eighty six',
        'seven hundred eighty seven',
        'seven hundred eighty eight',
        'seven hundred eighty nine',
        'seven hundred ninety',
        'seven hundred ninety one',
        'seven hundred ninety two',
        'seven hundred ninety three',
        'seven hundred ninety four',
        'seven hundred ninety five',
        'seven hundred ninety six',
        'seven hundred ninety seven',
        'seven hundred ninety eight',
        'seven hundred ninety nine',
        'eight hundred',
        'eight hundred one',
        'eight hundred two',
        'eight hundred three',
        'eight hundred four',
        'eight hundred five',
        'eight hundred six',
        'eight hundred seven',
        'eight hundred eight',
        'eight hundred nine',
        'eight hundred ten',
        'eight hundred eleven',
        'eight hundred twelve',
        'eight hundred thirteen',
        'eight hundred fourteen',
        'eight hundred fifteen',
        'eight hundred sixteen',
        'eight hundred seventeen',
        'eight hundred eighteen',
        'eight hundred nineteen',
        'eight hundred twenty',
        'eight hundred twenty one',
        'eight hundred twenty two',
        'eight hundred twenty three',
        'eight hundred twenty four',
        'eight hundred twenty five',
        'eight hundred twenty six',
        'eight hundred twenty seven',
        'eight hundred twenty eight',
        'eight hundred twenty nine',
        'eight hundred thirty',
        'eight hundred thirty one',
        'eight hundred thirty two',
        'eight hundred thirty three',
        'eight hundred thirty four',
        'eight hundred thirty five',
        'eight hundred thirty six',
        'eight hundred thirty seven',
        'eight hundred thirty eight',
        'eight hundred thirty nine',
        'eight hundred forty',
        'eight hundred forty one',
        'eight hundred forty two',
        'eight hundred forty three',
        'eight hundred forty four',
        'eight hundred forty five',
        'eight hundred forty six',
        'eight hundred forty seven',
        'eight hundred forty eight',
        'eight hundred forty nine',
        'eight hundred fifty',
        'eight hundred fifty one',
        'eight hundred fifty two',
        'eight hundred fifty three',
        'eight hundred fifty four',
        'eight hundred fifty five',
        'eight hundred fifty six',
        'eight hundred fifty seven',
        'eight hundred fifty eight',
        'eight hundred fifty nine',
        'eight hundred sixty',
        'eight hundred sixty one',
        'eight hundred sixty two',
        'eight hundred sixty three',
        'eight hundred sixty four',
        'eight hundred sixty five',
        'eight hundred sixty six',
        'eight hundred sixty seven',
        'eight hundred sixty eight',
        'eight hundred sixty nine',
        'eight hundred seventy',
        'eight hundred seventy one',
        'eight hundred seventy two',
        'eight hundred seventy three',
        'eight hundred seventy four',
        'eight hundred seventy five',
        'eight hundred seventy six',
        'eight hundred seventy seven',
        'eight hundred seventy eight',
        'eight hundred seventy nine',
        'eight hundred eighty',
        'eight hundred eighty one',
        'eight hundred eighty two',
        'eight hundred eighty three',
        'eight hundred eighty four',
        'eight hundred eighty five',
        'eight hundred eighty six',
        'eight hundred eighty seven',
        'eight hundred eighty eight',
        'eight hundred eighty nine',
        'eight hundred ninety',
        'eight hundred ninety one',
        'eight hundred ninety two',
        'eight hundred ninety three',
        'eight hundred ninety four',
        'eight hundred ninety five',
        'eight hundred ninety six',
        'eight hundred ninety seven',
        'eight hundred ninety eight',
        'eight hundred ninety nine',
        'nine hundred',
        'nine hundred one',
        'nine hundred two',
        'nine hundred three',
        'nine hundred four',
        'nine hundred five',
        'nine hundred six',
        'nine hundred seven',
        'nine hundred eight',
        'nine hundred nine',
        'nine hundred ten',
        'nine hundred eleven',
        'nine hundred twelve',
        'nine hundred thirteen',
        'nine hundred fourteen',
        'nine hundred fifteen',
        'nine hundred sixteen',
        'nine hundred seventeen',
        'nine hundred eighteen',
        'nine hundred nineteen',
        'nine hundred twenty',
        'nine hundred twenty one',
        'nine hundred twenty two',
        'nine hundred twenty three',
        'nine hundred twenty four',
        'nine hundred twenty five',
        'nine hundred twenty six',
        'nine hundred twenty seven',
        'nine hundred twenty eight',
        'nine hundred twenty nine',
        'nine hundred thirty',
        'nine hundred thirty one',
        'nine hundred thirty two',
        'nine hundred thirty three',
        'nine hundred thirty four',
        'nine hundred thirty five',
        'nine hundred thirty six',
        'nine hundred thirty seven',
        'nine hundred thirty eight',
        'nine hundred thirty nine',
        'nine hundred forty',
        'nine hundred forty one',
        'nine hundred forty two',
        'nine hundred forty three',
        'nine hundred forty four',
        'nine hundred forty five',
        'nine hundred forty six',
        'nine hundred forty seven',
        'nine hundred forty eight',
        'nine hundred forty nine',
        'nine hundred fifty',
        'nine hundred fifty one',
        'nine hundred fifty two',
        'nine hundred fifty three',
        'nine hundred fifty four',
        'nine hundred fifty five',
        'nine hundred fifty six',
        'nine hundred fifty seven',
        'nine hundred fifty eight',
        'nine hundred fifty nine',
        'nine hundred sixty',
        'nine hundred sixty one',
        'nine hundred sixty two',
        'nine hundred sixty three',
        'nine hundred sixty four',
        'nine hundred sixty five',
        'nine hundred sixty six',
        'nine hundred sixty seven',
        'nine hundred sixty eight',
        'nine hundred sixty nine',
        'nine hundred seventy',
        'nine hundred seventy one',
        'nine hundred seventy two',
        'nine hundred seventy three',
        'nine hundred seventy four',
        'nine hundred seventy five',
        'nine hundred seventy six',
        'nine hundred seventy seven',
        'nine hundred seventy eight',
        'nine hundred seventy nine',
        'nine hundred eighty',
        'nine hundred eighty one',
        'nine hundred eighty two',
        'nine hundred eighty three',
        'nine hundred eighty four',
        'nine hundred eighty five',
        'nine hundred eighty six',
        'nine hundred eighty seven',
        'nine hundred eighty eight',
        'nine hundred eighty nine',
        'nine hundred ninety',
        'nine hundred ninety one',
        'nine hundred ninety two',
        'nine hundred ninety three',
        'nine hundred ninety four',
        'nine hundred ninety five',
        'nine hundred ninety six',
        'nine hundred ninety seven',
        'nine hundred ninety eight',
        'nine hundred ninety nine'
    ]

switch(number) {
    case number:
        return array[number];
        break;
}

   /*  switch(number) {
        case 0: 
            return array[number];
            break;
        case 1: 
            return array[number];
            break;
            case 2: 
            return array[number];
            break;
            case 3: 
            return array[number];
            break;
            case 4: 
            return array[number];
            break;
            case 5: 
            return array[number];
            break;
            case 6: 
            return array[number];
            break;
            case 7: 
            return array[number];
            break;
            case 8: 
            return array[number];
            break;
            case 9: 
            return array[number];
            break;
            case 10: 
            return array[number];
            break;
            case 11: 
            return array[number];
            break;
            case 12: 
            return array[number];
            break;
            case 13: 
            return array[number];
            break;
            case 14: 
            return array[number];
            break;
            case 15: 
            return array[number];
            break;
            case 16: 
            return array[number];
            break;
            case 17: 
            return array[number];
            break;
            case 18: 
            return array[number];
            break;
            case 19: 
            return array[number];
            break;
            case 20: 
            return array[number];
            break;
            case 21: 
            return array[number];
            break;
            case 22: 
            return array[number];
            break;
            case 23: 
            return array[number];
            break;
            case 24: 
            return array[number];
            break;
            case 25: 
            return array[number];
            break;
            case 26: 
            return array[number];
            break;
            case 27: 
            return array[number];
            break;
            case 28: 
            return array[number];
            break;
            case 29: 
            return array[number];
            break;
            case 30: 
            return array[number];
            break;
            case 31: 
            return array[number];
            break;
            case 32: 
            return array[number];
            break;
            case 33: 
            return array[number];
            break;
            case 34: 
            return array[number];
            break;
            case 35: 
            return array[number];
            break;
            case 36: 
            return array[number];
            break;
            case 37: 
            return array[number];
            break;
            case 38: 
            return array[number];
            break;
            case 39: 
            return array[number];
            break;
            case 40: 
            return array[number];
            break;
            case 41: 
            return array[number];
            break;
            case 42: 
            return array[number];
            break;
            case 43: 
            return array[number];
            break;
            case 44: 
            return array[number];
            break;
            case 45: 
            return array[number];
            break;
            case 46: 
            return array[number];
            break;
            case 47: 
            return array[number];
            break;
            case 48: 
            return array[number];
            break;
            case 49: 
            return array[number];
            break;
            case 50: 
            return array[number];
            break;
            case 51: 
            return array[number];
            break;
            case 52: 
            return array[number];
            break;
            case 53: 
            return array[number];
            break;
            case 54: 
            return array[number];
            break;
            case 55: 
            return array[number];
            break;
            case 56: 
            return array[number];
            break;
            case 57: 
            return array[number];
            break;
            case 58: 
            return array[number];
            break;
            case 59: 
            return array[number];
            break;
            case 60: 
            return array[number];
            break;
            case 61: 
            return array[number];
            break;
            case 62: 
            return array[number];
            break;
            case 63: 
            return array[number];
            break;
            case 64: 
            return array[number];
            break;
            case 65: 
            return array[number];
            break;
            case 66: 
            return array[number];
            break;
            case 67: 
            return array[number];
            break;
            case 68: 
            return array[number];
            break;
            case 69: 
            return array[number];
            break;
            case 70: 
            return array[number];
            break;
            case 71: 
            return array[number];
            break;
            case 72: 
            return array[number];
            break;
            case 73: 
            return array[number];
            break;
            case 74: 
            return array[number];
            break;
            case 75: 
            return array[number];
            break;
            case 76: 
            return array[number];
            break;
            case 77: 
            return array[number];
            break;
            case 78: 
            return array[number];
            break;
            case 79: 
            return array[number];
            break;
            case 80: 
            return array[number];
            break;
            case 81: 
            return array[number];
            break;
            case 82: 
            return array[number];
            break;
            case 83: 
            return array[number];
            break;
            case 84: 
            return array[number];
            break;
            case 85: 
            return array[number];
            break;
            case 86: 
            return array[number];
            break;
            case 87: 
            return array[number];
            break;
            case 88: 
            return array[number];
            break;
            case 89: 
            return array[number];
            break;
            case 90: 
            return array[number];
            break;
            case 91: 
            return array[number];
            break;
            case 92: 
            return array[number];
            break;
            case 93: 
            return array[number];
            break;
            case 94: 
            return array[number];
            break;
            case 95: 
            return array[number];
            break;
            case 96: 
            return array[number];
            break;
            case 97: 
            return array[number];
            break;
            case 98: 
            return array[number];
            break;
            case 99: 
            return array[number];
            break;
            case 100: 
            return array[number];
            break;
            case 101: 
            return array[number];
            break;
            case 102: 
            return array[number];
            break;
            case 103: 
            return array[number];
            break;
            case 104: 
            return array[number];
            break;
            case 105: 
            return array[number];
            break;
            case 106: 
            return array[number];
            break;
            case 107: 
            return array[number];
            break;
            case 108: 
            return array[number];
            break;
            case 109: 
            return array[number];
            break;
            case 110: 
            return array[number];
            break;
            case 111: 
            return array[number];
            break;
            case 112: 
            return array[number];
            break;
            case 113: 
            return array[number];
            break;
            case 114: 
            return array[number];
            break;
            case 115: 
            return array[number];
            break;
            case 116: 
            return array[number];
            break;
            case 117: 
            return array[number];
            break;
            case 118: 
            return array[number];
            break;
            case 119: 
            return array[number];
            break;
            case 120: 
            return array[number];
            break;
            case 121: 
            return array[number];
            break;
            case 122: 
            return array[number];
            break;
            case 123: 
            return array[number];
            break;
            case 124: 
            return array[number];
            break;
            case 125: 
            return array[number];
            break;
            case 126: 
            return array[number];
            break;
            case 127: 
            return array[number];
            break;
            case 128: 
            return array[number];
            break;
            case 129: 
            return array[number];
            break;
            case 130: 
            return array[number];
            break;
            case 131: 
            return array[number];
            break;
            case 132: 
            return array[number];
            break;
            case 133: 
            return array[number];
            break;
            case 134: 
            return array[number];
            break;
            case 135: 
            return array[number];
            break;
            case 136: 
            return array[number];
            break;
            case 137: 
            return array[number];
            break;
            case 138: 
            return array[number];
            break;
            case 139: 
            return array[number];
            break;
            case 140: 
            return array[number];
            break;
            case 141: 
            return array[number];
            break;
            case 142: 
            return array[number];
            break;
            case 143: 
            return array[number];
            break;
            case 144: 
            return array[number];
            break;
            case 145: 
            return array[number];
            break;
            case 146: 
            return array[number];
            break;
            case 147: 
            return array[number];
            break;
            case 148: 
            return array[number];
            break;
            case 149: 
            return array[number];
            break;
            case 150: 
            return array[number];
            break;
            case 151: 
            return array[number];
            break;
            case 152: 
            return array[number];
            break;
            case 153: 
            return array[number];
            break;
            case 154: 
            return array[number];
            break;
            case 155: 
            return array[number];
            break;
            case 156: 
            return array[number];
            break;
            case 157: 
            return array[number];
            break;
            case 158: 
            return array[number];
            break;
            case 159: 
            return array[number];
            break;
            case 160: 
            return array[number];
            break;
            case 161: 
            return array[number];
            break;
            case 162: 
            return array[number];
            break;
            case 163: 
            return array[number];
            break;
            case 164: 
            return array[number];
            break;
            case 165: 
            return array[number];
            break;
            case 166: 
            return array[number];
            break;
            case 167: 
            return array[number];
            break;
            case 168: 
            return array[number];
            break;
            case 169: 
            return array[number];
            break;
            case 170: 
            return array[number];
            break;
            case 171: 
            return array[number];
            break;
            case 172: 
            return array[number];
            break;
            case 173: 
            return array[number];
            break;
            case 174: 
            return array[number];
            break;
            case 175: 
            return array[number];
            break;
            case 176: 
            return array[number];
            break;
            case 177: 
            return array[number];
            break;
            case 178: 
            return array[number];
            break;
            case 179: 
            return array[number];
            break;
            case 180: 
            return array[number];
            break;
            case 181: 
            return array[number];
            break;
            case 182: 
            return array[number];
            break;
            case 183: 
            return array[number];
            break;
            case 184: 
            return array[number];
            break;
            case 185: 
            return array[number];
            break;
            case 186: 
            return array[number];
            break;
            case 187: 
            return array[number];
            break;
            case 188: 
            return array[number];
            break;
            case 189: 
            return array[number];
            break;
            case 190: 
            return array[number];
            break;
            case 191: 
            return array[number];
            break;
            case 192: 
            return array[number];
            break;
            case 193: 
            return array[number];
            break;
            case 194: 
            return array[number];
            break;
            case 195: 
            return array[number];
            break;
            case 196: 
            return array[number];
            break;
            case 197: 
            return array[number];
            break;
            case 198: 
            return array[number];
            break;
            case 199: 
            return array[number];
            break;
            case 200: 
            return array[number];
            break;
            case 201: 
            return array[number];
            break;
            case 202: 
            return array[number];
            break;
            case 203: 
            return array[number];
            break;
            case 204: 
            return array[number];
            break;
            case 205: 
            return array[number];
            break;
            case 206: 
            return array[number];
            break;
            case 207: 
            return array[number];
            break;
            case 208: 
            return array[number];
            break;
            case 209: 
            return array[number];
            break;
            case 210: 
            return array[number];
            break;
            case 211: 
            return array[number];
            break;
            case 212: 
            return array[number];
            break;
            case 213: 
            return array[number];
            break;
            case 214: 
            return array[number];
            break;
            case 215: 
            return array[number];
            break;
            case 216: 
            return array[number];
            break;
            case 217: 
            return array[number];
            break;
            case 218: 
            return array[number];
            break;
            case 219: 
            return array[number];
            break;
            case 220: 
            return array[number];
            break;
            case 221: 
            return array[number];
            break;
            case 222: 
            return array[number];
            break;
            case 223: 
            return array[number];
            break;
            case 224: 
            return array[number];
            break;
            case 225: 
            return array[number];
            break;
            case 226: 
            return array[number];
            break;
            case 227: 
            return array[number];
            break;
            case 228: 
            return array[number];
            break;
            case 229: 
            return array[number];
            break;
            case 230: 
            return array[number];
            break;
            case 231: 
            return array[number];
            break;
            case 232: 
            return array[number];
            break;
            case 233: 
            return array[number];
            break;
            case 234: 
            return array[number];
            break;
            case 235: 
            return array[number];
            break;
            case 236: 
            return array[number];
            break;
            case 237: 
            return array[number];
            break;
            case 238: 
            return array[number];
            break;
            case 239: 
            return array[number];
            break;
            case 240: 
            return array[number];
            break;
            case 241: 
            return array[number];
            break;
            case 242: 
            return array[number];
            break;
            case 243: 
            return array[number];
            break;
            case 244: 
            return array[number];
            break;
            case 245: 
            return array[number];
            break;
            case 246: 
            return array[number];
            break;
            case 247: 
            return array[number];
            break;
            case 248: 
            return array[number];
            break;
            case 249: 
            return array[number];
            break;
            case 250: 
            return array[number];
            break;
            case 251: 
            return array[number];
            break;
            case 252: 
            return array[number];
            break;
            case 253: 
            return array[number];
            break;
            case 254: 
            return array[number];
            break;
            case 255: 
            return array[number];
            break;
            case 256: 
            return array[number];
            break;
            case 257: 
            return array[number];
            break;
            case 258: 
            return array[number];
            break;
            case 259: 
            return array[number];
            break;
            case 260: 
            return array[number];
            break;
            case 261: 
            return array[number];
            break;
            case 262: 
            return array[number];
            break;
            case 263: 
            return array[number];
            break;
            case 264: 
            return array[number];
            break;
            case 265: 
            return array[number];
            break;
            case 266: 
            return array[number];
            break;
            case 267: 
            return array[number];
            break;
            case 268: 
            return array[number];
            break;
            case 269: 
            return array[number];
            break;
            case 270: 
            return array[number];
            break;
            case 271: 
            return array[number];
            break;
            case 272: 
            return array[number];
            break;
            case 273: 
            return array[number];
            break;
            case 274: 
            return array[number];
            break;
            case 275: 
            return array[number];
            break;
            case 276: 
            return array[number];
            break;
            case 277: 
            return array[number];
            break;
            case 278: 
            return array[number];
            break;
            case 279: 
            return array[number];
            break;
            case 280: 
            return array[number];
            break;
            case 281: 
            return array[number];
            break;
            case 282: 
            return array[number];
            break;
            case 283: 
            return array[number];
            break;
            case 284: 
            return array[number];
            break;
            case 285: 
            return array[number];
            break;
            case 286: 
            return array[number];
            break;
            case 287: 
            return array[number];
            break;
            case 288: 
            return array[number];
            break;
            case 289: 
            return array[number];
            break;
            case 290: 
            return array[number];
            break;
            case 291: 
            return array[number];
            break;
            case 292: 
            return array[number];
            break;
            case 293: 
            return array[number];
            break;
            case 294: 
            return array[number];
            break;
            case 295: 
            return array[number];
            break;
            case 296: 
            return array[number];
            break;
            case 297: 
            return array[number];
            break;
            case 298: 
            return array[number];
            break;
            case 299: 
            return array[number];
            break;
            case 300: 
            return array[number];
            break;
            case 301: 
            return array[number];
            break;
            case 302: 
            return array[number];
            break;
            case 303: 
            return array[number];
            break;
            case 304: 
            return array[number];
            break;
            case 305: 
            return array[number];
            break;
            case 306: 
            return array[number];
            break;
            case 307: 
            return array[number];
            break;
            case 308: 
            return array[number];
            break;
            case 309: 
            return array[number];
            break;
            case 310: 
            return array[number];
            break;
            case 311: 
            return array[number];
            break;
            case 312: 
            return array[number];
            break;
            case 313: 
            return array[number];
            break;
            case 314: 
            return array[number];
            break;
            case 315: 
            return array[number];
            break;
            case 316: 
            return array[number];
            break;
            case 317: 
            return array[number];
            break;
            case 318: 
            return array[number];
            break;
            case 319: 
            return array[number];
            break;
            case 320: 
            return array[number];
            break;
            case 321: 
            return array[number];
            break;
            case 322: 
            return array[number];
            break;
            case 323: 
            return array[number];
            break;
            case 324: 
            return array[number];
            break;
            case 325: 
            return array[number];
            break;
            case 326: 
            return array[number];
            break;
            case 327: 
            return array[number];
            break;
            case 328: 
            return array[number];
            break;
            case 329: 
            return array[number];
            break;
            case 330: 
            return array[number];
            break;
            case 331: 
            return array[number];
            break;
            case 332: 
            return array[number];
            break;
            case 333: 
            return array[number];
            break;
            case 334: 
            return array[number];
            break;
            case 335: 
            return array[number];
            break;
            case 336: 
            return array[number];
            break;
            case 337: 
            return array[number];
            break;
            case 338: 
            return array[number];
            break;
            case 339: 
            return array[number];
            break;
            case 340: 
            return array[number];
            break;
            case 341: 
            return array[number];
            break;
            case 342: 
            return array[number];
            break;
            case 343: 
            return array[number];
            break;
            case 344: 
            return array[number];
            break;
            case 345: 
            return array[number];
            break;
            case 346: 
            return array[number];
            break;
            case 347: 
            return array[number];
            break;
            case 348: 
            return array[number];
            break;
            case 349: 
            return array[number];
            break;
            case 350: 
            return array[number];
            break;
            case 351: 
            return array[number];
            break;
            case 352: 
            return array[number];
            break;
            case 353: 
            return array[number];
            break;
            case 354: 
            return array[number];
            break;
            case 355: 
            return array[number];
            break;
            case 356: 
            return array[number];
            break;
            case 357: 
            return array[number];
            break;
            case 358: 
            return array[number];
            break;
            case 359: 
            return array[number];
            break;
            case 360: 
            return array[number];
            break;
            case 361: 
            return array[number];
            break;
            case 362: 
            return array[number];
            break;
            case 363: 
            return array[number];
            break;
            case 364: 
            return array[number];
            break;
            case 365: 
            return array[number];
            break;
            case 366: 
            return array[number];
            break;
            case 367: 
            return array[number];
            break;
            case 368: 
            return array[number];
            break;
            case 369: 
            return array[number];
            break;
            case 370: 
            return array[number];
            break;
            case 371: 
            return array[number];
            break;
            case 372: 
            return array[number];
            break;
            case 373: 
            return array[number];
            break;
            case 374: 
            return array[number];
            break;
            case 375: 
            return array[number];
            break;
            case 376: 
            return array[number];
            break;
            case 377: 
            return array[number];
            break;
            case 378: 
            return array[number];
            break;
            case 379: 
            return array[number];
            break;
            case 380: 
            return array[number];
            break;
            case 381: 
            return array[number];
            break;
            case 382: 
            return array[number];
            break;
            case 383: 
            return array[number];
            break;
            case 384: 
            return array[number];
            break;
            case 385: 
            return array[number];
            break;
            case 386: 
            return array[number];
            break;
            case 387: 
            return array[number];
            break;
            case 388: 
            return array[number];
            break;
            case 389: 
            return array[number];
            break;
            case 390: 
            return array[number];
            break;
            case 391: 
            return array[number];
            break;
            case 392: 
            return array[number];
            break;
            case 393: 
            return array[number];
            break;
            case 394: 
            return array[number];
            break;
            case 395: 
            return array[number];
            break;
            case 396: 
            return array[number];
            break;
            case 397: 
            return array[number];
            break;
            case 398: 
            return array[number];
            break;
            case 399: 
            return array[number];
            break;
            case 400: 
            return array[number];
            break;
            case 401: 
            return array[number];
            break;
            case 402: 
            return array[number];
            break;
            case 403: 
            return array[number];
            break;
            case 404: 
            return array[number];
            break;
            case 405: 
            return array[number];
            break;
            case 406: 
            return array[number];
            break;
            case 407: 
            return array[number];
            break;
            case 408: 
            return array[number];
            break;
            case 409: 
            return array[number];
            break;
            case 410: 
            return array[number];
            break;
            case 411: 
            return array[number];
            break;
            case 412: 
            return array[number];
            break;
            case 413: 
            return array[number];
            break;
            case 414: 
            return array[number];
            break;
            case 415: 
            return array[number];
            break;
            case 416: 
            return array[number];
            break;
            case 417: 
            return array[number];
            break;
            case 418: 
            return array[number];
            break;
            case 419: 
            return array[number];
            break;
            case 420: 
            return array[number];
            break;
            case 421: 
            return array[number];
            break;
            case 422: 
            return array[number];
            break;
            case 423: 
            return array[number];
            break;
            case 424: 
            return array[number];
            break;
            case 425: 
            return array[number];
            break;
            case 426: 
            return array[number];
            break;
            case 427: 
            return array[number];
            break;
            case 428: 
            return array[number];
            break;
            case 429: 
            return array[number];
            break;
            case 430: 
            return array[number];
            break;
            case 431: 
            return array[number];
            break;
            case 432: 
            return array[number];
            break;
            case 433: 
            return array[number];
            break;
            case 434: 
            return array[number];
            break;
            case 435: 
            return array[number];
            break;
            case 436: 
            return array[number];
            break;
            case 437: 
            return array[number];
            break;
            case 438: 
            return array[number];
            break;
            case 439: 
            return array[number];
            break;
            case 440: 
            return array[number];
            break;
            case 441: 
            return array[number];
            break;
            case 442: 
            return array[number];
            break;
            case 443: 
            return array[number];
            break;
            case 444: 
            return array[number];
            break;
            case 445: 
            return array[number];
            break;
            case 446: 
            return array[number];
            break;
            case 447: 
            return array[number];
            break;
            case 448: 
            return array[number];
            break;
            case 449: 
            return array[number];
            break;
            case 450: 
            return array[number];
            break;
            case 451: 
            return array[number];
            break;
            case 452: 
            return array[number];
            break;
            case 453: 
            return array[number];
            break;
            case 454: 
            return array[number];
            break;
            case 455: 
            return array[number];
            break;
            case 456: 
            return array[number];
            break;
            case 457: 
            return array[number];
            break;
            case 458: 
            return array[number];
            break;
            case 459: 
            return array[number];
            break;
            case 460: 
            return array[number];
            break;
            case 461: 
            return array[number];
            break;
            case 462: 
            return array[number];
            break;
            case 463: 
            return array[number];
            break;
            case 464: 
            return array[number];
            break;
            case 465: 
            return array[number];
            break;
            case 466: 
            return array[number];
            break;
            case 467: 
            return array[number];
            break;
            case 468: 
            return array[number];
            break;
            case 469: 
            return array[number];
            break;
            case 470: 
            return array[number];
            break;
            case 471: 
            return array[number];
            break;
            case 472: 
            return array[number];
            break;
            case 473: 
            return array[number];
            break;
            case 474: 
            return array[number];
            break;
            case 475: 
            return array[number];
            break;
            case 476: 
            return array[number];
            break;
            case 477: 
            return array[number];
            break;
            case 478: 
            return array[number];
            break;
            case 479: 
            return array[number];
            break;
            case 480: 
            return array[number];
            break;
            case 481: 
            return array[number];
            break;
            case 482: 
            return array[number];
            break;
            case 483: 
            return array[number];
            break;
            case 484: 
            return array[number];
            break;
            case 485: 
            return array[number];
            break;
            case 486: 
            return array[number];
            break;
            case 487: 
            return array[number];
            break;
            case 488: 
            return array[number];
            break;
            case 489: 
            return array[number];
            break;
            case 490: 
            return array[number];
            break;
            case 491: 
            return array[number];
            break;
            case 492: 
            return array[number];
            break;
            case 493: 
            return array[number];
            break;
            case 494: 
            return array[number];
            break;
            case 495: 
            return array[number];
            break;
            case 496: 
            return array[number];
            break;
            case 497: 
            return array[number];
            break;
            case 498: 
            return array[number];
            break;
            case 499: 
            return array[number];
            break;
            case 500: 
            return array[number];
            break;
            case 501: 
            return array[number];
            break;
            case 502: 
            return array[number];
            break;
            case 503: 
            return array[number];
            break;
            case 504: 
            return array[number];
            break;
            case 505: 
            return array[number];
            break;
            case 506: 
            return array[number];
            break;
            case 507: 
            return array[number];
            break;
            case 508: 
            return array[number];
            break;
            case 509: 
            return array[number];
            break;
            case 510: 
            return array[number];
            break;
            case 511: 
            return array[number];
            break;
            case 512: 
            return array[number];
            break;
            case 513: 
            return array[number];
            break;
            case 514: 
            return array[number];
            break;
            case 515: 
            return array[number];
            break;
            case 516: 
            return array[number];
            break;
            case 517: 
            return array[number];
            break;
            case 518: 
            return array[number];
            break;
            case 519: 
            return array[number];
            break;
            case 520: 
            return array[number];
            break;
            case 521: 
            return array[number];
            break;
            case 522: 
            return array[number];
            break;
            case 523: 
            return array[number];
            break;
            case 524: 
            return array[number];
            break;
            case 525: 
            return array[number];
            break;
            case 526: 
            return array[number];
            break;
            case 527: 
            return array[number];
            break;
            case 528: 
            return array[number];
            break;
            case 529: 
            return array[number];
            break;
            case 530: 
            return array[number];
            break;
            case 531: 
            return array[number];
            break;
            case 532: 
            return array[number];
            break;
            case 533: 
            return array[number];
            break;
            case 534: 
            return array[number];
            break;
            case 535: 
            return array[number];
            break;
            case 536: 
            return array[number];
            break;
            case 537: 
            return array[number];
            break;
            case 538: 
            return array[number];
            break;
            case 539: 
            return array[number];
            break;
            case 540: 
            return array[number];
            break;
            case 541: 
            return array[number];
            break;
            case 542: 
            return array[number];
            break;
            case 543: 
            return array[number];
            break;
            case 544: 
            return array[number];
            break;
            case 545: 
            return array[number];
            break;
            case 546: 
            return array[number];
            break;
            case 547: 
            return array[number];
            break;
            case 548: 
            return array[number];
            break;
            case 549: 
            return array[number];
            break;
            case 550: 
            return array[number];
            break;
            case 551: 
            return array[number];
            break;
            case 552: 
            return array[number];
            break;
            case 553: 
            return array[number];
            break;
            case 554: 
            return array[number];
            break;
            case 555: 
            return array[number];
            break;
            case 556: 
            return array[number];
            break;
            case 557: 
            return array[number];
            break;
            case 558: 
            return array[number];
            break;
            case 559: 
            return array[number];
            break;
            case 560: 
            return array[number];
            break;
            case 561: 
            return array[number];
            break;
            case 562: 
            return array[number];
            break;
            case 563: 
            return array[number];
            break;
            case 564: 
            return array[number];
            break;
            case 565: 
            return array[number];
            break;
            case 566: 
            return array[number];
            break;
            case 567: 
            return array[number];
            break;
            case 568: 
            return array[number];
            break;
            case 569: 
            return array[number];
            break;
            case 570: 
            return array[number];
            break;
            case 571: 
            return array[number];
            break;
            case 572: 
            return array[number];
            break;
            case 573: 
            return array[number];
            break;
            case 574: 
            return array[number];
            break;
            case 575: 
            return array[number];
            break;
            case 576: 
            return array[number];
            break;
            case 577: 
            return array[number];
            break;
            case 578: 
            return array[number];
            break;
            case 579: 
            return array[number];
            break;
            case 580: 
            return array[number];
            break;
            case 581: 
            return array[number];
            break;
            case 582: 
            return array[number];
            break;
            case 583: 
            return array[number];
            break;
            case 584: 
            return array[number];
            break;
            case 585: 
            return array[number];
            break;
            case 586: 
            return array[number];
            break;
            case 587: 
            return array[number];
            break;
            case 588: 
            return array[number];
            break;
            case 589: 
            return array[number];
            break;
            case 590: 
            return array[number];
            break;
            case 591: 
            return array[number];
            break;
            case 592: 
            return array[number];
            break;
            case 593: 
            return array[number];
            break;
            case 594: 
            return array[number];
            break;
            case 595: 
            return array[number];
            break;
            case 596: 
            return array[number];
            break;
            case 597: 
            return array[number];
            break;
            case 598: 
            return array[number];
            break;
            case 599: 
            return array[number];
            break;
            case 600: 
            return array[number];
            break;
            case 601: 
            return array[number];
            break;
            case 602: 
            return array[number];
            break;
            case 603: 
            return array[number];
            break;
            case 604: 
            return array[number];
            break;
            case 605: 
            return array[number];
            break;
            case 606: 
            return array[number];
            break;
            case 607: 
            return array[number];
            break;
            case 608: 
            return array[number];
            break;
            case 609: 
            return array[number];
            break;
            case 610: 
            return array[number];
            break;
            case 611: 
            return array[number];
            break;
            case 612: 
            return array[number];
            break;
            case 613: 
            return array[number];
            break;
            case 614: 
            return array[number];
            break;
            case 615: 
            return array[number];
            break;
            case 616: 
            return array[number];
            break;
            case 617: 
            return array[number];
            break;
            case 618: 
            return array[number];
            break;
            case 619: 
            return array[number];
            break;
            case 620: 
            return array[number];
            break;
            case 621: 
            return array[number];
            break;
            case 622: 
            return array[number];
            break;
            case 623: 
            return array[number];
            break;
            case 624: 
            return array[number];
            break;
            case 625: 
            return array[number];
            break;
            case 626: 
            return array[number];
            break;
            case 627: 
            return array[number];
            break;
            case 628: 
            return array[number];
            break;
            case 629: 
            return array[number];
            break;
            case 630: 
            return array[number];
            break;
            case 631: 
            return array[number];
            break;
            case 632: 
            return array[number];
            break;
            case 633: 
            return array[number];
            break;
            case 634: 
            return array[number];
            break;
            case 635: 
            return array[number];
            break;
            case 636: 
            return array[number];
            break;
            case 637: 
            return array[number];
            break;
            case 638: 
            return array[number];
            break;
            case 639: 
            return array[number];
            break;
            case 640: 
            return array[number];
            break;
            case 641: 
            return array[number];
            break;
            case 642: 
            return array[number];
            break;
            case 643: 
            return array[number];
            break;
            case 644: 
            return array[number];
            break;
            case 645: 
            return array[number];
            break;
            case 646: 
            return array[number];
            break;
            case 647: 
            return array[number];
            break;
            case 648: 
            return array[number];
            break;
            case 649: 
            return array[number];
            break;
            case 650: 
            return array[number];
            break;
            case 651: 
            return array[number];
            break;
            case 652: 
            return array[number];
            break;
            case 653: 
            return array[number];
            break;
            case 654: 
            return array[number];
            break;
            case 655: 
            return array[number];
            break;
            case 656: 
            return array[number];
            break;
            case 657: 
            return array[number];
            break;
            case 658: 
            return array[number];
            break;
            case 659: 
            return array[number];
            break;
            case 660: 
            return array[number];
            break;
            case 661: 
            return array[number];
            break;
            case 662: 
            return array[number];
            break;
            case 663: 
            return array[number];
            break;
            case 664: 
            return array[number];
            break;
            case 665: 
            return array[number];
            break;
            case 666: 
            return array[number];
            break;
            case 667: 
            return array[number];
            break;
            case 668: 
            return array[number];
            break;
            case 669: 
            return array[number];
            break;
            case 670: 
            return array[number];
            break;
            case 671: 
            return array[number];
            break;
            case 672: 
            return array[number];
            break;
            case 673: 
            return array[number];
            break;
            case 674: 
            return array[number];
            break;
            case 675: 
            return array[number];
            break;
            case 676: 
            return array[number];
            break;
            case 677: 
            return array[number];
            break;
            case 678: 
            return array[number];
            break;
            case 679: 
            return array[number];
            break;
            case 680: 
            return array[number];
            break;
            case 681: 
            return array[number];
            break;
            case 682: 
            return array[number];
            break;
            case 683: 
            return array[number];
            break;
            case 684: 
            return array[number];
            break;
            case 685: 
            return array[number];
            break;
            case 686: 
            return array[number];
            break;
            case 687: 
            return array[number];
            break;
            case 688: 
            return array[number];
            break;
            case 689: 
            return array[number];
            break;
            case 690: 
            return array[number];
            break;
            case 691: 
            return array[number];
            break;
            case 692: 
            return array[number];
            break;
            case 693: 
            return array[number];
            break;
            case 694: 
            return array[number];
            break;
            case 695: 
            return array[number];
            break;
            case 696: 
            return array[number];
            break;
            case 697: 
            return array[number];
            break;
            case 698: 
            return array[number];
            break;
            case 699: 
            return array[number];
            break;
            case 700: 
            return array[number];
            break;
            case 701: 
            return array[number];
            break;
            case 702: 
            return array[number];
            break;
            case 703: 
            return array[number];
            break;
            case 704: 
            return array[number];
            break;
            case 705: 
            return array[number];
            break;
            case 706: 
            return array[number];
            break;
            case 707: 
            return array[number];
            break;
            case 708: 
            return array[number];
            break;
            case 709: 
            return array[number];
            break;
            case 710: 
            return array[number];
            break;
            case 711: 
            return array[number];
            break;
            case 712: 
            return array[number];
            break;
            case 713: 
            return array[number];
            break;
            case 714: 
            return array[number];
            break;
            case 715: 
            return array[number];
            break;
            case 716: 
            return array[number];
            break;
            case 717: 
            return array[number];
            break;
            case 718: 
            return array[number];
            break;
            case 719: 
            return array[number];
            break;
            case 720: 
            return array[number];
            break;
            case 721: 
            return array[number];
            break;
            case 722: 
            return array[number];
            break;
            case 723: 
            return array[number];
            break;
            case 724: 
            return array[number];
            break;
            case 725: 
            return array[number];
            break;
            case 726: 
            return array[number];
            break;
            case 727: 
            return array[number];
            break;
            case 728: 
            return array[number];
            break;
            case 729: 
            return array[number];
            break;
            case 730: 
            return array[number];
            break;
            case 731: 
            return array[number];
            break;
            case 732: 
            return array[number];
            break;
            case 733: 
            return array[number];
            break;
            case 734: 
            return array[number];
            break;
            case 735: 
            return array[number];
            break;
            case 736: 
            return array[number];
            break;
            case 737: 
            return array[number];
            break;
            case 738: 
            return array[number];
            break;
            case 739: 
            return array[number];
            break;
            case 740: 
            return array[number];
            break;
            case 741: 
            return array[number];
            break;
            case 742: 
            return array[number];
            break;
            case 743: 
            return array[number];
            break;
            case 744: 
            return array[number];
            break;
            case 745: 
            return array[number];
            break;
            case 746: 
            return array[number];
            break;
            case 747: 
            return array[number];
            break;
            case 748: 
            return array[number];
            break;
            case 749: 
            return array[number];
            break;
            case 750: 
            return array[number];
            break;
            case 751: 
            return array[number];
            break;
            case 752: 
            return array[number];
            break;
            case 753: 
            return array[number];
            break;
            case 754: 
            return array[number];
            break;
            case 755: 
            return array[number];
            break;
            case 756: 
            return array[number];
            break;
            case 757: 
            return array[number];
            break;
            case 758: 
            return array[number];
            break;
            case 759: 
            return array[number];
            break;
            case 760: 
            return array[number];
            break;
            case 761: 
            return array[number];
            break;
            case 762: 
            return array[number];
            break;
            case 763: 
            return array[number];
            break;
            case 764: 
            return array[number];
            break;
            case 765: 
            return array[number];
            break;
            case 766: 
            return array[number];
            break;
            case 767: 
            return array[number];
            break;
            case 768: 
            return array[number];
            break;
            case 769: 
            return array[number];
            break;
            case 770: 
            return array[number];
            break;
            case 771: 
            return array[number];
            break;
            case 772: 
            return array[number];
            break;
            case 773: 
            return array[number];
            break;
            case 774: 
            return array[number];
            break;
            case 775: 
            return array[number];
            break;
            case 776: 
            return array[number];
            break;
            case 777: 
            return array[number];
            break;
            case 778: 
            return array[number];
            break;
            case 779: 
            return array[number];
            break;
            case 780: 
            return array[number];
            break;
            case 781: 
            return array[number];
            break;
            case 782: 
            return array[number];
            break;
            case 783: 
            return array[number];
            break;
            case 784: 
            return array[number];
            break;
            case 785: 
            return array[number];
            break;
            case 786: 
            return array[number];
            break;
            case 787: 
            return array[number];
            break;
            case 788: 
            return array[number];
            break;
            case 789: 
            return array[number];
            break;
            case 790: 
            return array[number];
            break;
            case 791: 
            return array[number];
            break;
            case 792: 
            return array[number];
            break;
            case 793: 
            return array[number];
            break;
            case 794: 
            return array[number];
            break;
            case 795: 
            return array[number];
            break;
            case 796: 
            return array[number];
            break;
            case 797: 
            return array[number];
            break;
            case 798: 
            return array[number];
            break;
            case 799: 
            return array[number];
            break;
        case 800:
            return array[number];
            break;
        case 801:
            return array[number];
            break;
        case 802:
            return array[number];
            break;
        case 803:
            return array[number];
            break;
        case 804:
            return array[number];
            break;
        case 805:
            return array[number];
            break;
        case 806:
            return array[number];
            break;
        case 807:
            return array[number];
            break;
        case 808:
            return array[number];
            break;
        case 809:
            return array[number];
            break;
        case 810:
            return array[number];
            break;
            case 811:
                return array[number];
                break;
            case 812:
                return array[number];
                break;
            case 813:
                return array[number];
                break;
            case 814:
                return array[number];
                break;
            case 815:
                return array[number];
                break;
            case 816:
                return array[number];
                break;
            case 817:
                return array[number];
                break;
            case 818:
                return array[number];
                break;
            case 819:
                return array[number];
                break;
            case 820:
                return array[number];
                break;
            case 821:
                return array[number];
                break;
                case 822:
                    return array[number];
                    break;
                case 823:
                    return array[number];
                    break;
                case 824:
                    return array[number];
                    break;
                case 825:
                    return array[number];
                    break;
                case 826:
                    return array[number];
                    break;
                case 827:
                    return array[number];
                    break;
                case 828:
                    return array[number];
                    break;
                case 829:
                    return array[number];
                    break;
                case 830:
                    return array[number];
                    break;
                case 831:
                    return array[number];
                    break;
                case 832:
                    return array[number];
                    break;
                case 833:
                    return array[number];
                    break;
                case 834:
                    return array[number];
                    break;
                case 835:
                    return array[number];
                    break;
                case 836:
                    return array[number];
                    break;
                case 837:
                    return array[number];
                    break;
                case 838:
                    return array[number];
                    break;
            case 839:
                return array[number];
                break;
            case 840:
                return array[number];
                break;
                case 841:
                    return array[number];
                    break;
                case 842:
                    return array[number];
                    break;
                case 843:
                    return array[number];
                    break;
                case 844:
                    return array[number];
                    break;
                case 845:
                    return array[number];
                    break;
                case 846:
                    return array[number];
                    break;
                case 847:
                    return array[number];
                    break;
                case 848:
                    return array[number];
                    break;
                case 849:
                    return array[number];
                    break;
                case 850:
                    return array[number];
                    break;
                case 851:
                    return array[number];
                    break;
                    case 852:
                        return array[number];
                        break;
                    case 853:
                        return array[number];
                        break;
                    case 854:
                        return array[number];
                        break;
                    case 855:
                        return array[number];
                        break;
                    case 856:
                        return array[number];
                        break;
                    case 857:
                        return array[number];
                        break;
                    case 858:
                        return array[number];
                        break;
                    case 859:
                        return array[number];
                        break;
                    case 860:
                        return array[number];
                        break;
                    case 861:
                        return array[number];
                        break;
                    case 862:
                        return array[number];
                        break;
                    case 863:
                        return array[number];
                        break;
                    case 864:
                        return array[number];
                        break;
                    case 865:
                        return array[number];
                        break;
                    case 866:
                        return array[number];
                        break;
                    case 867:
                        return array[number];
                        break;
                    case 868:
                        return array[number];
                        break;
                case 869:
                    return array[number];
                    break;
                case 870:
                    return array[number];
                    break;
                    case 871:
                        return array[number];
                        break;
                    case 872:
                        return array[number];
                        break;
                    case 873:
                        return array[number];
                        break;
                    case 874:
                        return array[number];
                        break;
                    case 875:
                        return array[number];
                        break;
                    case 876:
                        return array[number];
                        break;
                    case 877:
                        return array[number];
                        break;
                    case 878:
                        return array[number];
                        break;
                    case 879:
                        return array[number];
                        break;
                    case 880:
                        return array[number];
                        break;
                    case 881:
                        return array[number];
                        break;
                        case 882:
                            return array[number];
                            break;
                        case 883:
                            return array[number];
                            break;
                        case 884:
                            return array[number];
                            break;
                        case 885:
                            return array[number];
                            break;
                        case 886:
                            return array[number];
                            break;
                        case 887:
                            return array[number];
                            break;
                        case 888:
                            return array[number];
                            break;
                        case 889:
                            return array[number];
                            break;
                        case 890:
                            return array[number];
                            break;
                        case 891:
                            return array[number];
                            break;
                        case 892:
                            return array[number];
                            break;
                        case 893:
                            return array[number];
                            break;
                        case 894:
                            return array[number];
                            break;
                        case 895:
                            return array[number];
                            break;
                        case 896:
                            return array[number];
                            break;
                        case 897:
                            return array[number];
                            break;
                        case 898:
                            return array[number];
                            break;
                    case 899:
                        return array[number];
                        break;
                    case 900:
                        return array[number];
                        break;
                        case 901:
                            return array[number];
                            break;
                        case 902:
                            return array[number];
                            break;
                        case 903:
                            return array[number];
                            break;
                        case 904:
                            return array[number];
                            break;
                        case 905:
                            return array[number];
                            break;
                        case 906:
                            return array[number];
                            break;
                        case 907:
                            return array[number];
                            break;
                        case 908:
                            return array[number];
                            break;
                        case 909:
                            return array[number];
                            break;
                        case 910:
                            return array[number];
                            break;
                            case 911:
                                return array[number];
                                break;
                            case 912:
                                return array[number];
                                break;
                            case 913:
                                return array[number];
                                break;
                            case 914:
                                return array[number];
                                break;
                            case 915:
                                return array[number];
                                break;
                            case 916:
                                return array[number];
                                break;
                            case 917:
                                return array[number];
                                break;
                            case 918:
                                return array[number];
                                break;
                            case 919:
                                return array[number];
                                break;
                            case 920:
                                return array[number];
                                break;
                            case 921:
                                return array[number];
                                break;
                                case 922:
                                    return array[number];
                                    break;
                                case 923:
                                    return array[number];
                                    break;
                                case 924:
                                    return array[number];
                                    break;
                                case 925:
                                    return array[number];
                                    break;
                                case 926:
                                    return array[number];
                                    break;
                                case 927:
                                    return array[number];
                                    break;
                                case 928:
                                    return array[number];
                                    break;
                                case 929:
                                    return array[number];
                                    break;
                                case 930:
                                    return array[number];
                                    break;
                                case 931:
                                    return array[number];
                                    break;
                                case 932:
                                    return array[number];
                                    break;
                                case 933:
                                    return array[number];
                                    break;
                                case 934:
                                    return array[number];
                                    break;
                                case 935:
                                    return array[number];
                                    break;
                                case 936:
                                    return array[number];
                                    break;
                                case 937:
                                    return array[number];
                                    break;
                                case 938:
                                    return array[number];
                                    break;
                            case 939:
                                return array[number];
                                break;
                            case 940:
                                return array[number];
                                break;
                                case 941:
                                    return array[number];
                                    break;
                                case 942:
                                    return array[number];
                                    break;
                                case 943:
                                    return array[number];
                                    break;
                                case 944:
                                    return array[number];
                                    break;
                                case 945:
                                    return array[number];
                                    break;
                                case 946:
                                    return array[number];
                                    break;
                                case 947:
                                    return array[number];
                                    break;
                                case 948:
                                    return array[number];
                                    break;
                                case 949:
                                    return array[number];
                                    break;
                                case 950:
                                    return array[number];
                                    break;
                                case 951:
                                    return array[number];
                                    break;
                                    case 952:
                                        return array[number];
                                        break;
                                    case 953:
                                        return array[number];
                                        break;
                                    case 954:
                                        return array[number];
                                        break;
                                    case 955:
                                        return array[number];
                                        break;
                                    case 956:
                                        return array[number];
                                        break;
                                    case 957:
                                        return array[number];
                                        break;
                                    case 958:
                                        return array[number];
                                        break;
                                    case 959:
                                        return array[number];
                                        break;
                                    case 960:
                                        return array[number];
                                        break;
                                    case 961:
                                        return array[number];
                                        break;
                                    case 962:
                                        return array[number];
                                        break;
                                    case 963:
                                        return array[number];
                                        break;
                                    case 964:
                                        return array[number];
                                        break;
                                    case 965:
                                        return array[number];
                                        break;
                                    case 966:
                                        return array[number];
                                        break;
                                    case 967:
                                        return array[number];
                                        break;
                                    case 968:
                                        return array[number];
                                        break;
                                case 969:
                                    return array[number];
                                    break;
                                case 970:
                                    return array[number];
                                    break;
                                    case 971:
                                        return array[number];
                                        break;
                                    case 972:
                                        return array[number];
                                        break;
                                    case 973:
                                        return array[number];
                                        break;
                                    case 974:
                                        return array[number];
                                        break;
                                    case 975:
                                        return array[number];
                                        break;
                                    case 976:
                                        return array[number];
                                        break;
                                    case 977:
                                        return array[number];
                                        break;
                                    case 978:
                                        return array[number];
                                        break;
                                    case 979:
                                        return array[number];
                                        break;
                                    case 980:
                                        return array[number];
                                        break;
                                    case 981:
                                        return array[number];
                                        break;
                                        case 982:
                                            return array[number];
                                            break;
                                        case 983:
                                            return array[number];
                                            break;
                                        case 984:
                                            return array[number];
                                            break;
                                        case 985:
                                            return array[number];
                                            break;
                                        case 986:
                                            return array[number];
                                            break;
                                        case 987:
                                            return array[number];
                                            break;
                                        case 988:
                                            return array[number];
                                            break;






        case 989:
            return array[number];
            break;
        case 990:
            return array[number];
            break;
        case 991:
            return array[number];
            break;
        case 992:
            return array[number];
            break;
        case 993:
            return array[number];
            break;
        case 994:
            return array[number];
            break;
        case 995:
            return array[number];
            break;
        case 996:
            return array[number];
            break;
        case 997:
            return array[number];
            break;
        case 998:
            return array[number];
            break;
        case 999: 
            return array[number];
            break;
    } */
}
