#!/usr/bin/python

essentials = 50
wants = 30
savings = 20
income = 0
answer = ""
essentialsAmount = 0
wantsAmount = 0
savingsAmount = 0

input("Welcome to the simple budgeting tool.")
input("This application will ask for your income, and then how you want to divide it among 3 categories:")
print("First, 'essentials', which includes things like housing costs, groceries, fuel...")
input("Basically, things you can't live without.")
input("Next, 'wants', which is just anything that you can live without.")
input("Finally, 'savings', which includes savings and debt repayments.")
print("These settings are initialized to 50% for essentials, 30% for wants, and 20% for savings.")
input("You can change these in the questions, but you don't have to. If you don't want to change the division, just hit 'enter' when asked.")
print("Let's start with how you want to divide your income.")

while answer != "y":
    income = input("Enter your income (rounded to the nearest whole number) here: ")
    print(f"You entered {income}")
    answer = input("Is this correct? (y/n) ")

print("Great, let's move on.\n")
answer = ""

print("Now let's decide how you want to divide your income.")

while answer != "y":
    answer = input("Enter the percentage of your income you would like to dedicate to essentials: ")
    if answer == "":
        print(f"You entered {essentials}")
        answer = input("Is this correct? (y/n) ")
    else:
        essentials = answer
        print(f"You entered {essentials}")
        answer = input("Is this correct? (y/n) ")

print("Okay, now on to wants.\n")
answer = ""

while answer != "y":
    answer = input("Enter the percentage of your income you would like to dedicate to wants: ")
    if answer == "":
        print(f"You entered {wants}")
        answer = input("Is this correct? (y/n) ")
    else:
        wants = answer
        print(f"You entered {wants}")
        answer = input("Is this correct? (y/n) ")

print("And finally, savings.\n")
answer = ""

while answer != "y":
    answer = input("Enter the percentage of your income you would like to dedicate to savings: ")
    if answer == "":
        print(f"You entered {savings}")
        answer = input("Is this correct? (y/n) ")
    else:
        savings = answer
        print(f"You entered {savings}")
        answer = input("Is this correct? (y/n) ")



# Now for the calculations ooooo fun.
essentialsAmount = (int(essentials) * int(income)) / 100
wantsAmount = (int(wants) * int(income)) / 100
savingsAmount = (int(savings) * int(income)) / 100

print("And here are the amounts of money you'll be dedicating to each category this month:")
print(f"Essentials: {essentialsAmount}")
print(f"Wants: {wantsAmount}")
print(f"Savings: {savingsAmount}\n")


input("Thanks so much for using this tool. Press enter when you're ready to close the program.")
exit()
