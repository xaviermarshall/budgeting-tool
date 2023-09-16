
use text_io::read;

fn main() {
    let ans: String;
    let income: f64;
    let essentials: f64;
    let wants: f64;
    let savings: f64;
    let essentials_amount: f64;
    let wants_amount: f64;
    let savings_amount: f64;

    println!("Welcome to the simple budget calculator!");
    println!("This is a simple program designed to help you budget your money.");
    println!("Please enter your monthly income.");
    income = read!();
    println!("The default percentages are 50% for essentials, 30% for wants, and 20% for savings.");
    println!("Would you like to change these percentages? (y/n)");
    ans = read!();
    if ans == "y" {
        println!("Please enter the percentage of your income you would like to spend on essentials.");
        essentials = read().parse().unwrap();
        println!("Please enter the percentage of your income you would like to spend on wants.");
        wants = read().parse().unwrap();
        println!("Please enter the percentage of your income you would like to save.");
        savings = read().parse().unwrap();
    } else {
        essentials = 50.0;
        wants = 30.0;
        savings = 20.0;
    }

    essentials_amount = (essentials / 100.0) * income;
    wants_amount = (wants / 100.0) * income;
    savings_amount = (savings / 100.0) * income;

    println!("Here are the amounts you should spend on each category this month:");
    println!("Essentials: ${}", essentials_amount);
    println!("Wants: ${}", wants_amount);
    println!("Savings: ${}", savings_amount);
}

fn read() -> String {
    let mut input = String::new();
    std::io::stdin().read_line(&mut input).unwrap();
    input.trim().to_string()
}




